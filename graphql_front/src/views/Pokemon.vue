<template>
  <v-container fill-height class="Pokemon">
    <v-row align="center" justify="center">
      <!--Evolution-->
      <v-col cols="1">
        <v-card color="second" v-if="preEvol.sprite">
          <v-img :src="preEvol.sprite" rounded></v-img>

          <v-card-title class="justify-center primary--text">
            {{ preEvol.species }}
          </v-card-title>
          <v-card-subtitle class="mx-auto text-center">
            Pre-Evolution
          </v-card-subtitle>
          <v-card-actions class="pa-1 justify-center">
            <v-btn color="primary" @click="changePokemon(preEvol.key)" text>
              <v-icon left> mdi-pokeball</v-icon> Explore
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!--Image Pokemon-->
      <v-col cols="5">
        <v-card class="mx-auto">
          <v-img
            max-width="250"
            max-height="350"
            class="mx-auto"
            :src="srcImage"
          ></v-img>
          <v-item-group mandatory>
            <v-container>
              <v-row>
                <v-col v-for="n in images" :key="n" cols="12" md="3">
                  <v-item>
                    <v-card
                      class="d-flex align-center"
                      dark
                      height="150"
                      @click="changeImg(n)"
                    >
                      <v-img :src="n" rounded></v-img>
                      <v-scroll-y-transition> </v-scroll-y-transition>
                    </v-card>
                  </v-item>
                </v-col>
              </v-row>
            </v-container>
          </v-item-group>
        </v-card>
      </v-col>

      <!--detail Pokemon-->
      <v-col cols="5">
        <v-card shaped>
          <v-card-title
            background-color="primary"
            primary-title
            class="justify-center primary white--text"
          >
            <v-icon left color="white" v-if="getGenreMale(pokemon.gender)"
              >mdi-gender-male</v-icon
            >
            <v-icon left color="pink" v-if="getGenreFemale(pokemon.gender)"
              >mdi-gender-female</v-icon
            >
            <v-icon left color="black" v-if="pokemon.gender == null"
              >mdi-gender-non-binary</v-icon
            >
            {{ getTitleToUpperCase(pokemon.species) }} N° {{ pokemon.num }}
          </v-card-title>

          <v-card-subtitle class="mx-auto text-center">
            <v-chip
              small
              v-for="(type, index) in pokemon.types"
              :key="index"
              :color="getColorType(type)"
            >
              {{ type }}
            </v-chip>
          </v-card-subtitle>

          <v-card-text>
            {{ pokemon.flavorTexts[0].flavor }} <br />
            {{ pokemon.evolutionLevel }} <br />
            Height : {{ pokemon.height }} - Weight : {{ pokemon.weight }}
          </v-card-text>

          <v-row no-gutters align="center" justify="center" class="mb-2">
            <v-col cols="12" class="text-center mb-2 font-weight-bold"
              ><v-divider></v-divider> Abilities Pokemon <v-divider></v-divider
            ></v-col>
            <v-col cols="12" align-self="center">
              <v-row align="center" justify="center" no-gutters>
                <v-col class="text-center"
                  ><v-row no-gutters>
                    <v-col cols="12">
                      <v-chip color="primary" small>first</v-chip>
                    </v-col>
                    <v-col cols="12"> {{ pokemon.abilities.first }} </v-col>
                  </v-row>
                </v-col>
                <v-col class="text-center"
                  ><v-row no-gutters>
                    <v-col cols="12">
                      <v-chip color="primary" small>Second</v-chip>
                    </v-col>
                    <v-col cols="12" v-if="pokemon.abilities.second">
                      {{ pokemon.abilities.second }}
                    </v-col>
                    <v-col cols="12" v-else> <br /> </v-col>
                  </v-row>
                </v-col>
                <v-col class="text-center"
                  ><v-row no-gutters>
                    <v-col cols="12">
                      <v-chip color="primary" small>Hidden</v-chip>
                    </v-col>
                    <v-col cols="12" v-if="pokemon.abilities.hidden">
                      {{ pokemon.abilities.hidden }}
                    </v-col>
                    <v-col cols="12" v-else> <br /> </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <v-card>
            <v-card-title class="subheading font-weight-bold">
              Stats Pokemon
            </v-card-title>

            <v-divider></v-divider>

            <v-list dense>
              <v-list-item>
                <v-list-item-content>Attack:</v-list-item-content>
                <v-list-item-content class="align-end">
                  {{ pokemon.baseStats.attack }}
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>Defense:</v-list-item-content>
                <v-list-item-content class="align-end">
                  {{ pokemon.baseStats.defense }}
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>Hp:</v-list-item-content>
                <v-list-item-content class="align-end">
                  {{ pokemon.baseStats.hp }}
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>Special attack:</v-list-item-content>
                <v-list-item-content class="align-end">
                  {{ pokemon.baseStats.specialattack }}
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>Special defense:</v-list-item-content>
                <v-list-item-content class="align-end">
                  {{ pokemon.baseStats.specialdefense }}
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>Speed:</v-list-item-content>
                <v-list-item-content class="align-end">
                  {{ pokemon.baseStats.speed }}
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-card>
      </v-col>

      <!--Evolution-->
      <v-col cols="1">
        <v-card color="second" v-if="evolution.sprite">
          <v-img :src="evolution.sprite" rounded></v-img>

          <v-card-title class="justify-center primary--text">
            {{ evolution.species }}
          </v-card-title>

          <v-card-subtitle class="mx-auto text-center">
            Evolution
          </v-card-subtitle>
          <v-card-actions class="pa-1 justify-center">
            <v-btn color="primary" text @click="changePokemon(evolution.key)">
              <v-icon left> mdi-pokeball</v-icon> Explore
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </v-container>
</template>

