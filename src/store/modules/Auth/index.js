import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      user: {
        id: localStorage.getItem("Project_App_User_Id"),
        token: localStorage.getItem("Project_App_Token"),
        usertype: localStorage.getItem("Project_App_User_Type"),
        image: localStorage.getItem("Project_App_userImg"),
        phone: localStorage.getItem("Project_App_userPhone"),
      },
    };
  },
  mutations,
  actions,
  getters,
};
