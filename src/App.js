import TopNav from "./features/TopNav/TopNav";
import BottomNav from "./features/BottomNav/BottomNav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import About from "./Pages/About/About";
function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <div className={styles.test}>
        <Routes>
          <Route path="/" element={<div>home</div>} />
          <Route path="/trending" element={<div>trending</div>} />
          <Route path="/topRated" element={<div>top rated</div>} />
          <Route path="/discounts" element={<div>discounts</div>} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<div>cart</div>} />
        </Routes>
      </div>
      <BottomNav />
    </BrowserRouter>
  );
}

export default App;
