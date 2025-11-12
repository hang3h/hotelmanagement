const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/auth.middleware');
const authApiController = require('../controllers/api/auth.controller');
const userApiController = require('../controllers/api/user.controller');
const rentalApiController = require('../controllers/api/rental.controller');
const roomApiController = require('../controllers/api/room.controller');
const statApiController = require('../controllers/api/stat.controller');

router.post('/login', authApiController.login);
router.get('/logout', authApiController.logout);

router.get('/users', authMiddleware.authenticate, authMiddleware.authorize(['admin', 'director']), userApiController.get);
router.post('/users', authMiddleware.authenticate, authMiddleware.authorize(['admin', 'director']), userApiController.create);
router.put('/users/:id', authMiddleware.authenticate, authMiddleware.authorize(['admin', 'director']), userApiController.update);
router.delete('/users/:id', authMiddleware.authenticate, authMiddleware.authorize(['admin', 'director']), userApiController.delete);
router.put('/current-users/:id', authMiddleware.authenticate, authMiddleware.authorize(['admin', 'director', 'manager', 'receptionist']), userApiController.updateCurrentUser);

router.get('/rentals', authMiddleware.authenticate, authMiddleware.authorize(['admin', 'director', 'manager', 'receptionist']), rentalApiController.get);
router.post('/rentals', authMiddleware.authenticate, authMiddleware.authorize(['admin', 'director', 'manager', 'receptionist']), rentalApiController.create);
router.put('/rentals/:id', authMiddleware.authenticate, authMiddleware.authorize(['admin', 'director', 'manager', 'receptionist']), rentalApiController.update);

router.put('/rooms/:id', authMiddleware.authenticate, authMiddleware.authorize(['admin', 'director']), roomApiController.update);
router.get('/rooms', authMiddleware.authenticate, authMiddleware.authorize(['admin', 'director']), roomApiController.get);
router.get('/rooms/available-rooms', authMiddleware.authenticate, authMiddleware.authorize(['admin', 'director', 'manager', 'receptionist']), roomApiController.getAvailableRooms);

router.post('/stats/get-data-stat-month', authMiddleware.authenticate, authMiddleware.authorize(['admin', 'director', 'manager']), statApiController.getDataStatByMonth);
router.post('/stats/get-data-stat-year', authMiddleware.authenticate, authMiddleware.authorize(['admin', 'director', 'manager']), statApiController.getDataStatByYear);

module.exports = router;