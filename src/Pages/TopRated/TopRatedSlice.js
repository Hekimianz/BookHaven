import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";
const TopRatedSlice = createSlice({
  name: "TopRated",
  initialState: data.filter((book) => book.topRated),
});

export const getBooks = (state) => state.TopRated;
export default TopRatedSlice.reducer;
