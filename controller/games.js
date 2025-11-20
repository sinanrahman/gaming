const games = require('../config/games')

exports.Dead = (req, res) => {
    return res.render('games/dead')
};

exports.Ghost = (req, res) => {
    return res.render('games/ghost')
};