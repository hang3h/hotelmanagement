const Counter = require('../models/counter.model');
const Room = require('../models/room.model');

async function getNextSequence(name) {
  const counter = await Counter.findOneAndUpdate(
    { name },
    { $inc: { seq: 1 } },
    { new: true, upsert: true } // nếu chưa có thì tạo mới
  );

  return counter.seq;
}

exports.generateRentalCode = async (roomId) => {
  const room = await Room.findById(roomId);
  const roomCode = room ? room.roomCode : 'ROOM';
  const now = new Date();
  const ym = now.toISOString().slice(0, 8).replace(/-/g, '');
  const counterKey = `${ym}-${roomCode}`;
  const nextIndex = await getNextSequence(counterKey);
  return `${ym}-${roomCode}-${String(nextIndex).padStart(4, '0')}`;
}