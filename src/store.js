import { configureStore } from "@reduxjs/toolkit";
import TopNavReducer from "./features/TopNav/TopNavSlice";

const store = configureStore({
  reducer: {
    TopNav: TopNavReducer,
  },
});

export default store;
