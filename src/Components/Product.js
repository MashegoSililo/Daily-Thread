import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { image, item, price, id } = props.product;
  return (
    <div className="product" key={id}>
      <img alt={item} src={image} className="stockimg"></img>
      <br></br>
      <div className="purchasing">
        <h4 className="info">
          <Link to={`/view/${item}`}>{item}</Link>
        </h4>
        <h5>R{price}</h5>
      </div>
    </div>
  );
};


export default Product;
