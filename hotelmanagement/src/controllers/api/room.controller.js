const roomService = require('../../services/room.service');

exports.get = async (req, res) => {
  const search = req.query['search[value]'] || '';
  const start = parseInt(req.query.start) || 0;
  const length = parseInt(req.query.length) || 10;
  const orderColIndex = req.query['order[0][column]'];
  const orderDir = req.query['order[0][dir]'] || 'asc';
  const orderCol = req.query[`columns[${orderColIndex}][data]`] || 'createdAt';

  const rooms = await roomService.get(search, start, length, orderCol, orderDir);

  res.json({
    draw: parseInt(req.query.draw),
    recordsTotal: rooms.recordsTotal,
    recordsFiltered: rooms.recordsFiltered,
    data: rooms.data
  });
};

exports.update = async (req, res) => {
  const roomId = req.params.id;
  const result = await roomService.update(roomId, req.body);
  return res.json({ success: result.success, message: result.message ?? (result.success ? 'Cập nhật thất bại, vui lòng thử lại sau!' : '') });
};

exports.getAvailableRooms = async (req, res) => {
  const search = req.query.search || '';
  const startDate = req.query.startDate ? new Date(req.query.startDate) : '';
  const endDate = req.query.endDate ? new Date(req.query.endDate) : '';
  const roomType = req.query.roomType || '';
  const roomId = req.query.roomId || '';
  const userId = req.user._id;

  if (!startDate || !endDate) return [];

  const start = new Date(startDate);
  const end = new Date(endDate);

  const availableRooms = await roomService.getAvailableRooms(userId, search, start, end, roomType, roomId);
  res.json(availableRooms);
};