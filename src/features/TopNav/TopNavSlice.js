import { createSlice } from "@reduxjs/toolkit";

export const TopNavSlice = createSlice({
  name: "TopNav",
  initialState: {
    mobileMenuToggled: false,
    desktopSearchToggled: false,
  },
  reducers: {
    toggleMobileMenu: (state) => {
      state.mobileMenuToggled = !state.mobileMenuToggled;
    },
    toggleDesktopSearch: (state) => {
      state.desktopSearchToggled = !state.desktopSearchToggled;
    },
  },
});

export const { toggleMobileMenu, toggleDesktopSearch } = TopNavSlice.actions;
export const getMobileMenuStatus = (state) => state.TopNav.mobileMenuToggled;
export const getDesktopSearchStatus = (state) =>
  state.TopNav.desktopSearchToggled;

export default TopNavSlice.reducer;
