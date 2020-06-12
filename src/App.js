import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar";
import ProductList from "./component/ProductList";
import Cart from "./component/cart";
import Default from "./component/Deafult";
import Details from "./component/Details";
import Modal from "./component/Modal";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/cart" component={Cart} />
          <Route path="/details" component={Details} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
