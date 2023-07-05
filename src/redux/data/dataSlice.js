import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = import.meta.env.VITE_FMP_API_KEY;
const bulkUrl = `https://financialmodelingprep.com/api/v3/quote/AAPL,TWTR,TSLA,NFLX,MSFT,GOOG?apikey=${apiKey}`;

const initialState = {
  companyStockData: [],
};

export const fetchData = createAsyncThunk(
  'data/fetchData',

  async (_, thunkAPI) => {
    try {
      const response = await axios.get(bulkUrl);
      return response.data;
    } catch (error) {
      return error;
    }
  },
);

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.companyStockData = action.payload;
        console.log(action.payload);
      })
      .addCase(fetchData.rejected, (state) => {
        state.error = true;
        state.error = false;
      });
  },
});

export const {} = dataSlice.actions;

export default dataSlice.reducer;
