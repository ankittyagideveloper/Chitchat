import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  userEmail: "",
  token: "",
  phoneNumber: "",
  profileImage: "",
};

export const userLoginSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    userInfo: (state, { payload }) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      debugger;
      state.userName = payload.userName;
      state.userEmail = payload.userEmail;
      state.token = payload.token;
      state.profileImage = payload.profileImage;
      console.log(state, payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { userInfo } = userLoginSlice.actions;

export default userLoginSlice.reducer;
