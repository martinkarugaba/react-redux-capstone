import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = import.meta.env.VITE_FMP_API_KEY;
const url = `https://financialmodelingprep.com/api/v3/income-statement/AAPL?limit=120&apikey=${apiKey}`;

const initialState = {
  data: [],
};

export const fetchData = createAsyncThunk(
  'data/fetchData',

  async (_, thunkAPI) => {
    try {
      const response = await axios.get(url);
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
        state.data = action.payload;
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
