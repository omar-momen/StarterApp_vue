<template>
  <div class="homePage">
    <h1>{{ $t("sayHi") }}</h1>
    <i class="fab fa-accessible-icon"></i>
    <br />
    <router-link class="btn info" to="/login">login</router-link>
    <button @click="logOut" class="btn text-white bg-danger m-2">LogOut</button>
    <h2>
      <pre>{{ currentUser }}</pre>
    </h2>
    <button class="btn text-white info m-2" @click="switchLang">
      Change lang
    </button>
    <br />
    <button class="btn text-white bg-danger m-2" @click="change_theme">
      Change theme
    </button>

    <span class="d-block my-5">{{
      new Date() | moment("dddd, MMMM Do YYYY")
    }}</span>

    <template>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :items-per-page="5"
        class="elevation-1"
      ></v-data-table>
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%",
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%",
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%",
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%",
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%",
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%",
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%",
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%",
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
      ],
    };
  },

  computed: {
    ...mapGetters({
      currentUser: "auth_module/currentUser",
      current_theme: "theme_module/current_theme",
    }),
  },

  methods: {
    ...mapActions({
      changeTheme: "theme_module/changeTheme",
      switchLang: "lang_module/switchLang",
      logOut: "auth_module/logOut",
    }),

    change_theme() {
      this.changeTheme();

      if (this.current_theme == "light") {
        this.$vuetify.theme.dark = false;
      } else {
        this.$vuetify.theme.dark = true;
      }
    },
  },
};
</script>
