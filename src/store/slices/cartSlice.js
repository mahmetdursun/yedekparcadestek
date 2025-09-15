'use client';
import { createSlice } from '@reduxjs/toolkit';

// shape: { id, title, price, brand?, img?, qty }
const initialState = { items: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const it = action.payload; // {id,title,price,...}
      const existing = state.items.find(x => x.id === it.id);
      if (existing) existing.qty += it.qty ?? 1;
      else state.items.push({ ...it, qty: it.qty ?? 1 });
    },
    removeItem(state, action) {
      const id = action.payload;
      state.items = state.items.filter(x => x.id !== id);
    },
    inc(state, action) {
      const id = action.payload;
      const it = state.items.find(x => x.id === id);
      if (it) it.qty += 1;
    },
    dec(state, action) {
      const id = action.payload;
      const it = state.items.find(x => x.id === id);
      if (it) {
        it.qty -= 1;
        if (it.qty <= 0) {
          state.items = state.items.filter(x => x.id !== id);
        }
      }
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, inc, dec, clearCart } = cartSlice.actions;

// selectors
export const selectItems     = (s) => s.cart?.items ?? [];
export const selectCount     = (s) => selectItems(s).reduce((n, it) => n + it.qty, 0);
export const selectSubtotal  = (s) => selectItems(s).reduce((sum, it) => sum + it.price * it.qty, 0);

// Fiyat zaten KDV dahil. KDV'yi ayrı göstermek için %20 oranını içinden ayırıyoruz.
export const selectKdv = (s) => {
  const subtotal = selectSubtotal(s);
  // KDV dahil fiyat içinden %20'lik kısmı ayırma:
  return Math.round((subtotal - subtotal / 1.20) * 100) / 100;
};

// Toplam, zaten subtotal (KDV dahil)
export const selectTotal = (s) => selectSubtotal(s);

export default cartSlice.reducer;
