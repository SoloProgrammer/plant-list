import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const handleProductClick = () => {
    return navigate(`/${product.id}`, {
      state: product,
    });
  };
  return (
    <div onClick={handleProductClick} className="productCard">
      <div className="details">
        <p>{product.category}</p>
        <h1>{product.name}</h1>
        <b className="prod_price">${product.price}</b>
      </div>
      <div className="prod_image">
        <img src={product.image} alt={product.name} />
      </div>
    </div>
  );
};

export default ProductCard;
