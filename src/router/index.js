import Vue from "vue";
import VueRouter from "vue-router";

// ============================== Start Views ==============================
import Home from "../views/Home.vue"; // Home

// *************** Children
import HomePage from "../views/children/HomePage.vue";

// *************** Start Auth ***************
import Login from "../views/Auth/Login.vue";
// *************** End Auth ***************

// *************** NotFound
import NotFound from "../views/NotFound.vue";

// ============================== End Views ==============================

// Vuex store
import store from "../store/index";

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView({ behavior: "smooth" });
  },
  routes: [
    //Main
    {
      path: "/",
      component: Home,
      children: [
        {
          path: "/",
          name: "HomePage",
          component: HomePage,
        },
      ],
    },

    // Auth
    {
      path: "/login",
      name: "Login",
      component: Login,
    },

    // NotFound
    { path: "/:notFound(.*)", name: "NotFound", component: NotFound },
  ],
});

// router.beforeEach((to, _2, next) => {
//   if (to.name !== "Login" && !store.getters["auth/token"]) {
//     next({ name: "Login" });
//   } else if (to.name == "Login" && store.getters["auth/token"]) {
//     next("/");
//   } else {
//     next();
//   }
// });

Vue.use(VueRouter);
export default router;
