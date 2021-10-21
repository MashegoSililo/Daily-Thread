import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import uuid from "react-uuid";
import { useFormik } from "formik";
import Cart from "./Cart";
import { products } from "../data";
import { CartContext } from "../cartContext";
import backButton from "../Icons/back.svg";
import Product from "../Product";

export const Modal = ({ modalState, setModalState }) => {
  useEffect(() => {
    setTimeout(() => {
      setModalState(false);
    }, 5000);
    return () => {
      console.log("clean up");
      setModalState(false);
    };
  }, [modalState, setModalState]);
  return (
    <div className="modal">
      <h4>
        Item added to cart, view your cart <Link to="/cart">here</Link>.
      </h4>
    </div>
  );
};

export function View() {
  const { item } = useParams();

  const [chosenProduct, setChosenProduct] = useState("No product");

  useEffect(() => {
    const showProduct = products.find((product) => product.item === { item });
    setChosenProduct(showProduct);
  }, [item]);

  // get product details & destructure
  const productInfo = products.filter((product) => product.item === item);
  const {
    id,
    description,
    price,
    image,
    type,
    available,
    category,
    collection,
  } = productInfo[0];

  const [modalState, setModalState] = useState(false);
  let similarItems = products.filter(
    (x) =>
      x.collection === collection &&
      x.category === category &&
      x.type === type &&
      x.item !== item
  );

  return (
    <article className="page" key={id}>
      <h4 className="page-heading">
        <button className="return-to">
          <Link to={`/shop/${category}-${type}`}>
            <img src={backButton} alt="back button"></img>{" "}
          </Link>
        </button>
        <Link to={`/shop/${collection}`}>
          {"   " + collection.charAt(0).toUpperCase() + collection.slice(1)}{" "}
        </Link>{" "}
        /
        <Link to={`/shop/${category}`}>
          {" " + category.charAt(0).toUpperCase() + category.slice(1)}
        </Link>{" "}
        /
        <Link to={`/shop/${category}-${type}`}>
          {" " + type.charAt(0).toUpperCase() + type.slice(1)}{" "}
        </Link>{" "}
        / {item}
      </h4>
      <br></br>
      <section className="view">
        <img alt={item} src={image}></img>
        <div>
          <h2>{item}</h2>
          <h3>Product Details</h3>
          <p>{description}</p>
          <p>Category: {type.toUpperCase()}</p>
          <br></br>
          <h4>R {price}</h4>
          <br></br>

          <AddToCartForm
            available={available}
            item={item}
            price={price}
            setModalState={setModalState}
          />
          <div className="modal-location">
            {modalState && (
              <Modal modalState={modalState} setModalState={setModalState} />
            )}
          </div>
        </div>
      </section>
      <br></br>
      <div className="divider"></div>
      <br></br>
      <section>
        <h3 className="page-heading">Similar Items</h3>
        <div className="similar-items">
          {similarItems.map((each) => {
            return <Product key={uuid()} product={each} />;
          })}
        </div>
      </section>
    </article>
  );
}

export const AddToCartForm = ({
  id,
  available,
  item,
  price,
  setModalState,
}) => {
  const [cartState, setCartState] = useState("Add to Cart");
  const { cart, setCart } = useContext(CartContext);

  const formik = useFormik({
    initialValues: {
      size: "",
      quantity: 0,
    },

    onSubmit: (values) => {
      if (cartState === "Add to Cart") {
        setModalState(true);

        setCartState("Added to Cart!");
        const newItem = {
          id: id,
          item: item,
          size: values.size,
          quantity: values.quantity,
          price: price * values.quantity,
          unit: price,
        };
        available[values.size] = available[values.size] - values.quantity;

        setCart((cart) => {
          return [...cart, newItem];
        });
      } else {
        setCartState("Add to Cart");
      }
      return <Cart cart={cart} />;
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <h3>Available Sizes</h3>
        <p>View our sizing chart.</p>
        <br></br>
        <select id="size" className="quantity" onChange={formik.handleChange}>
          {Object.keys(available).map((each) => {
            return (
              <option name={each} value={each}>
                {each}
              </option>
            );
          })}
        </select>
        <br></br>
        <br></br>

        <h3>Quantity</h3>
        <input
          name="quantity"
          type="number"
          min="1"
          max="5"
          placeholder="1"
          value={formik.values.quantity}
          onChange={formik.handleChange}
          className="quantity"
        ></input>
        <br></br>
        <br></br>
        <button type="submit" className="addToCart">
          {cartState}
        </button>
      </form>
    </>
  );
};
