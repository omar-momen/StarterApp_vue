import Vue from "vue";
import VueRouter from "vue-router";

// ============================== Start Views ==============================
import Home from "../views/Home.vue"; // Home

// ============ Start Children ============
import HomePage from "../views/children/HomePage.vue";
// ============ End Children ============

// ============ Start Auth ============
import Login from "../views/Auth/Login.vue";
// ============ End Auth ============

// *************** NotFound
import NotFound from "../views/NotFound.vue";

// ============================== End Views ==============================

// Vuex store
import store from "../store/index";

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    // ===================== Start Home =====================
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
    // ===================== End Home =====================

    // ======= Start Auth =======
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    // ======= End Auth =======

    // ======= Start NotFound =======
    { path: "/:notFound(.*)", name: "NotFound", component: NotFound },
    // ======= End NotFound =======
  ],
});

// ======= Start Router Guards =======
router.beforeEach((to, from, next) => {
  next(true);
});
// ======= End Router Guards =======

Vue.use(VueRouter);
export default router;
