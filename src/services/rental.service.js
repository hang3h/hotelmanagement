const Rental = require('../models/rental.model');
const Room = require('../models/room.model');
const dataHelper = require('../utils/dataHelper');
const moment = require('moment');

exports.get = async (currentUser, filter, start = 0, length = null, orderCol = null, orderDir = null) => {
  let filterQuery = {};

  const searchConditions = filter.search ? [
    { customerName: { $regex: filter.search, $options: 'i' } },
    { customerPhone: { $regex: filter.search, $options: 'i' } },
    { customerIdCard: { $regex: filter.search, $options: 'i' } },
    { rentalCode: { $regex: filter.search, $options: 'i' } }
  ] : [];

  const statusCondition = filter.status ? { status: filter.status } : null;
  const selectedDate = filter.selectedDate ? moment(filter.selectedDate) : null;
  const dateCondition = selectedDate ? { startDate: { $lte: selectedDate }, endDate: { $gte: selectedDate } } : null;
  const roomIds = filter.roomType ? await Room.find({ type: filter.roomType }).distinct('_id') : null;


  const roomTypeCondition = roomIds ? { room: { $in: roomIds } } : null;

  let areaCondition = null;
  if (currentUser.role === 'receptionist' && currentUser.area?._id) {
    const roomsInArea = await Room.find({ area: currentUser.area._id }).distinct('_id');
    areaCondition = { room: { $in: roomsInArea } };
  }

  const andConditions = [];
  if (searchConditions.length) andConditions.push({ $or: searchConditions });
  if (statusCondition) andConditions.push(statusCondition);
  if (dateCondition) andConditions.push(dateCondition);
  if (roomTypeCondition) andConditions.push(roomTypeCondition);
  if (areaCondition) andConditions.push(areaCondition);

  if (andConditions.length > 0) {
    filterQuery = { $and: andConditions };
  }

  const recordsTotal = await Rental.countDocuments();
  const recordsFiltered = await Rental.countDocuments(filterQuery);
  if (recordsFiltered === 0) {
    return { recordsTotal, recordsFiltered, data: [] };
  }

  let query = Rental.find(filterQuery)
    .populate('createdBy', 'username fullname')
    .populate('room', 'roomCode type price')
    .lean();

  query = query.sort(orderCol ? { [orderCol]: orderDir === 'asc' ? 1 : -1 } : { ['updatedAt']: -1 });

  if (start > 0) {
    query = query.skip(start);
  }

  if (length) {
    query = query.limit(length);
  }

  const rentals = await query.exec();
  const data = rentals.map(item => ({
    _id: item._id,
    rentalCode: item.rentalCode,
    customerName: item.customerName,
    customerIdCard: item.customerIdCard,
    customerPhone: item.customerPhone,
    customerEmail: item.customerEmail,
    room: item.room,
    startDate: item.startDate,
    endDate: item.endDate,
    totalPrice: item.totalPrice,
    amountPaid: item.amountPaid,
    status: item.status,
    notes: item.notes,
    createdBy: item.createdBy,
    roomName: `${item.room.roomCode} - ${dataHelper.formatCurrency(item.room.price)}${item.room.note ? ' - ' + item.room.note : ''}`,
    remainingAmount: Math.max(item.totalPrice - item.amountPaid, 0),
    totalPriceFormatted: dataHelper.formatCurrency(item.totalPrice),
    amountPaidFormatted: dataHelper.formatCurrency(item.amountPaid),
    remainingFormatted: dataHelper.formatCurrency(Math.max(item.totalPrice - item.amountPaid, 0)),
    customerPhoneFormatted: dataHelper.formatPhone(item.customerPhone),
    updatedAtFormatted: dataHelper.formatISODate(item.updatedAt)
  }));

  return { recordsTotal, recordsFiltered, data };
};

exports.searchAll = async (keyword) => {
  keyword = keyword ?? '';
  keyword = keyword.trim();
  keyword = keyword.replaceAll(' ', '').toUpperCase();
  if (!keyword || keyword.trim() === '') {
    return [];
  }

  let query = Rental.find({
    $and: [
      {
        $or: [
          { customerPhone: keyword },
          { customerIdCard: keyword },
          { rentalCode: keyword }
        ]
      },
      { status: { $in: ['pending', 'active'] } }
    ]
  }).populate({
    path: 'room',
    select: 'roomCode description area floor',
    populate: {
      path: 'area',
      select: 'areaCode description'
    }
  }).lean();

  query = query.sort({ ['rentalCode']: -1 });

  const rentals = await query.exec();

  const data = rentals.map(item => ({
    _id: item._id,
    rentalCode: item.rentalCode,
    status: item.status,
    customerName: item.customerName,
    customerPhone: item.customerPhone,
    customerPhoneFormatted: dataHelper.formatPhone(item.customerPhone),
    customerIdCard: item.customerIdCard,
    areaCode: item.room.area.areaCode,
    floor: item.room.floor,
    roomCode: item.room.roomCode,
    roomDescription: item.room.description,
    startDate: dataHelper.formatISODate(item.startDate),
    endDate: dataHelper.formatISODate(item.endDate),
    totalPrice: item.totalPrice,
    amountPaid: item.amountPaid,
    remainingAmount: Math.max(item.totalPrice - item.amountPaid, 0),
    totalPriceFormatted: dataHelper.formatCurrency(item.totalPrice),
    amountPaidFormatted: dataHelper.formatCurrency(item.amountPaid),
    remainingAmountFormatted: dataHelper.formatCurrency(Math.max(item.totalPrice - item.amountPaid, 0)),
    updatedAtFormatted: dataHelper.formatISODate(item.updatedAt)
  }));

  return data;
};

exports.getById = async (userId) => {
  return await User.findById(userId);
};

exports.create = async (model) => {
  if (model.status == 'active' || model.status == 'pending') {
    const isOverlap = await Rental.findOne({
      room: model.room,
      startDate: { $lt: model.endDate },
      endDate: { $gt: model.startDate }
    });

    if (isOverlap) {
      return { success: false, message: 'Phòng đã được đặt trong khoảng thời gian này', data: null };
    }
  }

  const rental = new Rental(model);
  const result = await rental.save();

  if (!result) {
    return { success: false, message: 'Tạo đặt phòng thất bại, vui lòng thử lại sau!', data: null };
  } else {
    return { success: true, message: 'Tạo đặt phòng thành công', data: result };
  }
};

exports.update = async (model) => {
  if (model.status == 'active' || model.status == 'pending') {
    const isOverlap = await Rental.findOne(
      {
        room: model.room,
        startDate: { $lt: model.endDate },
        endDate: { $gt: model.startDate },
        _id: { $ne: model._id }
      });

    if (isOverlap) {
      return { success: false, message: 'Phòng đã được đặt trong khoảng thời gian này', data: null };
    }
  }

  const result = await Rental.updateOne(
    { _id: model._id },
    { $set: model }
  );

  if (!result) {
    return { success: false, message: 'Cập nhật đặt phòng thất bại, vui lòng thử lại sau!', data: null };
  } else {
    return { success: true, message: 'Cập nhật đặt phòng thành công', data: result };
  }
};