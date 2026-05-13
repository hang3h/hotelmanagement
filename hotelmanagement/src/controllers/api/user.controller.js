const userService = require('../../services/user.service');

exports.get = async (req, res) => {
  const search = req.query['search[value]'] || '';
  const start = parseInt(req.query.start) || 0;
  const length = parseInt(req.query.length) || 10;
  const orderColIndex = req.query['order[0][column]'];
  const orderDir = req.query['order[0][dir]'] || 'asc';
  const orderCol = req.query[`columns[${orderColIndex}][data]`] || 'createdAt';

  const users = await userService.get(search, start, length, orderCol, orderDir);

  res.json({
    draw: parseInt(req.query.draw),
    recordsTotal: users.recordsTotal,
    recordsFiltered: users.recordsFiltered,
    data: users.data
  });
};

exports.create = async (req, res) => {
  const user = await userService.create(req.body);

  if (user) {
    return res.json({ success: true, data: user });
  } else {
    return res.json({ success: false, message: 'Tạo tài khoản thất bại, vui lòng thử lại sau!' });
  }
};

exports.update = async (req, res) => {
  const userId = req.params.id;
  const updatedUser = await userService.update(userId, req.body);

  if (updatedUser) {
    return res.json({ success: true, data: updatedUser });
  } else {
    return res.json({ success: false, message: 'Cập nhật tài khoản thất bại, vui lòng thử lại sau!' });
  }
};

exports.delete = async (req, res) => {
  const userId = req.params.id;
  if (userId === req.user._id.toString()) {
    return res.json({ success: false, message: 'Bạn không thể xóa chính mình!' });
  }

  const deletedUser = await userService.delete(userId, req.body);

  if (deletedUser) {
    return res.json({ success: true, data: deletedUser });
  } else {
    return res.json({ success: false, message: 'Xóa tài khoản thất bại, vui lòng thử lại sau!' });
  }
};

exports.updateCurrentUser = async (req, res) => {
  const userId = req.params.id;

  if (userId !== req.user._id.toString()) {
    return res.json({ success: false, message: 'Cập nhật tài khoản thất bại, vui lòng thử lại sau!' });
  }

  const updatedUser = await userService.update(userId, req.body);

  if (updatedUser) {
    return res.json({ success: true, data: updatedUser });
  } else {
    return res.json({ success: false, message: 'Cập nhật tài khoản thất bại, vui lòng thử lại sau!' });
  }
};