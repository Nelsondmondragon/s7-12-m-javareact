import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  currentUser: {
    name: '',
    email: '',
    avatar: '',
  },
  showModalLogin: false,
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.currentUser.name = action.payload.email;
      state.currentUser.email = action.payload.email;
    },
    removeUser: (state) => {
      state.currentUser.name = '';
      state.currentUser.email = '';
      state.currentUser.avatar = '';
    },
    openModalLogin: (state) => {
      state.showModalLogin = true;
    },
    closeModalLogin: (state) => {
      state.showModalLogin = false;
    },
  },
});

export const { setUser, removeUser, openModalLogin, closeModalLogin } =
  userSlice.actions;

export const selectCurrentUser = (state) => state.user.currentUser;
export const selectShowModalLogin = (state) => state.user.showModalLogin;

export default userSlice.reducer;
