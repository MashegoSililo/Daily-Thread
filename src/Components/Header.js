import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import cart from "./Icons/cart.svg";
import userIcon from "./Icons/user.svg";
import { Username } from "./Utilities/User";
import { UserContext } from "./UserContext";
import ShopMenu from "./ShopMenu";
import search from "./Icons/search.svg";
import {Search} from "./Search"

function Header() {
  const { user } = useContext(UserContext);
  // Controlling the state of the search form through using conditionals:
  const [startSearch, setStartSearch] = useState(false);
  const openSearchBar = () => {
    if (startSearch) {
      setStartSearch(false);
    } else {
      setStartSearch(true);
    }
  };

  return (
    <>
      <header className="flex">
        <h1>
          <Link to="/">Daily Thread</Link>
        </h1>
        <ShopMenu />
        <Link to="/stories">
          <h3>Stories</h3>
        </Link>
        <aside className="aside">
          {/* Search */}
          <button onClick={openSearchBar}>
            <img src={search} alt="search"></img>
          </button>
          {/* Cart */}
          <Link to="/cart">
            <img src={cart} alt="cart"></img>
          </Link>
          {/* Login / Sign Up */}
          <Link to="/login">
            <img src={userIcon} alt="login/signup"></img>
          </Link>
          <Username user={user} />
        </aside>
      </header>
      {startSearch && <Search />}
    </>
  );
}

export default Header;
