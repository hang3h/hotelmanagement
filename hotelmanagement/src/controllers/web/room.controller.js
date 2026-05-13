const roomService = require('../../services/room.service');

exports.index = async (req, res) => {
  res.render('pages/rooms/index', { layout: 'layouts/main', activeMenu: 'rooms' });
};

exports.edit = async (req, res) => {
  const roomId = req.params.id;
  const room = await roomService.getById(roomId);

  if (!room) {
    return res.status(404).json({ message: 'Room not found' });
  }
  res.render('pages/rooms/edit', { layout: 'layouts/main', activeMenu: 'rooms', data: room });
};