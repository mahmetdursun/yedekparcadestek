'use client';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';

// İstersen uiSlice'ı da ayrıca ekleyebilirsin
// import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    // ui: uiReducer,
  },
});

export default store;
