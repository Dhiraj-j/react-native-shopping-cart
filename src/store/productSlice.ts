import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './store';
import {ProductType} from '../types/productType';

const initialState: ProductType[] = [];

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (_, action: PayloadAction<ProductType[]>) => {
      return action.payload.map(product => ({
        ...product,
        favorite: false,
      }));
    },
    toggleFavorite: (state, action: PayloadAction<{productId: number}>) => {
      const {productId} = action.payload;
      const product = state.find(prod => prod.id === productId);
      if (product) {
        product.favorite = !product.favorite;
      }
    },
  },
});

export const {setProducts, toggleFavorite} = productsSlice.actions;
export default productsSlice.reducer;
export const productsSelector = (state: RootState) => state.products;
