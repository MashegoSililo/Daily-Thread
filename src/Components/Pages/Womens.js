import React from "react";
import { products } from "../data";
import Product from "../Product";
import Showing from "../Showing";

let allWomens = products.filter((x) => x.category === 'womens');

export const Womens = () => {
  return (
    <section className="shop">
      <Showing heading="All Womens" />
      <div className="store">
        {allWomens.map((ea) => {
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

// Womens Shirts
let womensShirt = products.filter(
  (x) => x.category === 'womens' && x.type === "shirt"
);
export const WomensShirts = () => {
  return (
    <section className="shop">
      <Showing heading="Womens Shirts" />
      <div className="store">
        {womensShirt.map((ea) => {
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

// Womens Outerwear
let womensOuter = products.filter(
  (x) => x.category === 'womens' && x.type === "outerwear"
);
export const WomensOuterwear = () => {
  return (
    <section className="shop">
      <Showing heading="Womens Outerwear" />
      <div className="store">
        {womensOuter.map((ea) => {
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

// Pants
let womensPants = products.filter(
  (x) => x.category === 'womens' && x.type === "pants"
);
export const WomensPant = () => {
  return (
    <section className="shop">
      <Showing heading="Womens Pants" />
      <div className="store">
        {womensPants.map((ea) => {
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

let skirtsAndDresses = products.filter(
  (x) => x.category === 'womens' && x.type === "skirts-and-dresses"
);
export const WomensBottoms = () => {
  return (
    <section className="shop">
      <Showing heading="Skirts & Dresses" />
      <div className="store">
        {skirtsAndDresses.map((ea) => {
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
