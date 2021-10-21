import React from "react";
import { products } from "../data";
import Product from "../Product";
import Showing from "../Showing";

let inhouse = products.filter((x) => x.collection === "Inhouse");

export const Inhouse = () => {
  return (
    <section className="shop">
      <Showing heading="Inhouse Collection" />
      <div className="store">
        {inhouse.map((ea) => {
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

let springSummer = products.filter((x) => x.collection === "SS");

export const Limited = () => {
  return (
    <section className="shop">
      <Showing heading="Spring/Summer Collection" />
      <div className="store">
        {springSummer.map((ea) => {
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

let cxb = products.filter((x) => x.collection === "collaboration");

export const Collab = () => {
  return (
    <section className="shop">
      <Showing heading="Concept x Brand Collection" />
      <div className="store">
        {cxb.map((ea) => {
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

let accessory = products.filter((x) => x.type === "accessories");

export const Accessories = () => {
  return (
    <section className="shop">
      <Showing heading="Accessories" />
      <div className="store">
        {accessory.map((ea) => {
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
