import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      token: localStorage.getItem("Project_App_Token"),
      usertype: localStorage.getItem("Project_App_User_Type"),
      user_id: localStorage.getItem("Project_App_User_Id"),
      userImage: localStorage.getItem("Project_App_userImg"),
      userPhone: localStorage.getItem("Project_App_userPhone"),
    };
  },
  mutations,
  actions,
  getters,
};
