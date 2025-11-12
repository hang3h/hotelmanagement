const mongoose = require('mongoose');

const areaSchema = new mongoose.Schema({
  areaCode: { type: String, required: true },
  description: { type: String },
  numberOfFloors: { type: Number, default: 0 }
}, { timestamps: true });

const Area = mongoose.model('Area', areaSchema, 'areas');

module.exports = Area;