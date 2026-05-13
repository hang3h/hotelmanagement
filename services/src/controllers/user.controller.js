const userService = require('../services/user.service');

exports.get = async (req, res) => {
  const search = req.query.search || '';
  const start = parseInt(req.query.start) || 0;
  const length = parseInt(req.query.length) || 10;
  const orderDir = req.query.orderDir || 'asc';
  const orderCol = req.query.orderCol || 'createdAt';

  const users = await userService.get(search, start, length, orderCol, orderDir);

  res.json({
    recordsTotal: users.recordsTotal,
    recordsFiltered: users.recordsFiltered,
    data: users.data
  });
};

exports.getById = async (req, res) => {
  const userId = req.params.id;
  const user = await userService.getById(userId);
  res.json(user);
};

exports.getByUserName = async (req, res) => {
  const userName = req.params.username;
  const user = await userService.getByUserName(userName);
  res.json(user);
};

exports.create = async (req, res) => {
  const userData = req.body.userData;
  const user = await userService.create(userData);

  if (user) {
    return res.json({ success: true, data: user });
  } else {
    return res.json({ success: false, message: 'Tạo tài khoản thất bại, vui lòng thử lại sau!' });
  }
};

exports.update = async (req, res) => {
  const userId = req.params.id;
  const userData = req.body.userData;
  const updatedUser = await userService.update(userId, userData);

  if (updatedUser) {
    return res.json({ success: true, data: updatedUser });
  } else {
    return res.json({ success: false, message: 'Cập nhật tài khoản thất bại, vui lòng thử lại sau!' });
  }
};

exports.delete = async (req, res) => {
  const userId = req.params.id;
  const deletedUser = await userService.delete(userId);

  if (deletedUser) {
    return res.json({ success: true, data: deletedUser });
  } else {
    return res.json({ success: false, message: 'Xóa tài khoản thất bại, vui lòng thử lại sau!' });
  }
};

exports.updateCurrentUser = async (req, res) => {
  const userId = req.params.id;
  const updatedUser = await userService.update(userId, req.body.userData);

  if (updatedUser) {
    return res.json({ success: true, data: updatedUser });
  } else {
    return res.json({ success: false, message: 'Cập nhật tài khoản thất bại, vui lòng thử lại sau!' });
  }
};