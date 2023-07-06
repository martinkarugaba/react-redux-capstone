import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const countries = 'https://restcountries.com/v3.1/all';

const initialState = {
  countries: [],
  country: {},
};

export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',

  async () => {
    try {
      const response = await axios.get(countries);
      return response.data;
    } catch (error) {
      return error.message;
    }
  },
);

// export const fetchSingleCountry = createAsyncThunk(
//  "countries/fetchSingleCountry",
//  async (name) => {
//    try {
//      const response = await axios.get(
//        `https://restcountries.com/v3.1/name/${name}`
//      );
//      return response.data;
//    } catch (error) {
//      return error.message;
//    }
//  }
// );

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
        state.countries = action.payload;
        console.log(action.payload);
      })
      .addCase(fetchCountries.rejected, (state) => {
        state.error = true;
        state.error = false;
      });
    // .addCase(fetchSingleCountry.pending, (state) => {
    //  state.loading = true;
    //  state.error = false;
    // })
    // .addCase(fetchSingleCountry.fulfilled, (state, action) => {
    //  state.loading = false;
    //  state.error = false;
    //  state.country = action.payload;
    // })
    // .addCase(fetchSingleCountry.rejected, (state) => {
    //  state.error = true;
    //  state.error = false;
    // });
  },
});

export const {} = dataSlice.actions;

export default dataSlice.reducer;
