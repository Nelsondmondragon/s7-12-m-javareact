import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const user: User =
  typeof window !== 'undefined' && localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : {
        id: 0,
        email: '',
        fullName: '',
        idLocation: '',
        address: '',
        dni: '',
        numberLicence: '',
        dateExpiration: '',
        card: {
          numberCard: '',
          fullName: '',
          date_expiration: '',
          cvv: '',
        },
      };

const initialState = {
  currentUser: user,
  showModalLoginError: false,
  showModalRegisterSuccess: false,
  showModalLogin: false,
  newUser: user.id === 0,
  category:
    typeof window !== 'undefined' && localStorage.getItem('category')
      ? JSON.parse(localStorage.getItem('category'))
      : '',
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
    openModalRegisterSuccess: (state) => {
      state.showModalRegisterSuccess = true;
    },
    closeModalRegisterSuccess: (state) => {
      state.showModalRegisterSuccess = false;
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
  openModalRegisterSuccess,
  closeModalRegisterSuccess,
} = userSlice.actions;

export const selectCurrentUser = (state) => state.user.currentUser;
export const selectShowModalLogin = (state) => state.user.showModalLogin;
export const selectShowModalLoginError = (state) =>
  state.user.showModalLoginError;
export const selectShowModalRegisterSuccess = (state) =>
  state.user.showModalRegisterSuccess;
export const selectCategory = (state) => state.user.category;
export const selectNewUser = (state) => state.user.newUser;

export default userSlice.reducer;
