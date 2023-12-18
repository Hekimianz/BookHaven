import { configureStore } from "@reduxjs/toolkit";
import TopNavReducer from "./features/TopNav/TopNavSlice";
import MobileSearchReducer from "./features/MobileSearch/MobileSearchSlice";
import HomeReducer from "./Pages/Home/HomeSlice";
import SearchReducer from "./features/Search/SearchSlice";
import CartReducer from "./features/Cart/CartSlice";
import TrendingReducer from "./Pages/Trending/TrendingSlice";
import TopRatedReducer from "./Pages/TopRated/TopRatedSlice";

const store = configureStore({
  reducer: {
    TopNav: TopNavReducer,
    MobileSearch: MobileSearchReducer,
    Home: HomeReducer,
    Search: SearchReducer,
    Cart: CartReducer,
    Trending: TrendingReducer,
    TopRated: TopRatedReducer,
  },
});

export default store;
