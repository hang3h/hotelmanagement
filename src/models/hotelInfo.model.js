const mongoose = require('mongoose');

const hotelInfoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String },
  phone: { type: String },
  taxCode: { type: String },
  email: { type: String },
  website: { type: String },
  description: { type: String },
  checkInTime: { type: String },
  checkOutTime: { type: String },
}, { timestamps: true });

const HotelInfo = mongoose.model('HotelInfo', hotelInfoSchema, 'hotelinfos');

module.exports = HotelInfo;