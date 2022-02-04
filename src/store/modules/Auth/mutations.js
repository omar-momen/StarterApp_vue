export default {
  // ============================= Login
  set_token(state, payload) {
    localStorage.setItem("Project_App_Token", payload);
    state.token = payload;
  },
  set_usertype(state, payload) {
    localStorage.setItem("Project_App_User_Type", payload);
    state.usertype = payload;
  },
  set_userId(state, payload) {
    localStorage.setItem("Project_App_User_Id", payload);
    state.user_id = payload;
  },
  set_userImage(state, payload) {
    localStorage.setItem("Project_App_userImg", payload);
    state.userImage = payload;
  },
  set_userPhone(state, payload) {
    localStorage.setItem("Project_App_userPhone", payload);
    state.userPhone = payload;
  },

  // ============================= Logout
  remove_token(state) {
    state.token = "";
    localStorage.removeItem("Project_App_Token");
  },
  remove_userType(state) {
    state.usertype = "";
    localStorage.removeItem("Project_App_User_Type");
  },
  remove_userId(state) {
    state.user_id = "";
    localStorage.removeItem("Project_App_User_Id");
  },
  remove_userImage(state) {
    state.userImage = "";
    localStorage.removeItem("Project_App_userImg");
  },
  remove_userPhone(state) {
    state.userPhone = "";
    localStorage.removeItem("Project_App_userPhone");
  },
};
