import React from "react";
import "./App.css";
import Products from "./components/Products/Products";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/Products";
import ProductsDetail from "./pages/ProductsDetail";

const App = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <Routes>
          <Route exact path="/" element={<ProductsPage />} />
          <Route path="/:id" element={<ProductsDetail />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
