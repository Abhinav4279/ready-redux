import { configureStore } from '@reduxjs/toolkit';
import inputReducer from '../reducers/inputSlice'

export const store = configureStore({
  reducer: {
    input: inputReducer
  },
});
