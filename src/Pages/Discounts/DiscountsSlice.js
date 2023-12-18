import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";

const DiscountsSlice = createSlice({
  name: "Discounts",
  initialState: data.filter((book) => book.isDiscounted),
});

export const getBooks = (state) => state.Discounts;
export default DiscountsSlice.reducer;
