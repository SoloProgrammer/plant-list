import React from "react";
import { useLocation } from "react-router-dom";
import "./product-details.css";

const ProductsDetail = () => {
  const { state: product } = useLocation();
  console.log(product);
  return (
    <div className="product_detail_container">
      <div className="prod_details">
        <div className="productInfo">
          <p className="prod_category">{product.category}</p>
          <h1>{product.name}</h1>
          <div className="basic_details">
            <small>price</small>
            <span>${product.price}</span>
          </div>
          <div className="basic_details">
            <small>size</small>
            <span>${product.size}</span>
          </div>
        </div>
        <div className="product_d_image">
          <img src={product.image} alt={product.name} />
        </div>
      </div>
      <div className="overview_wrapper">
        <b className="ov_text">Overview</b>
        <div className="overview">
          <div className="ov">
            <p>{product.water}</p>
            <small>WATER</small>
          </div>
          <div className="ov">
            <p>{product.light}</p>
            <small>LIGHT</small>
          </div>
          <div className="ov">
            <p>{product.fertilizer}</p>
            <small>FERTILIZER</small>
          </div>
        </div>
        <div className="bio">
          <b>Plant Bio</b>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            sequi odit quasi perspiciatis, quis porro blanditiis officia facere
            et quam veniam delectus, quos, magnam quo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetail;
