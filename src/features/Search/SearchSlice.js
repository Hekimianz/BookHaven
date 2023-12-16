import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";

export const SearchSlice = createSlice({
  name: "Search",
  initialState: {
    searchTerm: "",
    results: { all: data, results: [] },
  },
  reducers: {
    setSearch: (state, action) => {
      state.searchTerm = action.payload;
      state.results.results = state.results.all.filter((book) =>
        book.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
    },
  },
});

export const { setSearch } = SearchSlice.actions;
export const getResults = (state) => state.Search.results.results;

export default SearchSlice.reducer;
