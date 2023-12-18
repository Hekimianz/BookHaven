import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";

const TrendingSlice = createSlice({
  name: "Trending",
  initialState: data.filter((book) => book.trendingBook),
});

export const getBooks = (state) => state.Trending;
export default TrendingSlice.reducer;
