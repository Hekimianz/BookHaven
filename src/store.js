import { configureStore } from "@reduxjs/toolkit";
import TopNavReducer from "./features/TopNav/TopNavSlice";
import MobileSearchReducer from "./features/MobileSearch/MobileSearchSlice";

const store = configureStore({
  reducer: {
    TopNav: TopNavReducer,
    MobileSearch: MobileSearchReducer,
  },
});

export default store;
