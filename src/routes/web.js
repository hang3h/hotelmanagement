const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/auth.middleware');
const homeController = require('../controllers/web/home.controller');
const dashboardController = require('../controllers/web/dashboard.controller');
const authController = require('../controllers/web/auth.controller');
const userController = require('../controllers/web/user.controller');
const rentalController = require('../controllers/web/rental.controller');
const roomController = require('../controllers/web/room.controller');
const statController = require('../controllers/web/stat.controller');

router.get('/', homeController.showHomePage);
router.get('/search-rental', homeController.showSearchRental);
router.get('/search-rental-result', homeController.showSearchRentalResult);

router.get('/login', authController.showLogin);
router.get('/dashboard', authMiddleware.authenticate, authMiddleware.authorize(['admin', 'director', 'manager', 'receptionist']), dashboardController.showDashboard);

router.get('/users', authMiddleware.authenticate, authMiddleware.authorize(['admin', 'director']), userController.index);
router.get('/users/add', authMiddleware.authenticate, authMiddleware.authorize(['admin', 'director']), userController.add);
router.get('/users/:id', authMiddleware.authenticate, authMiddleware.authorize(['admin', 'director']), userController.edit);
router.get('/current-users/:id', authMiddleware.authenticate, authMiddleware.authorize(['admin', 'director', 'manager', 'receptionist']), userController.editCurrentUser);

router.get('/rentals', authMiddleware.authenticate, authMiddleware.authorize(['admin', 'director', 'manager', 'receptionist']), rentalController.index);

router.get('/rooms', authMiddleware.authenticate, authMiddleware.authorize(['admin', 'director']), roomController.index);
router.get('/rooms/:id', authMiddleware.authenticate, authMiddleware.authorize(['admin', 'director']), roomController.edit);

router.get('/stat-month', authMiddleware.authenticate, authMiddleware.authorize(['admin', 'director', 'manager']), statController.showStatByMonth);
router.get('/stat-year', authMiddleware.authenticate, authMiddleware.authorize(['admin', 'director', 'manager']), statController.showStatByYear);

module.exports = router;