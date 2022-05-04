import api from "./api";

export default {
    index() {
        return api.get("pokemons");
    },
    show(name) {
        return api.get(`pokemon/${name}`);
    },
};