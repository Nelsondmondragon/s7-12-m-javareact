import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type Item = {
  id: string;
};

const initialState = {
  items: [], //dishes in te cart
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item._id === action.payload._id
      );

      if (itemIndex >= 0) {
        state.items[itemIndex] = action.payload;
      } else {
        state.items.push(action.payload);
      }
    },
    removeFromBasket: (state, action) => {
      if (action.payload.qty === 0) {
        const newState = state.items.filter(
          (item) => item._id !== action.payload._id
        );
        state.items = newState;
      } else {
        const itemIndex = state.items.findIndex(
          (item) => item._id === action.payload._id
        );
        state.items[itemIndex] = action.payload;
      }
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItems = (state) => state.basket.items;

export const selectBasketTotal = (state) =>
  state.basket.items.reduce(
    (total, item) => (total += item.price * item.qty),
    0
  );

export const selectBasketItemsById = (state, id) =>
  state.basket.items.filter((item) => item._id === id);

export default basketSlice.reducer;
