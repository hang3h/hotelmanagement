const rentalService = require('../services/rental.service');

exports.showHomePage = async (req, res) => {
  res.render('pages/home', { layout: false });
};

exports.showSearchRental = async (req, res) => {
  res.render('search-rental/search-rental', { layout: false });
};

exports.showSearchRentalResult = async (req, res) => {
  const keyword = req.query.keyword;
  const result = await rentalService.searchAll(keyword);
  res.render('search-rental/search-rental-result', { layout: false, data: result });
};