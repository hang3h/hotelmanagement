const express = require('express');
const router = express.Router();
const homeController = require('./controllers/home.controller');

router.get('/', homeController.showHomePage);
router.get('/search-rental', homeController.showSearchRental);
router.get('/search-rental-result', homeController.showSearchRentalResult);

module.exports = router;