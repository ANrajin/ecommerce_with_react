import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//Importing Components
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Error from "./components/Error";

//cart
import Cart from "./components/cart";

//Modal
import Modal from "./components/Modal";

function App() {
  return (
    //react fragment act as parent container/tag
    <React.Fragment>
      {/* Nav-bar is fixed */}
      <Navbar></Navbar>

      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Error} />
      </Switch>

      {/* Modal */}
      <Modal />
    </React.Fragment>
  );
}

export default App;
