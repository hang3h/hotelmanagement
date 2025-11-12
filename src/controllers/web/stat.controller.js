exports.showStatByMonth = async (req, res) => {
  res.render('pages/stats/monthly', { layout: 'layouts/main', activeMenu: 'statsMonth', data: {} });
};

exports.showStatByYear = async (req, res) => {
  res.render('pages/stats/yearly', { layout: 'layouts/main', activeMenu: 'statsYear', data: {} });
};