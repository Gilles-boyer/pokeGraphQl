const { Pokemon } = require("../model/Pokemon");
const paginate = require("express-paginate");

module.exports.index = (req, res) => {
    var result = Pokemon.listPokemon;
    res.status(200).json({ result });
};

module.exports.show = (req, res) => {
    Pokemon.getPokemon(req.params.name)
        .then((result) => res.status(200).json(result))
        .catch((err) => console.log(err));
};