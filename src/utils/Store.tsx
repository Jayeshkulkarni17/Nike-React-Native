import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../utils/CartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer, // Add your reducers here
  },
});

export default store;
