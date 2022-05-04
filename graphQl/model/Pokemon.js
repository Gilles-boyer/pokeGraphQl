const apiPok = require("../service/pokemon");

class Pokemon {
    constructor() {
        this.listPokemon = [];
        this.getListNamePok();
    }

    async getListNamePok() {
        var res = await apiPok.getListNamePokemon();
        res.data.data.getAllPokemonSpecies.forEach(async(element) => {
            var ele;
            ele = this.verifyCharPokemon(["-", "'", " ", ".", ","], element);
            try {
                var result = await apiPok.getLinkImagePokemon(ele.toLowerCase().trim());
            } catch (e) {
                // console.log(e.message);
            }

            if (result) {
                if (result.data) {
                    if (result.data.data) {
                        if (result.data.data.getPokemon) {
                            if (result.data.data.getPokemon.flavorTexts.length > 0) {
                                this.listPokemon.push({
                                    key: ele.toLowerCase().trim(),
                                    name: element,
                                    image: result.data.data.getPokemon.sprite,
                                    text: result.data.data.getPokemon.flavorTexts[0].flavor,
                                });
                            }
                        }
                    }
                }
            }
        });
    }

    verifyCharPokemon(tab, name) {
        tab.forEach((element) => {
            if (name.includes(element)) {
                while (name.includes(element)) {
                    var tab = name.split(element);
                    name = tab[0] + tab[1];
                }
            }
        });
        return name;
    }

    async getPokemon(name) {
        var res = await apiPok.getPokemon(name);
        return res.data.data.getPokemon;
    }
}
module.exports.Pokemon = new Pokemon();