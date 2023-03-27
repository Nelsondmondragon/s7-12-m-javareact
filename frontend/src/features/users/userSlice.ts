import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  name: null,
  email: null,
  avata: null,
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state = action.payload;
    },
    removeUser: (state) => {
      state = initialState;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export const selectCurrentUser = (state) => state.user;

export default userSlice.reducer;
