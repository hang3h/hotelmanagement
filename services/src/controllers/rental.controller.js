const rentalService = require('../services/rental.service');
const counterService = require('../services/counter.service');
const userService = require('../services/user.service');

exports.get = async (req, res) => {
  const filter = {
    search: req.query['filter[search]'] || '',
    status: req.query['filter[status]'] || '',
    selectedDate: req.query['filter[selectedDate]'] || '',
    roomType: req.query['filter[roomType]'] || '',
  };

  const currentUser = await userService.getById(req.query.userId);
  const start = parseInt(req.query.start) || 0;
  const length = parseInt(req.query.length) || 10;
  const orderCol = req.query.orderCol || '';
  const orderDir = req.query.orderDir || '';

  const rentals = await rentalService.get(currentUser, filter, start, length, orderCol, orderDir);

  res.json({
    recordsTotal: rentals.recordsTotal,
    recordsFiltered: rentals.recordsFiltered,
    data: rentals.data
  });
};

exports.getById = async (req, res) => {
  const id = req.params.id;
  const result = await rentalService.getById(id);
  res.json(result);
};

exports.search = async (req, res) => {
  const keyword = req.body.keyword;
  const result = await rentalService.searchAll(keyword);
  res.json(result);
};

exports.create = async (req, res) => {
  const rentalData = req.body.rentalData;
  const result = await rentalService.create(rentalData);
  return res.json({ success: result.success, message: result.message, data: result.data });
};

exports.update = async (req, res) => {
  const id = req.params.id;
  const rentalData = req.body.rentalData;
  const result = await rentalService.update(id, rentalData);
  return res.json({ success: result.success, message: result.message, data: result.data });
};

exports.delete = async (req, res) => {
  const userId = req.params.id;
  if (userId === req.user.id.toString()) {
    return res.json({ success: false, message: 'Bạn không thể xóa chính mình!' });
  }

  const deletedUser = await userService.delete(userId, req.body);

  if (deletedUser) {
    return res.json({ success: true, data: deletedUser });
  } else {
    return res.json({ success: false, message: 'Xóa tài khoản thất bại, vui lòng thử lại sau!' });
  }
};