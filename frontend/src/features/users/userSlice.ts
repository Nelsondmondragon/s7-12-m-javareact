import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  currentUser: {
    id: 0,
    email: '',
    firstName:
      typeof window !== 'undefined' && localStorage.getItem('user')
        ? JSON.parse(localStorage.getItem('user')).firstName
        : '',
    lastName:
      typeof window !== 'undefined' && localStorage.getItem('user')
        ? JSON.parse(localStorage.getItem('user')).lastName
        : '',
    address: '',
    birthdate: '',
    driverLicenceImgUrl: '',
    nationalIdImgUrl: '',
    phone:
      typeof window !== 'undefined' && localStorage.getItem('category')
        ? JSON.parse(localStorage.getItem('category'))
        : '',
  },
  showModalLogin: false,
  showModalLoginError: false,
  category: '',
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    removeCategory: (state) => {
      state.category = '';
    },
    setUser: (state, action) => {
      state.currentUser = action.payload;
    },
    removeUser: (state) => {
      state.currentUser = initialState.currentUser;
    },

    openModalLogin: (state) => {
      state.showModalLogin = true;
    },
    closeModalLogin: (state) => {
      state.showModalLogin = false;
    },
    openModalLoginError: (state) => {
      state.showModalLoginError = true;
    },
    closeModalLoginError: (state) => {
      state.showModalLoginError = false;
    },
  },
});

export const {
  setCategory,
  removeCategory,
  setUser,
  removeUser,
  openModalLogin,
  closeModalLogin,
  openModalLoginError,
  closeModalLoginError,
} = userSlice.actions;

export const selectCurrentUser = (state) => state.user.currentUser;
export const selectShowModalLogin = (state) => state.user.showModalLogin;
export const selectShowModalLoginError = (state) =>
  state.user.showModalLoginError;
export const selectCategory = (state) => state.user.category;

export default userSlice.reducer;
