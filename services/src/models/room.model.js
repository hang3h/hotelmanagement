const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  roomCode: { type: String, required: true, trim: true },
  area: { type: mongoose.Schema.Types.ObjectId, ref: 'Area', required: true },
  floor: { type: Number },
  type: { type: String, required: true },
  price: { type: Number, min: 0 },
  status: { type: String, enum: ['available', 'maintenance'], default: 'available' },
  description : { type: String },
  note: { type: String }
}, { timestamps: true });

const Room = mongoose.model('Room', roomSchema, 'rooms');

module.exports = Room;