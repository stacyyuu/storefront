import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Storefront from "./Components/Storefront";
import Error from "./Components/Error";
import Layout from "./Components/Layout";
import ProductDetails from "./Components/ProductDetails";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />} errorElement={<Error />}>
            <Route path="/" element={<Storefront />} />
            <Route path="/products/:id" element={<ProductDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
