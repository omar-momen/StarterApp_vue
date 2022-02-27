<template>
  <div class="login">
    <h1>LOGIN</h1>
    <h2>
      <pre>{{ currentUser }}</pre>
    </h2>

    <button class="btn btn-danger" @click="signIn">SignIn</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  methods: {
    ...mapActions({
      login: "auth_module/logIn",
    }),

    signIn() {
      this.login({
        userId: "5",
        token: "dsavdsvdsvdsvdsdsv",
        userType: "omarType",
        userImage: "https://",
        userPhone: "01009867150",
      });
    },
  },

  computed: {
    ...mapGetters({
      currentUser: "auth_module/currentUser",
    }),
  },
};
</script>
