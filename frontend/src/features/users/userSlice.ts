import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  avata: '',
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.email;
      state.email = action.payload.email;
    },
    removeUser: (state) => {
      state = initialState;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export const selectCurrentUser = (state) => state.user;

export default userSlice.reducer;
