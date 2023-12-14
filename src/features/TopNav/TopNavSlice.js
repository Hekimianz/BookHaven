import { createSlice } from "@reduxjs/toolkit";

export const TopNavSlice = createSlice({
  name: "TopNav",
  initialState: {
    mobileMenuToggled: false,
  },
  reducers: {
    toggleMobileMenu: (state) => {
      state.mobileMenuToggled = !state.mobileMenuToggled;
    },
  },
});

export const { toggleMobileMenu } = TopNavSlice.actions;
export const getMobileMenuStatus = (state) => state.TopNav.mobileMenuToggled;

export default TopNavSlice.reducer;
