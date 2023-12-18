import TopNav from "./features/TopNav/TopNav";
import BottomNav from "./features/BottomNav/BottomNav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import Trending from "./Pages/Trending/Trending";
import TopRated from "./Pages/TopRated/TopRated";
import SearchResults from "./Pages/SearchResults/SearchResults";
import { getResults } from "./features/Search/SearchSlice";
import { useSelector } from "react-redux";
function App() {
  const results = useSelector(getResults);
  return (
    <BrowserRouter>
      <TopNav />
      <div className={styles.test}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/topRated" element={<TopRated />} />
          <Route path="/discounts" element={<div>discounts</div>} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/results" element={<SearchResults data={results} />} />
        </Routes>
      </div>
      <BottomNav />
    </BrowserRouter>
  );
}

export default App;
