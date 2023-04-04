// 'use client';
import { configureStore } from '@reduxjs/toolkit';
import basketReducer from '../features/basket/basketSlice';
import userReducer from '../features/users/userSlice';
import truckSlice from '@/features/truck/truckSlice';


export const store = configureStore({
  reducer: {
    basket: basketReducer,
    user: userReducer,
    truck: truckSlice,
    category: categorySlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
