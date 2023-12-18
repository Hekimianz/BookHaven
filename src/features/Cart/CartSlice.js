import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "Cart",
  initialState: { purchased: false, items: [] },
  reducers: {
    addToCart: (state, action) => {
      if (state.items.some((book) => book.id === action.payload.id)) {
        state.items.forEach((book) => {
          if (book.id === action.payload.id) {
            book.quantity += 1;
          }
        });
      } else {
        state.items.push(action.payload);
      }
    },
    delFromCart: (state, action) =>
      state.items.filter((book) => book.id !== action.payload),
    changeQuantity: (state, action) => {
      state.items.forEach((book) => {
        if (book.id === action.payload.id) {
          book.quantity = Math.ceil(+action.payload.quantity);
        }
      });
    },
    purchase: (state) => {
      state.items.length = 0;
    },
    togglePurchased: (state) => {
      state.purchased = !state.purchased;
    },
  },
});

export const {
  addToCart,
  delFromCart,
  changeQuantity,
  purchase,
  togglePurchased,
} = CartSlice.actions;
export const getCart = (state) => state.Cart.items;
export const getTotal = (state) => {
  let total = 0;
  state.Cart.items.forEach((book) => {
    total += book.price * book.quantity;
  });
  return total;
};
export const getPurchasedStatus = (state) => state.Cart.purchased;

export default CartSlice.reducer;
