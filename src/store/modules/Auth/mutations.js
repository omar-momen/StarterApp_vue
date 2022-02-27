export default {
  // ============================= Set_User_Dataa
  set_userId(state, payload) {
    localStorage.setItem("Project_App_User_Id", payload);
    state.user.id = payload;
  },
  set_token(state, payload) {
    localStorage.setItem("Project_App_Token", payload);
    state.user.token = payload;
  },
  set_usertype(state, payload) {
    localStorage.setItem("Project_App_User_Type", payload);
    state.user.usertype = payload;
  },
  set_userImage(state, payload) {
    localStorage.setItem("Project_App_userImg", payload);
    state.user.image = payload;
  },
  set_userPhone(state, payload) {
    localStorage.setItem("Project_App_userPhone", payload);
    state.user.phone = payload;
  },

  // ============================= Remove_User_Dataa
  remove_user_data(state) {
    localStorage.removeItem("Project_App_User_Id");
    localStorage.removeItem("Project_App_Token");
    localStorage.removeItem("Project_App_User_Type");
    localStorage.removeItem("Project_App_userImg");
    localStorage.removeItem("Project_App_userPhone");
    state.user.id = "";
    state.user.token = "";
    state.user.image = "";
    state.user.usertype = "";
    state.user.phone = "";
  },
};
