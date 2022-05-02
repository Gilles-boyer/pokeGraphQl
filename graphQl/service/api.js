const axios = require("axios");

module.exports = axios.create({
    baseURL: `https://graphqlpokemon.favware.tech`,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});