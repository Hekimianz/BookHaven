import { configureStore } from "@reduxjs/toolkit";
import TopNavReducer from "./features/TopNav/TopNavSlice";
import MobileSearchReducer from "./features/MobileSearch/MobileSearchSlice";
import HomeReducer from "./Pages/Home/HomeSlice";
import SearchReducer from "./features/Search/SearchSlice";

const store = configureStore({
  reducer: {
    TopNav: TopNavReducer,
    MobileSearch: MobileSearchReducer,
    Home: HomeReducer,
    Search: SearchReducer,
  },
});

export default store;
