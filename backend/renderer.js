/*
 *  Copyright(c) 2022 recnik.io
 *  All rights reserved.
*/

const moment = require('moment');

module.exports = {
    render: function (req, res, file, data) {
        data.session = req.session;
        data.moment = moment;

        res.render(file, data);
    },

    renderError: function (req, res, data) {
        data.title = 'Error';
        data.header_title = 'Error';
        data.stylesheet = 'error';
        data.session = req.session;
        data.moment = moment;

        // Render the file
        res.render('500', data);
    },

    render404: function (req, res) {
        let data = {};
        data.title = '404 | Not Found';
        data.header_title = 'Not Found';
        data.stylesheet = 'error';
        data.session = req.session;
        data.moment = moment;

        // Render the file
        res.render('404', data);
    },

    renderInternalError: function (req, res) {
        let data = {};
        data.title = 'Error';
        data.header_title = 'Error';
        data.stylesheet = 'error';
        data.error_message = false;
        data.session = req.session;
        data.moment = moment;

        // Render the 500 file
        res.render('500', data);
    }
}