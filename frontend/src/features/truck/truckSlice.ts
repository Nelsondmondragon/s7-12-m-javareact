'use client';
import { createSlice } from '@reduxjs/toolkit';

type Item = {
  title: string;
  image: string;
  qty: string;
};

type InitialState = {
  truckItems: Item[];
  truckTotalVolume: number;
  truckTotalQty: number;
};

const initialState: InitialState = {
  truckItems:
    typeof window !== 'undefined' && localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : [],
  truckTotalVolume: 0,
  truckTotalQty: 0,
};

const truckSlice = createSlice({
  initialState,
  name: 'truck',
  reducers: {
    setAddItemToTruck: (state, action) => {
      const itemIndex = state.truckItems.findIndex(
        (item) => item.title === action.payload.title
      );

      if (itemIndex >= 0) {
        state.truckItems[itemIndex].qty += 1;
      } else {
        const temp = { ...action.payload, qty: 1 };

        state.truckItems.push(temp);
      }
      localStorage.setItem('truck', JSON.stringify(state.truckItems));
    },

    setDecreaseItemFromTruck: (state, action) => {
      if (action.payload.qty === 1) {
        const newState = state.truckItems.filter(
          (item) => item.title !== action.payload.title
        );
        state.truckItems = newState;
      } else {
        const itemIndex = state.truckItems.findIndex(
          (item) => item.title === action.payload.title
        );

        if (state.truckItems[itemIndex].qty >= 1) {
          state.truckItems[itemIndex].qty -= 1;
        }
      }
      localStorage.setItem('truck', JSON.stringify(state.truckItems));
    },
    setRemoveItemFromTruck: (state, action) => {
      const newState = state.truckItems.filter(
        (item) => item.title !== action.payload.title
      );
      state.truckItems = newState;
      localStorage.setItem('truck', JSON.stringify(state.truckItems));
    },
  },
});

export const {
  setAddItemToTruck,
  setDecreaseItemFromTruck,
  setRemoveItemFromTruck,
} = truckSlice.actions;

export const selectTruckItems = (state) => state.truck.truckItems;

export const selectTruckItemsById = (state, title) =>
  state.truck.truckItems.filter((item) => item.title === title);

export const selectTruckVolume = (state) =>
  state.truck.truckItems.reduce(
    (total, item) => (total += item.volume * item.qty),
    0
  );

export default truckSlice.reducer;
