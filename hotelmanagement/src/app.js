const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const app = express();
const webRoutes = require('./routes/web');
const apiRoutes = require('./routes/api');

app.use('/assets', express.static(path.join(__dirname, '..', 'assets')));

// Config view engine
app.set("view engine", "ejs");
app.set('views', __dirname + '/views');

// Config express server
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

// Config express layout
app.use(expressLayouts);
app.set('layout extractScripts', true);
app.set('layout extractStyles', true);

// Config routes
app.use('/', webRoutes);
app.use('/api', apiRoutes);

module.exports = app;