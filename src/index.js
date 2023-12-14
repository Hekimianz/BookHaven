import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import booksData from "./data";

import store from "./store";
import { Provider } from "react-redux";

console.log(booksData);

const root = ReactDOM.createRoot(document.getElementById("root"));
const render = () =>
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
render();
