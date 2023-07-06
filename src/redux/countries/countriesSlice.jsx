import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const countries = "https://restcountries.com/v3.1/all";

const initialState = {
  countries: [],
  country: {},
};

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",

  async () => {
    try {
      const response = await axios.get(countries);
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

const dataSlice = createSlice({
  name: "countries",
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
      })
      .addCase(fetchCountries.rejected, (state) => {
        state.error = true;
        state.error = false;
      });
  },
});

export const {} = dataSlice.actions;

export default dataSlice.reducer;
