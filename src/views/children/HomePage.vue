<template>
  <div class="homePage">
    <h1>HomePage</h1>
    <button @click="changeLang">Change lang</button>
    <button @click="changeTheme">Change theme</button>
  </div>
</template>

<script>
export default {
  methods: {
    changeTheme() {
      this.$store.dispatch("theme_module/changeTheme");
      if (this.$store.getters["theme_module/current_theme"] == "light") {
        this.$vuetify.theme.dark = false;
      } else {
        this.$vuetify.theme.dark = true;
      }
    },

    changeLang() {
      this.$store.dispatch("lang_module/switchLang");
    },
  },
};
</script>
