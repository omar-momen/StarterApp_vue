import axios from "axios";
import store from "../../../store/index";

export default {
  // ============ Logout
  logOut(context) {
    axios({
      method: "post",
      url: "logout",
      headers: {
        "cache-control": "no-cache",
        "content-type": "application/json",
        Accept: "application/json",
        "Accept-language": store.getters["lang_module/lang"], // ==> Store (Vuex) <==
      },
    })
      .then(() => {})
      .catch((err) => {
        this.btn_loaidng = false;
        this.$iziToast.error({
          title: this.$t("validation.error"),
          message: err.response.data.message,
        });
      });

    context.commit("remove_token");
    context.commit("remove_userType");
    context.commit("remove_userId");
    context.commit("remove_userImage");
    context.commit("remove_userPhone");
    location.reload();
  },

  // ============ Login
  logIn(context, payload) {
    context.commit("set_token", payload.token);
    context.commit("set_usertype", payload.userType);
    context.commit("set_userId", payload.userId);
    context.commit("set_userImage", payload.userImage);
    context.commit("set_userPhone", payload.userPhone);
    location.reload();
  },
};
