const express = require('express');
const {  Dead, Ghost } = require('../controller/games');
const router = express.Router();

router
    .route('/dead')
    .get(Dead)

router
    .route('/ghost')
    .get(Ghost)    


module.exports = router;
