const rentalService = require('../../services/rental.service');

exports.index = async (req, res) => {
  res.render('pages/rentals/index', { layout: 'layouts/main', activeMenu: 'rentals' });
};

exports.add = async (req, res) => {
  res.render('pages/rentals/add', { layout: 'layouts/main', activeMenu: 'rentals' });
};

exports.edit = async (req, res) => {
  const userId = req.params.id;
  const user = await rentalService.getById(userId);
  if (!user) {
    return res.status(404).json({ message: 'Không tìm thấy mã thuê phòng' });
  }
  res.render('pages/users/edit', { layout: 'layouts/main', activeMenu: 'users', data: user });
};