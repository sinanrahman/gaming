const games = require('../config/games')

exports.Home = (req, res) => {
   return res.render('home')
};

exports.Play = (req, res) => {
   const gameId = req.params.id;  
    const game = games[gameId];     

    if (!game) {
        return res.status(404).send("Game not found");
    }
   return res.render('play',{game})
};