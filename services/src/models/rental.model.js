const mongoose = require('mongoose');

const rentalSchema = new mongoose.Schema({
  rentalCode: { type: String, required: true, unique: true },
  customerName: { type: String, required: true },
  customerIdCard: { type: String },
  customerPhone: { type: String },
  customerEmail: { type: String },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
  totalPrice: { type: Number, default: 0 },
  amountPaid: { type: Number, default: 0 },
  status: { type: String, enum: ['pending', 'active', 'completed', 'cancelled'], default: 'active' },
  notes: { type: String },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

const Rental = mongoose.model('Rental', rentalSchema, 'rentals');

module.exports = Rental;