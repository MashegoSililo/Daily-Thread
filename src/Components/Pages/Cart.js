import React, {useContext } from "react";
import {Link} from 'react-router-dom';
import { CartContext } from "../cartContext";
import uuid from "react-uuid";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  let sub = cart.map((unit) => unit.price);

  const removeFromCart = (item) => {
    setCart((cart) => {
      return cart.filter((x) => x.item !== item);
    });
  };

  return (
    <div className="page">
      <h1 className="heading">Your Cart</h1>
      <section>
        {cart.map((each) => {
          const { item, size, quantity, price } = each;
          return (
            <div className="cartItem" key={uuid()}>
              <h3 style={{width: '45%'}}>{item}</h3>
              <p>{size} </p>
              <p>{quantity} </p>
              <p>{price} </p>
              <button onClick={() => removeFromCart(item)} className="formBtns">
                Remove
              </button>
            </div>
          );
        })}
        <div className='subtotal'>
          <h3 style={{ width: "75%" }}>Sub- Total</h3>
          <h3>R {sub.reduce((a,b)=> a+b, 0)}</h3>
        </div>
        <br></br>
        <Link className='checkout'  to='/checkout'>Checkout</Link>
      </section>
    </div>
  );
};


export default Cart;
