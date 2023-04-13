export const categories = [
  { name: 'electronics', displayName: 'Electronics', _id: 1 },
  { name: 'food', displayName: 'Food', _id: 2 },
  { name: 'clothing', displayName: 'Clothing', _id: 3 },
];

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const displayCategories = createAsyncThunk("categories/getall", async () => {
//   const response = await fetch(process.env.REACT_APP_API + "/categories");
//   const json = await response.json();

//   return json.results;
// });



// const categorySlice = createSlice({
//   name: "category",
//   initialState: {
//     categories: [],
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//     .addCase(displayCategories.fulfilled, (state, {payload}) => {
//       state.categories = payload;
//     });
//   },
// });

// export default categorySlice;