import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <br></br><br></br>
      <div className="flex">
        <section>
          <h3>Shop Our Collections:</h3>
          <Link to="/shop/womens">
            <p>Womens</p>
          </Link>
          <Link to="/shop/mens">
            <p>Mens</p>
          </Link>
          <Link to="/shop/accessories">
            <p>Accessories</p>
          </Link>
          <Link to="/shop/spring-summer">
            <p>This Season</p>
          </Link>
          <Link to="/shop/collaboration">
            <p>Daily Thread x Brand Collection</p>
          </Link>
          <br></br>
        </section>
        <section>
          <h3>Corporate</h3>
          <Link to="/stories">
            <p>Stories</p>
          </Link>
          <Link to="/">
            <p>Sustainabilty</p>
          </Link>
          <Link to="/">
            <p>Career</p>
          </Link>
        </section>
        <section>
          <h3>Help</h3>
          <Link to="/">
            <p>Customer Service</p>
          </Link>
          <Link to="/">
            <p>Our Return Policy</p>
          </Link>
          <Link to="/">
            <p>Our Sizing Chart</p>
          </Link>
        </section>
        <section>
          <h3>Contact Us</h3>
          <p>email@email.com</p>
          <p>Our Hotline: 000-000-0000</p>
          <br></br>
          <h4>
            Created for Excellence<br></br> Estabilished 2013
          </h4>
        </section>
      </div>
      <h1>Daily Thread</h1>
      <br></br>

    </footer>
  );
};

export default Footer;
