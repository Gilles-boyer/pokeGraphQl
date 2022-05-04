<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-btn text @click="$router.push({ name: 'Home' })">
          <v-img
            alt="Logo pokemon"
            class="shrink"
            contain
            src="./assets/logo.png"
            transition="scale-transition"
            width="130"
          />
        </v-btn>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer padless fixed color="primary" class="white--text">
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>Pokemon-v1.0.0</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
