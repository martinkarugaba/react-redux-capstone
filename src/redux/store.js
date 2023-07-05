import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './data/dataSlice';

const store = configureStore({
  reducer: {
    stockData: dataReducer,
  },
});

export default store;
