const jwt = require('jsonwebtoken');
const userService = require('../services/user.service');

exports.authenticate = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.redirect('/login');
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await userService.getById(decoded.id);
    res.locals.currentUser = { id: req.user._id, username: req.user.username, fullname: req.user.fullname, role: req.user.role, areaId: req.user.area?._id, areaCode: req.user.area?.areaCode };
    next();
  } catch (error) {
    return res.status(401).render('pages/unauthorized', {
      layout: false,
      title: 'Phiên đăng nhập hết hạn'
    });
  }
};

exports.authorize = (roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).render('pages/authorize', {
        layout: false,
        title: 'Không có quyền truy cập'
      });
    }
    next();
  };
};