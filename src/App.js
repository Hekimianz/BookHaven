import TopNav from "./features/TopNav/TopNav";
import BottomNav from "./features/BottomNav/BottomNav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopNav />}>
          <Route path="/" element={<BottomNav />}>
            <Route path="/home" element={<div></div>} />
            <Route path="/trending" element={<div></div>} />
            <Route path="/topRated" element={<div></div>} />
            <Route path="/discounts" element={<div></div>} />
            <Route path="/about" element={<div></div>} />
            <Route path="/cart" element={<div></div>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
