import axios from "axios";
import store from "../../../store/index";

export default {
  // ============ Logout
  logOut(context) {
    // axios({
    //   method: "post",
    //   url: "logout",
    // })
    //   .then((res) => {
    context.commit("remove_user_data");
    // this.$iziToast.success({
    //   title: this.$t("validation.success"),
    //   message: res.response.data.message,
    // });
    location.reload();
    // })
    // .catch((err) => {
    //   this.$iziToast.error({
    //     title: this.$t("validation.error"),
    //     message: err.response.data.message,
    //   });
    // });
  },

  // ============ Login
  logIn(context, payload) {
    context.commit("set_userId", payload.userId || null);
    context.commit("set_token", payload.token || null);
    context.commit("set_usertype", payload.userType || null);
    context.commit("set_userImage", payload.userImage || null);
    context.commit("set_userPhone", payload.userPhone || null);
    location.reload();
  },
};
