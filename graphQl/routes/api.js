var express = require("express");
var router = express.Router();
var pokemon = require("../controller/PokemonController");

/* GET users listing. */
router.get("/", function(req, res, next) {
    res.send("respond with a resource");
});

router.get("/pokemons", pokemon.index);

router.get("/pokemon/:name", pokemon.show);

module.exports = router;