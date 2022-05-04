<template>
  <v-container class="justify-center" fill-height>
    <v-row align="center" justify="center">
      <v-col align-self="center" class="my-auto">
        <v-sheet elevation="8" height="520" shaped>
          <v-toolbar flat color="primary" class="mb-3" shaped>
            <v-toolbar-title class="white--text font-weight-bold mx-auto">
              <v-icon left color="white" x-large>mdi-pokeball</v-icon> EXPLORE
              LE MONDE DES POKEMONS</v-toolbar-title
            >
          </v-toolbar>
          <v-slide-group v-model="model" active-class="success" show-arrows>
            <v-slide-item v-for="(pokemon, index) in pokemons" :key="index">
              <v-card color="second" class="mx-3 my-1" height="400" width="213">
                <v-img
                  :src="pokemon.image"
                  height="200px"
                  class="ma-1"
                  rounded
                ></v-img>

                <v-card-title class="justify-center primary--text">
                  {{ pokemon.name }}
                </v-card-title>
                <v-card-subtitle>
                  {{ getSpliceText(pokemon.text) }}
                </v-card-subtitle>
                <v-card-actions class="pa-1 justify-center">
                  <v-btn
                    color="primary"
                    @click="chargePagePokemon(pokemon.key)"
                  >
                    <v-icon left> mdi-pokeball</v-icon> Explore
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-slide-item>
          </v-slide-group>
          <v-toolbar flat color="primary" class="mt-1" shaped dense>
          </v-toolbar>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ApiPok from "../services/pokemon";
export default {
  created() {
    this.init();
  },
  methods: {
    chargePagePokemon(key) {
      this.$router.push({ path: `/pokemon/${key}` });
    },
    getSpliceText(text) {
      var result = text.slice(0, 40);
      return result + "...";
    },
    async init() {
      var res = await ApiPok.index();
      this.pokemons = res.data.result.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    },
  },
  data() {
    return {
      model: null,
      pokemons: [],
    };
  },
  name: "Home",
  components: {},
};
</script>
