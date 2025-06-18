import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const API_KEY = "312427829dfb46f0be0124156251505";
const BASE_URL = "http:api.weatherapi.com/vi";

export const fetchForecastBycity = createAsyncThunk(
  "weather/fetchForecastBycity",
  async (city) => {
    const response = await axios.get(
      `${Base_URL}/forecast.json?key=${API_KEY}&q=${city}&days=5`
    );
    return response.data;
  }
);

const WeatherSlice = createSlice({
  name: "weather",
  initialState: {
    forecast: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchForecastBycity.fulfilled, (state, action) => {
      state.forecast = action.payload;
    });
  },
});

export default WeatherSlice.reducer;
