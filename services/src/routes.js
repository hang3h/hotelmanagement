const express = require('express');
const router = express.Router();

const authMiddleware = require('./middleware/auth.middleware');
const userApiController = require('./controllers/user.controller');
const rentalApiController = require('./controllers/rental.controller');
const roomApiController = require('./controllers/room.controller');
const statApiController = require('./controllers/stat.controller');

router.get('/users', authMiddleware.authenticate, userApiController.get);
router.post('/users', authMiddleware.authenticate, userApiController.create);
router.get('/users/:id', authMiddleware.authenticate, userApiController.getById);
router.get('/users-by-username/:username', authMiddleware.authenticate, userApiController.getByUserName);
router.put('/users/:id', authMiddleware.authenticate, userApiController.update);
router.delete('/users/:id', authMiddleware.authenticate, userApiController.delete);
router.put('/current-users/:id', authMiddleware.authenticate, userApiController.updateCurrentUser);

router.get('/rentals', authMiddleware.authenticate, rentalApiController.get);
router.get('/rentals/:id', authMiddleware.authenticate, rentalApiController.update);
router.post('/rentals', authMiddleware.authenticate, rentalApiController.create);
router.put('/rentals/:id', authMiddleware.authenticate, rentalApiController.update);
router.post('/rentals/search', authMiddleware.authenticate, rentalApiController.search);

router.get('/rooms', authMiddleware.authenticate, roomApiController.get);
router.get('/rooms/:id', authMiddleware.authenticate, roomApiController.getById);
router.put('/rooms/:id', authMiddleware.authenticate, roomApiController.update);
router.get('/rooms-available', authMiddleware.authenticate, roomApiController.getAvailableRooms);
router.get('/rooms-status', authMiddleware.authenticate, roomApiController.getRoomsStatus);

router.post('/stats/get-data-stat-month', authMiddleware.authenticate, statApiController.getDataStatByMonth);
router.post('/stats/get-data-stat-year', authMiddleware.authenticate, statApiController.getDataStatByYear);

module.exports = router;