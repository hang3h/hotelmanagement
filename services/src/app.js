const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const routes = require('./routes');

app.use('/assets', express.static(path.join(__dirname, '..', 'assets')));

// Config express server
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Config routes
app.use('/api', routes);

module.exports = app;