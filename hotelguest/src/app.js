const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes');

app.use('/assets', express.static(path.join(__dirname, '..', 'assets')));

// Config view engine
app.set("view engine", "ejs");
app.set('views', __dirname + '/views');

// Config express server
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Config routes
app.use('/', routes);

module.exports = app;