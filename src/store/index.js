'use client';
import { configureStore, createSlice } from '@reduxjs/toolkit';
const uiSlice = createSlice({ name:'ui', initialState:{}, reducers:{} });
export default configureStore({ reducer: { ui: uiSlice.reducer }});