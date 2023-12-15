import { createSlice } from "@reduxjs/toolkit";

const MobileSearchSlice = createSlice({
  name: "mobileSearch",
  initialState: {
    searchToggled: false,
  },
  reducers: {
    toggleSearch: (state) => {
      state.searchToggled = !state.searchToggled;
    },
  },
});

export const { toggleSearch } = MobileSearchSlice.actions;
export const getMobileSearchStatus = (state) =>
  state.MobileSearch.searchToggled;

export default MobileSearchSlice.reducer;
