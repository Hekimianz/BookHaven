import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import booksData from "./data";
console.log(booksData);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
