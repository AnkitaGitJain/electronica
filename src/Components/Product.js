import React from "react";
import "../App.css";

const Product = props => {
  return (
    <div>
      <img className="product-image" src={props.item.img} alt="" />
      <p className="product-name">{props.item.name}</p>
      <p className="product-description">{props.item.description}</p>
    </div>
  );
};
export default Product;
