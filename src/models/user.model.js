const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  fullname: { type: String },
  status: { type: Number },
  password: { type: String, required: true },
  phonenumber: { type: String },
  email: { type: String },
  role: { type: String, enum: ['admin', 'director', 'manager', 'receptionist', 'guest'], default: 'guest' },
  area: { type: mongoose.Schema.Types.ObjectId, ref: 'Area', required: false },
}, { timestamps: true });

const User = mongoose.model('User', userSchema, 'users');

module.exports = User;