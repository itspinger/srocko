/*
 *  Copyright(c) 2022 stack
 *  All rights reserved.
*/

const router = require('express').Router();
const renderer = require('./renderer');

router.get('/', (req, res) => {
    renderer.render(req, res, 'index', {
        title: 'Sročko',
        stylesheet: 'index'
    });
})

module.exports = router;