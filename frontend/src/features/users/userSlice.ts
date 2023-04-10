import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  currentUser: {
    id: 0,
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    birthdate: '',
    driverLicenceImgUrl: '',
    nationalIdImgUrl: '',
    phone: '',
  },
  showModalLogin: false,
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
  },
});

export const {
  setCategory,
  removeCategory,
  setUser,
  removeUser,
  openModalLogin,
  closeModalLogin,
} = userSlice.actions;

export const selectCurrentUser = (state) => state.user.currentUser;
export const selectShowModalLogin = (state) => state.user.showModalLogin;
export const selectCategory = (state) => state.user.category;

export default userSlice.reducer;
