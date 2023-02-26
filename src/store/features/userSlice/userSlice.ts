import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "./types";

const initialState: UserState = {
  id: "",
  username: "",
  token: "",
  isLogged: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (currentState, action: PayloadAction<User>): UserState => ({
      ...currentState,
      id: action.payload.id,
      username: action.payload.username,
      token: action.payload.token,
      isLogged: true,
    }),
    logoutUser: (): UserState => ({ ...initialState }),
  },
});

export const {
  loginUser: loginUserActionCreator,
  logoutUser: logoutUserActionCreator,
} = userSlice.actions;

export const userReducer = userSlice.reducer;
