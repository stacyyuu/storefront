import { ContentPasteSearchOutlined } from "@mui/icons-material";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import apples from './imgs/apples.jpg';
// import bread from './imgs/bread.jpg';
// import eggs from './imgs/eggs.jpg';
// import radio from './imgs/radio.jpg';
// import socks from './imgs/socks.jpg';
// import tv from './imgs/TV.jpg';
// import shirt from './imgs/shirt.jpg';

// const PRODUCTS = [
//   { name: "TV", category: "electronics", price: 699.0, inStock: 5, image: tv},
//   { name: "Radio", category: "electronics", price: 99.0, inStock: 15, image: radio },
//   { name: "Shirt", category: "clothing", price: 9.0, inStock: 25, image: shirt },
//   { name: "Socks", category: "clothing", price: 12.0, inStock: 10, image: socks },
//   { name: "Apples", category: "food", price: 0.99, inStock: 500, image: apples },
//   { name: "Eggs", category: "food", price: 1.99, inStock: 12, image: eggs },
//   { name: "Bread", category: "food", price: 2.39, inStock: 90, image: bread },
// ];

export const displayProducts = createAsyncThunk("products/getall", async () => {
  const response = await fetch(process.env.REACT_APP_API + "/products");
  const json = await response.json();

  return json.results;
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    activeCategory: undefined,
    selectedProduct: {}
  },
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
    decreaseStock: (state, action) => {
      const updatedProducts = state.products.map((item) => {
        if (item.name === action.payload) {
          return { ...item, inStock: item.inStock - 1 };
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
    setProduct: (state, action) => {
      state.selectedProduct = state.product[action.payload];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(displayProducts.fulfilled, (state, { payload }) => {
      state.products = payload;
    });
  },
});

export const filteredProducts = ({ product: { activeCategory, products } }) =>
  activeCategory
    ? products.filter((product) => product.category === activeCategory)
    : products;

export default productSlice;