<script>
import ApiPok from "../services/pokemon";
export default {
  name: "Pokemon",
  mounted() {
    this.init();
  },
  methods: {
    changePokemon(key) {
      this.$router.push({ name: "Pokemon", params: { name: key } });
      this.images = [];
      this.evolution = {};
      this.preEvol = {};
      this.init();
    },
    getGenreMale(gender) {
      if (gender != null) {
        if (gender.male > "0%") {
          return true;
        }
      }
      return false;
    },
    getGenreFemale(gender) {
      if (gender != null) {
        if (gender.female > "0%") {
          return true;
        }
      }
      return false;
    },
    getTitleToUpperCase(title) {
      return title.toUpperCase();
    },
    async init() {
      var res = await ApiPok.show(this.$route.params.name);
      this.pokemon = res.data;
      if (this.pokemon) {
        this.overlay = false;
      }
      this.chargeImages(res.data);
      if (res.data.evolutions != null) {
        this.initEvol(res.data);
      }
      if (res.data.preevolutions != null) {
        this.initPreEvol(res.data);
      }
    },
    getColorType(type) {
      var tab = [
        { type: "Psychic", color: "purple" },
        { type: "Electric", color: "yellow" },
        { type: "Electric", color: "yellow" },
        { type: "Grass", color: "#1B5E20" },
        { type: "Ice", color: "#0D47A1" },
        { type: "Dark", color: "black" },
        { type: "Fire", color: "red" },
        { type: "Rock", color: "brown" },
        { type: "Flying", color: "#B3E5FC" },
        { type: "Steel", color: "#546E7A" },
        { type: "Fairy", color: "pink" },
        { type: "Water", color: "#00B0FF" },
        { type: "Poison", color: "#9575CD" },
      ];
      var color;
      tab.forEach((element) => {
        if (element.type == type) {
          color = element.color;
        }
      });

      return color;
    },
    chargeImages(pokemon) {
      if (pokemon.sprite) {
        this.images.push(pokemon.sprite);
        this.srcImage = pokemon.sprite;
      }
      if (pokemon.backSprite) {
        this.images.push(pokemon.backSprite);
      }
      if (pokemon.shinySprite) {
        this.images.push(pokemon.shinySprite);
      }
      if (pokemon.shinyBackSprite) {
        this.images.push(pokemon.shinyBackSprite);
      }
    },
    initEvol(pokemon) {
      if (pokemon.evolutions.length > 0) {
        this.evolution = pokemon.evolutions[0];
      }
    },
    initPreEvol(pokemon) {
      if (pokemon.preevolutions.length > 0) {
        this.preEvol = pokemon.preevolutions[0];
      }
    },
    changeImg(image) {
      this.srcImage = image;
    },
  },
  data() {
    return {
      overlay: true,
      show: false,
      pokemon: {
        abilities: {
          first: "",
          second: "",
          hidden: "",
        },
        species: "",
        flavorTexts: [{ flavor: "" }],
        pokemon: {
          gender: null,
        },
        baseStats: {
          attack: 0,
          defense: 0,
          hp: 0,
          specialattack: 0,
          specialdefense: 0,
          speed: 0,
        },
      },
      srcImage: "",
      evolution: {},
      preEvol: {},
      images: [],
    };
  },
};
</script>
