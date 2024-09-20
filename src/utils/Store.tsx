import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../utils/CartSlice';

// Configure the store
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Define the RootState type
export type RootState = ReturnType<typeof store.getState>;

// Export the store as default
export default store;
