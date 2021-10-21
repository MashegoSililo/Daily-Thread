import React, { useState } from "react";
import { Link } from "react-router-dom";

const ShopMenu = () => {
  const [menuState, setMenuState] = useState(false);

  const handleMenu = (e) => {
    e.preventDefault();
    if (!menuState) {
      setMenuState(true);
    } else {
      setMenuState(false);
    }
  };

  return (
    <div className='dropdown'>
      <button  onClick={handleMenu}><h2>Shop</h2></button>
      {menuState && <MenuContent />}
    </div>
  );
};

 export const MenuContent = () => {
  return (
    <section className="content">
      <div className="category">
        <br></br>
        <h4>
          <Link to="/shop/womens">Shop Womens</Link>
        </h4>
        <br></br>
        <h4>
          <Link to="/shop/womens-shirt">Shirts</Link>
        </h4>
        <br></br>
        <h4>
          <Link to="/shop/womens-outerwear">Outerwear</Link>
        </h4>
        <br></br>
        <h4>
          <Link to="/shop/womens-pants">Pants</Link>
        </h4>
        <br></br>
        <h4>
          <Link to="/shop/womens-skirts-and-dresses">Skirts & Dresses</Link>
        </h4>
        <br></br>
      </div>
      <div className="category">
        <br></br>
        <h4>
          <Link to="/shop/mens">Shop Mens</Link>
        </h4>
        <br></br>
        <h4>
          <Link to="/shop/mens-shirt">Shirts</Link>
        </h4>
        <br></br>
        <h4>
          <Link to="/shop/mens-outerwear">Outerwear</Link>
        </h4>
        <br></br>
        <h4>
          <Link to="/shop/mens-pants">Pants</Link>
        </h4>
        <br></br>
      </div>
      <div className="category">
        <br></br>
        <h4>
          <Link to="/store">All Collections</Link>
        </h4>
        <h4>
          <Link to="/shop/inhouse">Inhouse Collection</Link>
        </h4>
        <h4>
          <Link to="/shop/spring-summer">Spring/Summer Collection</Link>
        </h4>
        <h4>
          <Link to="/shop/collaboration">Concept x Brand Collection</Link>
        </h4>
        <br></br>
        <h4>
          <Link to="/shop/accessories">Accessories</Link>
        </h4>
        <br></br>
      </div>
    </section>
  );
};

export default ShopMenu;
