const api = require("./api");

//collection of request to API for computer

module.exports.getListNamePokemon = () => {
    return api.post("/", {
        query: "{ getAllPokemonSpecies }",
    });
};

module.exports.getLinkImagePokemon = (name) => {
    return api.post("/", {
        query: `{
            getPokemon(pokemon:${name}) {
                  sprite
            }
          }`,
    });
};

module.exports.getPokemon = (name) => {
    return api.post("/", {
        query: `{
        getPokemon(pokemon:${name}) {
          num
          species
          types
          abilities { first second hidden }
          baseStats { hp attack defense specialattack specialdefense speed }
          gender { male female }
          height
          weight
          sprite
          shinySprite
          backSprite
          shinyBackSprite
          evolutionLevel
          evolutions {
            key
            num
            species
            sprite
          }
          preevolutions {
            key
            num
            species
            sprite
          }
        }
      }`,
    });
};