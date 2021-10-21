import React from "react";
import Product from "./Product";
import Showing from "./Showing";
import { products } from "./data";

const Store = (props) => {
  return (
    <section className="shop">
      <Showing heading="All" />
      <div className="store" >
        {products.map((product) => {
          return <div key={product.id}><Product product={product} /></div>
        })}
      </div>
    </section>
  );
};

export default Store;
