import React from "react";
import { products } from "../data";
import Product from "../Product";
import Showing from "../Showing";


let allMens = products.filter((x) => x.category === "mens");

export const Mens = () => {
  return (
    <section className="shop">
      <Showing heading="All Mens" />
      <div className="store">
        {allMens.map((ea) => {
          return (
            <div key={ea.id}>
              <Product product={ea} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

let mensShirt = products.filter(
  (x) => x.category === 'mens' && x.type === "shirt"
);
export const MensShirts = () => {
  return (
    <section className="shop">
      <Showing heading="Mens Shirts" />
      <div className="store">
        {mensShirt.map((ea) => {
          return (
            <div key={ea.id}>
              <Product product={ea} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

// Mens Outerwear
let mensOuter = products.filter(
  (x) => x.category === 'mens' && x.type === "outerwear"
);
export const MensOuterwear = () => {
  return (
    <section className="shop">
      <Showing heading="Mens Outerwear" />
      <div className="store">
        {mensOuter.map((ea) => {
          return (
            <div key={ea.id}>
              <Product product={ea} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

// MensPants
let mensPants = products.filter(
  (x) => x.category === 'mens' && x.type === "pants"
);
export const MensPant = () => {
  return (
    <section className="shop">
      <Showing heading="Mens Pants" />
      <div className="store">
        {mensPants.map((ea) => {
          return (
            <div key={ea.id}>
              <Product product={ea} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
