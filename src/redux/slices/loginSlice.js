import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: {
    isLogin: localStorage.getItem("isLogin") === "true" ? true : false,
  },
  reducers: {
    login: (state) => {
      localStorage.setItem("isLogin", "true");
      state.isLogin = true;
    },
    logout: (state) => {
      // localStorage.removeItem('isLogin');
      localStorage.setItem("isLogin", "false");
      state.isLogin = false;
    },
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
