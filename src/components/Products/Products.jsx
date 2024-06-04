import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/Product";
import './style.css'
const Products = () => {
  // fetch the products here

  const URL = "https://create.blinkapi.io/api/eSphKNzwb9EJBt6GBjKx7Q";

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(URL);
        const jsonRes = await res.json();
        setProducts(jsonRes);
      } catch (error) {}
    };
    getProducts();
  }, []);
  return (
    <div className="product_list">
      {products.map((p) => {
        return <ProductCard key={p.id} product={p} />;
      })}
    </div>
  );
};

export default Products;
