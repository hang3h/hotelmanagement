const roomService = require('../../services/room.service');

exports.showDashboard = async (req, res) => {
  const now = new Date();
  const roomStatusAreaA = await roomService.getRoomsStatus(now, 'A');
  const roomStatusAreaB = await roomService.getRoomsStatus(now, 'B');
  const roomStatusAreaC = await roomService.getRoomsStatus(now, 'C');
  const result = {
    areaA: roomStatusAreaA,
    areaB: roomStatusAreaB,
    areaC: roomStatusAreaC
  };

  res.render('pages/dashboard', { layout: 'layouts/main', activeMenu: 'dashboard', data: result });
};