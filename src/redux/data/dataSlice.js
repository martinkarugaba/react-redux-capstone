import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const countries = "https://restcountries.com/v3.1/all";

const initialState = {
  countries: [],
};

export const fetchData = createAsyncThunk(
  "data/fetchData",

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
  name: "stockData",
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
        state.countries = action.payload;
        console.log(state.countries);
      })
      .addCase(fetchData.rejected, (state) => {
        state.error = true;
        state.error = false;
      });
  },
});

export const {} = dataSlice.actions;

export default dataSlice.reducer;
