import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";

const HomeSlice = createSlice({
  name: "Home",
  initialState: data,
});

export const getBooks = (state) => state.Home;
export default HomeSlice.reducer;
