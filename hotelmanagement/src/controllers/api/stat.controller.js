const statService = require('../../services/stat.service');

exports.getDataStatByMonth = async (req, res) => {
  let selectedDate = new Date(req.body.selectedDate);
  selectedDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), 0, 0, 1);
  const result = await statService.getDataByMonth(selectedDate);
  res.json(result);
};

exports.getDataStatByYear = async (req, res) => {
  let selectedDate = new Date(req.body.selectedDate);
  selectedDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), 0, 0, 1);
  const result = await statService.getDataByYear(selectedDate);
  res.json(result);
};