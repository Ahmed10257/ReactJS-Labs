import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Products from "./Components/Pages/Products";
import AddProduct from "./Components/Pages/AddProduct";
import EditProduct from "./Components/Pages/EditProduct";
import Cart from "./Components/Pages/Cart";
import { CartContextProvider } from "./Context APIs/CartContext";
import { ProductsContextProvider } from "./Context APIs/ProductsContext";

function App() {
  return (
    <>
      <ProductsContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/add" element={<AddProduct />} />
              <Route path="/edit/:id" element={<EditProduct />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </ProductsContextProvider>
    </>
  );
}

export default App;
