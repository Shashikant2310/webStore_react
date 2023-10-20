import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsData: [],
  webstoreUserInfo: null,
};

export const webstoreSlice = createSlice({
  name: "webStore",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.productsData.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.productsData.push(action.payload);
      }
    },
    increseQuantity: (state, action) => {
      const item = state.productsData.find(
        (item) => item.id === action.payload
      );
      if (item) {
        item.quantity++;
      }
    },
    decreseQuantity: (state, action) => {
      const item = state.productsData.find(
        (item) => item.id === action.payload
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    deleteItem: (state, action) => {
      state.productsData = state.productsData.filter(
        (item) => item.id !== action.payload
      );
    },
    clearCart: (state) => {
      state.productsData = [];
    },
    signInUser: (state, action) => {
      state.webstoreUserInfo = action.payload;
    },
    removeUser: (state) => {
      state.webstoreUserInfo = null;
    },
  },
});

export const {
  addToCart,
  increseQuantity,
  decreseQuantity,
  deleteItem,
  clearCart,
  signInUser,
  removeUser,
} = webstoreSlice.actions;

export default webstoreSlice.reducer;
