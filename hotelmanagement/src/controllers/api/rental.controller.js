const rentalService = require('../../services/rental.service');

exports.get = async (req, res) => {
  const filter = {
    search: req.query['search[value]'] || '',
    status: req.query['rentalStatus'] || '',
    selectedDate: req.query['selectedDate'] || '',
    roomType: req.query['roomType'] || ''
  };

  const userId = req.user._id;
  const start = parseInt(req.query.start) || 0;
  const length = parseInt(req.query.length) || 10;
  const orderColIndex = req.query['order[0][column]'];
  const orderCol = req.query[`columns[${orderColIndex}][data]`] || '';
  const orderDir = req.query['order[0][dir]'] || '';

  const rentals = await rentalService.get(userId, filter, start, length, orderCol, orderDir);

  res.json({
    draw: parseInt(req.query.draw),
    recordsTotal: rentals.recordsTotal,
    recordsFiltered: rentals.recordsFiltered,
    data: rentals.data
  });
};

exports.create = async (req, res) => {
  const startDate = new Date(req.body.startDate);
  const endDate = new Date(req.body.endDate);

  const model = {
    customerName: req.body.customerName,
    customerIdCard: req.body.customerIdCard,
    customerPhone: req.body.customerPhone,
    customerEmail: req.body.customerEmail,
    startDate: new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), 14, 0, 0),
    endDate: new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), 12, 0, 0),
    room: req.body.roomId,
    totalPrice: req.body.totalPrice,
    amountPaid: req.body.amountPaid,
    status: req.body.status,
    notes: req.body.notes,
    createdBy: req.user._id
  };

  const result = await rentalService.create(model);
  return res.json({ success: result.success, message: result.message, data: result.data });
};

exports.update = async (req, res) => {
  const id = req.params.id;
  const startDate = new Date(req.body.startDate);
  const endDate = new Date(req.body.endDate);

  const model = {
    rentalCode: req.body.rentalCode,
    customerName: req.body.customerName,
    customerIdCard: req.body.customerIdCard,
    customerPhone: req.body.customerPhone,
    customerEmail: req.body.customerEmail,
    startDate: new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), 14, 0, 0),
    endDate: new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), 12, 0, 0),
    room: req.body.roomId,
    totalPrice: req.body.totalPrice,
    amountPaid: req.body.amountPaid,
    status: req.body.status,
    notes: req.body.notes,
    createdBy: req.user._id
  };

  const result = await rentalService.update(id, model);
  return res.json({ success: result.success, message: result.message, data: result.data });
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