const express = require('express');
const {  Dead, Ghost, Memmory } = require('../controller/games');
const router = express.Router();

router
    .route('/dead')
    .get(Dead)

router
    .route('/ghost')
    .get(Ghost)    

router
    .route('/memmory')
    .get(Memmory)     

module.exports = router;
