const userService = require('../../services/user.service');

exports.index = async (req, res) => {
  res.render('pages/users/index', { layout: 'layouts/main', activeMenu: 'users' });
};

exports.add = async (req, res) => {
  res.render('pages/users/add', { layout: 'layouts/main', activeMenu: 'users' });
};

exports.edit = async (req, res) => {
  const userId = req.params.id;
  const user = await userService.getById(userId);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.render('pages/users/edit', { layout: 'layouts/main', activeMenu: 'users', data: user });
};

exports.editCurrentUser = async (req, res) => {
  const userId = req.params.id;
  if (userId !== req.user._id.toString()) {
    return res.status(403).json({ message: 'Forbidden' });
  }

  const user = await userService.getById(userId);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.render('pages/users/edit-current-user', { layout: 'layouts/main', activeMenu: null, data: user });
};