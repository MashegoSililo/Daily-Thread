import React from "react";
import Cart from "./Cart";
import PaymentInfo from "../paymentInfo";

const Checkout = () => {
  return (
    <section className="page flex-block ">
      <div className="payment divide ">
        <Cart />
      </div>
      
      <div>
        <h2>Payment Info</h2>
        <PaymentInfo />
      </div>
    </section>
  );
};

export default Checkout;
