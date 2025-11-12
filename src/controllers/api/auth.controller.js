const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../../models/user.model');

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username: username });
  if (!user) {
    return res.render('pages/login', { layout: false, data: { username: username, error: 'Tài khoản không tồn tại' } });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.render('pages/login', { layout: false, data: { username: username, error: 'Mật khẩu không chính xác' } });
  }

  const token = jwt.sign({ id: user._id, fullname: user.fullname, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });

  res.cookie('token', token, { httpOnly: true, secure: false, maxAge: 86400000 });

  res.redirect('/dashboard');
};

exports.logout = async (req, res) => {
  res.clearCookie('token');
  res.redirect('/login');
};