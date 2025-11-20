const express = require('express');
const router = express.Router();

const { Home, Play } = require('../controller/home');




router
    .route('/')
    .get(Home)

router
    .route('/play/:id')
    .get(Play)

module.exports = router;