import { createSlice } from "@reduxjs/toolkit";

const PRODUCTS = [
  { name: "TV", category: "electronics", price: 699.0, inStock: 5 },
  { name: "Radio", category: "electronics", price: 99.0, inStock: 15 },
  { name: "Shirt", category: "clothing", price: 9.0, inStock: 25 },
  { name: "Socks", category: "clothing", price: 12.0, inStock: 10 },
  { name: "Apples", category: "food", price: 0.99, inStock: 500 },
  { name: "Eggs", category: "food", price: 1.99, inStock: 12 },
  { name: "Bread", category: "food", price: 2.39, inStock: 90 },
];

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: PRODUCTS,
    activeCategory: undefined,
  },
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
    decreaseStock: (state, action) => {
      const updatedProducts = state.products.map((item) => {
        if (item.name === action.payload) {
          return { ...item, inStock: item.inStock - 1};
        } else {
          return item;
        }
      });
      state.products = updatedProducts;
    },
    increaseStock: (state, action) => {
      const updatedProducts = state.products.map((item) => {
        if (item.name === action.payload) {
          return { ...item, inStock: item.inStock + 1 };
        } else {
          return item;
        }
      });
      state.products = updatedProducts;
    },
  },
});

export const filteredProducts = ({ product: { activeCategory, products } }) =>
  activeCategory
    ? products.filter((product) => product.category === activeCategory)
    : products;

export default productSlice;
