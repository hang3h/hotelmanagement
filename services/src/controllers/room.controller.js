const roomService = require('../services/room.service');
const userService = require('../services/user.service');
const counterService = require('../services/counter.service');

exports.get = async (req, res) => {
  const search = req.query.search || '';
  const start = parseInt(req.query.start) || 0;
  const length = parseInt(req.query.length) || 10;
  const orderDir = req.query.orderDir || 'asc';
  const orderCol = req.query.orderCol || 'createdAt';

  const rooms = await roomService.get(search, start, length, orderCol, orderDir);

  res.json({
    recordsTotal: rooms.recordsTotal,
    recordsFiltered: rooms.recordsFiltered,
    data: rooms.data
  });
};

exports.getById = async (req, res) => {
  const roomId = req.params.id;
  const user = await roomService.getById(roomId);
  res.json(user);
};

exports.update = async (req, res) => {
  const roomId = req.params.id;
  const result = await roomService.update(roomId, req.body.roomData);
  return res.json({ success: result.success, message: result.message ?? (result.success ? 'Cập nhật thất bại, vui lòng thử lại sau!' : '') });
};

exports.getAvailableRooms = async (req, res) => {
  const search = req.query.search || '';
  const startDate = req.query.startDate ? new Date(req.query.startDate) : '';
  const endDate = req.query.endDate ? new Date(req.query.endDate) : '';
  const roomType = req.query.roomType || '';
  const roomId = req.query.roomId || '';
  const currentUser = await userService.getById(req.query.userId);

  if (!startDate || !endDate) return [];

  const start = new Date(startDate);
  const end = new Date(endDate);

  const availableRooms = await roomService.getAvailableRooms(currentUser, search, start, end, roomType, roomId);
  res.json(availableRooms);
};

exports.getRoomsStatus = async (req, res) => {
  const areaCode = req.query.areaCode || '';
  const selectedDate = req.query.selectedDate ? new Date(req.query.selectedDate) : '';
  const rooms = await roomService.getRoomsStatus(selectedDate, areaCode);
  res.json(rooms);
};