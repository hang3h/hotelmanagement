const Rental = require('../models/rental.model');
const dataHelper = require('../utils/dataHelper');

exports.getDataByMonth = async (selectedDate) => {
  const startOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
  const endOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0, 23, 59, 59);

  const rentals = await Rental.find({
    endDate: { $gte: startOfMonth, $lte: endOfMonth },
    status: 'completed'
  }).populate('room', 'roomCode type').lean();

  if (!rentals.length) {
    return {
      totalRevenue: 0,
      totalRevenueFormatted: dataHelper.formatCurrency(0),
      totalRented: 0,
      byRoomType: { single: 0, double: 0, vip: 0 }
    };
  }

  const revenueByType = { single: 0, double: 0, vip: 0 };
  let totalRevenue = 0;

  rentals.forEach(r => {
    const type = r.room?.type || 'other';
    revenueByType[type] = (revenueByType[type] || 0) + r.totalPrice;
    totalRevenue += r.totalPrice;
  });

  const result = {
    totalRevenue: totalRevenue ?? 0,
    totalRevenueFormatted: dataHelper.formatCurrency(totalRevenue ?? 0),
    totalRented: rentals.length,
    byRoomType: revenueByType
  };

  return result;
};

exports.getDataByYear = async (selectedDate) => {
  const selectedYear = new Date(selectedDate).getFullYear();
  const startOfYear = new Date(selectedYear, 0, 1);
  const endOfYear = new Date(selectedYear + 1, 0, 1);

  const rentals = await Rental.find({
    status: 'completed',
    startDate: { $gte: startOfYear, $lt: endOfYear }
  }).populate('room', 'type');

  const monthlyRevenue = Array(12).fill(0);
  let totalRevenue = 0;
  let totalRented = 0;

  rentals.forEach(r => {
    const monthIndex = new Date(r.startDate).getMonth();
    monthlyRevenue[monthIndex] += r.amountPaid || 0;
    totalRevenue += r.amountPaid || 0;
    totalRented++;
  });

  return {
    totalRevenue,
    totalRevenueFormatted: dataHelper.formatCurrency(totalRevenue ?? 0),
    totalRented,
    monthlyRevenue
  };
};