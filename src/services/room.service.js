const Rental = require('../models/rental.model');
const Room = require('../models/room.model');
const dataHelper = require('../utils/dataHelper');

exports.get = async (search = '', start = 0, length = null, orderCol = null, orderDir = null) => {
  let filter = {};
  if (search) {
    filter = {
      $or: [
        { roomCode: { $regex: search, $options: 'i' } },
        { type: { $regex: search, $options: 'i' } }
      ]
    };
  }

  const recordsTotal = await Room.countDocuments();
  const recordsFiltered = await Room.countDocuments(filter);
  if (recordsFiltered === 0) {
    return { recordsTotal, recordsFiltered, data: [] };
  }

  let query = Room.find(filter).populate('area', 'areaCode description').lean();

  if (orderCol) {
    let sort = {};
    sort[orderCol] = orderDir === 'asc' ? 1 : -1;
    query = query.sort(sort);
  }

  if (start > 0) {
    query = query.skip(start);
  }

  if (length) {
    query = query.limit(length);
  }

  const rooms = await query.exec();

  return { recordsTotal, recordsFiltered, data: rooms };
};

exports.getById = async (roomId) => {
  return await Room.findById(roomId).populate('area', 'areaCode description').lean();
};

exports.update = async (roomData) => {

  if (roomData.status == 'maintenance') {
    const now = new Date();
    const isRented = await Rental.exists({
      room: roomData.id,
      startDate: { $lte: now },
      endDate: { $gte: now },
      status: { $in: ['pending', 'active'] }
    });

    if (isRented) {
      return { success: false, message: 'Không thể thiết lập chế độ bảo trì phòng khi đang cho thuê', data: null };
    }
  }

  const model = {
    roomCode: roomData.roomCode,
    status: roomData.status || 'available',
    price: roomData.price || 0,
    description: roomData.description || '',
    note: roomData.note || ''
  };

  const result = await Room.findByIdAndUpdate(roomData.id, model, { new: false });
  return { success: true, message: '', data: result };
};

exports.getRoomsStatus = async (selectedDate, areaCode) => {
  const result = await Room.aggregate([
    {
      $match: {
        roomCode: { $regex: new RegExp(`^${areaCode}`, 'i') }
      }
    },
    {
      $lookup: {
        from: "rentals",
        localField: "_id",
        foreignField: "room",
        as: "rentals"
      }
    },
    {
      $addFields: {
        currentRental: {
          $first: {
            $filter: {
              input: "$rentals",
              as: "r",
              cond: {
                $and: [
                  { $lte: ["$$r.startDate", selectedDate] },
                  { $gte: ["$$r.endDate", selectedDate] },
                  { $in: ["$$r.status", ["active", "pending"]] },
                ]
              }
            }
          }
        }
      }
    },
    {
      $project: {
        roomCode: 1,
        status: {
          $cond: [
            { $eq: ["$status", "maintenance"] },
            "maintenance",
            {
              $cond: [
                { $ifNull: ["$currentRental", false] },
                "occupied",
                "available"
              ]
            }
          ]
        },
        currentRental: 1
      }
    }
  ]);

  return result;
};

exports.getAvailableRooms = async (currentUser, search, startDate, endDate, roomType, includeRoomId = null) => {
  const overlappingRentals = await Rental.find({
    status: { $in: ['active', 'pending'] },
    startDate: { $lt: endDate },
    endDate: { $gt: startDate }
  }).distinct('room');

  let excludedRoomIds = overlappingRentals;
  if (includeRoomId){
    excludedRoomIds =  overlappingRentals.filter(id => id.toString() !== includeRoomId.toString());
  }

  if (currentUser.role === 'receptionist') {
    const excludedRoomIdsInArea = await Room.find({ area: { $ne: currentUser.area._id } }).distinct('_id');
    excludedRoomIds = [...new Set([...excludedRoomIds, ...excludedRoomIdsInArea])];
  }

  const roomQuery = {
    _id: { $nin: excludedRoomIds },
    status: 'available'
  };

  if (roomType) {
    roomQuery.type = roomType;
  }

  if (search) {
    roomQuery.roomCode = { $regex: search, $options: 'i' };
  }

  const availableRooms = await Room.find(roomQuery).lean();

  const data = availableRooms.map(item => ({
    _id: item._id,
    roomCode: item.roomCode,
    area: item.area,
    floor: item.floor,
    price: item.price,
    status: item.status,
    description: item.description,
    note: item.note,
    roomName: `${item.roomCode} - ${dataHelper.formatCurrency(item.price)}${item.note ? ' - ' + item.note : ''}`
  }));

  return data;
};