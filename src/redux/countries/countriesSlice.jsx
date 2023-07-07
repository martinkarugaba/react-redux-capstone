/* eslint-disable no-param-reassign */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const countries = 'https://restcountries.com/v3.1/all';

const initialState = {
  countries: [],
  country: {},
  loading: false,
  error: false,
};

export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async () => {
    try {
      const response = await axios.get(countries);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
);

const dataSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.countries = action.payload.map((item) => ({
          ...item,
          id: uuidv4(),
        }));
        console.log(action.payload);
      })
      .addCase(fetchCountries.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default dataSlice.reducer;
