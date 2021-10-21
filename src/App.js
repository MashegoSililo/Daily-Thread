import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Footer";
import About from "./Components/About";
import Cart from "./Components/Pages/Cart";
import {Search} from "./Components/Search";
import {SearchResults} from './Components/Search'
import { CartContext } from "./Components/cartContext";
import { UserContext } from "./Components/UserContext";
import { SearchContext } from "./Components/SearchContext";
import Store from "./Components/Store";
import { View } from "./Components/Pages/View";
import { Account } from "./Components/Pages/Form";
import Checkout from "./Components/Pages/Checkout"
import {
  Womens,
  WomensShirts,
  WomensOuterwear,
  WomensPant,
  WomensBottoms,
} from "./Components/Pages/Womens";
import {
  Mens,
  MensShirts,
  MensOuterwear,
  MensPant,
} from "./Components/Pages/Mens";
import {
  Limited,
  Collab,
  Accessories,
  Inhouse,
} from "./Components/Pages/Limited";
import {
  ThisSeason,
  Sustainability,
  Collaboration,
  FashionWeek,
} from "./Components/Pages/Article";

const App = () => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState("");

  return (
    <Router>
      <div className="App">
        <UserContext.Provider value={{ user, setUser }}>
          <Header />
          <Route path="/login" component={Account}></Route>
        </UserContext.Provider>

        <Route
          exact path="/"
          render={() => (
            <section className="home">
              <div>
                <img alt="Spring/Summer Collection"></img>
                <h3>
                  <Link to="/shop/spring-summer">
                    {" "}
                    Shop Spring/Summer 2021 Collection
                  </Link>
                </h3>
              </div>
              <div>
                <img alt="Womens"></img>
                <h3>
                  <Link to="/shop/womens">Shop Womens</Link>
                </h3>
              </div>
              <div>
                <img alt="Shop Mens"></img>
                <h3>
                  <Link to="/shop/mens">Shop Mens</Link>
                </h3>
              </div>
              <div>
                <img alt="Concept x Brand Collaboration"></img>
                <h3>
                  <Link to="/stories/collaboration">
                    Concept x Brand: Bringing together two worlds
                  </Link>
                </h3>
              </div>
              <div>
                <img alt="Fashion Week Diaries: Inside Our Studio"></img>
                <h3>
                  {" "}
                  <Link to="/stories/fashion-week">
                    Fashion Week Diaries: Inside our Studio
                  </Link>
                </h3>
              </div>
              <div>
                <img alt="Sustainability"></img>
                <h3>
                  <Link to="/stories/sustainability">Sustainability</Link>
                </h3>
              </div>
            </section>
          )}
        ></Route>
        <Route exact path="/stories" component={About}></Route>
        <Route path="/stories/spring-summer" component={ThisSeason}></Route>
        <Route path="/stories/sustainability" component={Sustainability}></Route>
        <Route path="/stories/collaboration" component={Collaboration}></Route>
        <Route path="/stories/fashion-week" component={FashionWeek}></Route>

        <CartContext.Provider value={{ cart, setCart }}>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/view/:item" children={<View />}></Route>
          <Route path='/checkout' component={Checkout} ></Route>
        </CartContext.Provider>
        
        <Route path='./search-result' component={SearchResults}></Route>
        
        

        {/* Links to Product Pages */}
        <Route exact path="/store" component={Store}></Route>
        <Route exact path="/shop/womens" component={Womens}></Route>
        <Route exact path="/shop/womens-shirt" component={WomensShirts}></Route>
        <Route
          exact
          path="/shop/womens-outerwear"
          component={WomensOuterwear}
        ></Route>
        <Route path="/shop/womens-pants" component={WomensPant}></Route>
        <Route path="/shop/womens-skirts-and-dresses" component={WomensBottoms}></Route>

        <Route exact path="/shop/mens" component={Mens}></Route>
        <Route path="/shop/mens-shirt" component={MensShirts}></Route>
        <Route path="/shop/mens-outerwear" component={MensOuterwear}></Route>
        <Route path="/shop/mens-pants" component={MensPant}></Route>

        <Route path="/shop/spring-summer" component={Limited}></Route>
        <Route path="/shop/collaboration" component={Collab}></Route>
        <Route path="/shop/accessories" component={Accessories}></Route>
        <Route path="/shop/inhouse" component={Inhouse}></Route>
        <Route path="/search-results" children={SearchResults}></Route>

        <Footer />

      </div>
    </Router>
  );
};

export default App;
