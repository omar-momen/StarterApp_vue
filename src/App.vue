<template>
  <v-app class="my_app">
    <transition name="fadeInUp" mode="out-in">
      <router-view></router-view>
    </transition>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",

  computed: {
    ...mapGetters({
      lang: "lang_module/lang",
      theme: "theme_module/current_theme",
    }),
  },

  mounted() {
    // ====> Vuetify Direction
    if (this.lang == "ar") {
      this.$vuetify.rtl = true;
    } else {
      this.$vuetify.rtl = false;
    }

    // ===> Vuetify Theme
    if (this.theme == "light") {
      this.$vuetify.theme.dark = false;
    } else {
      this.$vuetify.theme.dark = true;
    }

    // ===> scroll To Top Alwayse
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  },
};
</script>
