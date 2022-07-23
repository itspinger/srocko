/*
 *  Copyright(c) 2022 rechko
 *  All rights reserved.
*/

const express = require('express');
const path = require('path');
const renderer = require('./backend/renderer')
const app = express();
const logger = require('morgan');

// Set the view
app.set('views', path.join(__dirname, 'frontend'));
app.set('view engine', 'ejs');

// Express
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, 'assets')));

// Use the logger
app.use(logger('dev'));

// Routes
app.use('/', require('./backend/index'));

// Render 404
app.use(function(req, res) {
    renderer.render404(req, res);
});

// Render 500
app.use(function(error, req, res, next) {
    console.error(error.stack);
    renderer.renderInternalError(req, res);
});

// Exports
module.exports = app;