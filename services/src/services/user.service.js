const bcrypt = require('bcryptjs');
const dataHelper = require('../utils/dataHelper');
const User = require('../models/user.model');
const Area = require('../models/area.model');

exports.get = async (search = '', start = 0, length = null, orderCol = null, orderDir = null) => {
  let filter = {};
  if (search) {
    filter = {
      $or: [
        { username: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { fullname: { $regex: search, $options: 'i' } }
      ]
    };
  }

  const recordsTotal = await User.countDocuments();
  const recordsFiltered = await User.countDocuments(filter);
  if (recordsFiltered === 0) {
    return { recordsTotal, recordsFiltered, data: [] };
  }

  let query = User.find(filter).populate('area', 'areaCode description').lean();

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

  const users = await query.exec();

  const data = users.map(u => ({
    id: u._id.toString(),
    username: u.username,
    status: u.status,
    fullname: u.fullname,
    phonenumber: u.phonenumber,
    phonenumberFormatted: dataHelper.formatPhone(u.phonenumber),
    email: u.email,
    role: u.role,
    areaName: u.area?.description ?? u.area?.areaCode ?? '',
    updatedAt: u.updatedAt
  }));

  return { recordsTotal, recordsFiltered, data };
};

exports.getById = async (userId) => {
  return await User.findById(userId).populate('area', 'areaCode description').lean();
};

exports.getByUserName = async (username) => {
  return await User.findOne({ username: username });
};

exports.create = async (userData) => {
  const model = {
    username: userData.username,
    phonenumber: userData.phonenumber || '',
    email: userData.email || '',
    password: await bcrypt.hash(userData.password, 10),
    role: userData.role || 'guest',
    fullname: userData.fullname || '',
    status: userData.status,
    area: userData.role === 'receptionist' ? (await Area.findOne({ areaCode: userData.area }))?._id ?? null : null
  };

  if (userData?.role === 'receptionist') {
    const area = await Area.findOne({ areaCode: userData.area });
    model.area = area ? area._id : null;
  }

  const user = new User(model);
  return await user.save();
};

exports.update = async (userId, userData) => {
  const model = {
    email: userData.email || '',
    phonenumber: userData.phonenumber || '',
    fullname: userData.fullname || '',
  };

  if (userData.password) {
    model.password = await bcrypt.hash(userData.password, 10);
  }

  if (userData?.role) model.role = userData.role;
  if (userData?.status == 0 || userData?.status == 1) model.status = userData.status;
  if (userData?.role === 'receptionist') model.area = (await Area.findOne({ areaCode: userData.area.toUpperCase() }))._id ?? null;

  return await User.findByIdAndUpdate(userId, model, { new: true });
};


exports.delete = async (userId) => {
  return await User.findByIdAndDelete(userId);
};