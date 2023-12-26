import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './store';

export interface Cart {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const initialState: Array<Cart> = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state, action: PayloadAction<Cart>) {
      const index = state.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state[index].quantity += 1;
      } else {
        state.push({...action.payload, quantity: 1});
      }
    },
    remove(state, action: PayloadAction<Cart>) {
      const index = state.findIndex(item => item.id === action.payload.id);
      if (index !== -1 && state[index].quantity == 1) {
        const newCart = state.filter(
          product => product.id !== action.payload.id,
        );
        state = newCart;
        return;
      }
      if (index !== -1 && state[index].quantity > 1) {
        state[index].quantity -= 1;
        return;
      }
    },
    emptyCart(state) {
      state = [];
    },
  },
});

export const {add, remove, emptyCart} = cartSlice.actions;
export const cartSelector = (state: RootState) => state.cart;
export default cartSlice.reducer;
