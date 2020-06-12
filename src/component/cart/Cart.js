import React, { Component } from "react";
import Title from "./../Title";
import CartColumn from "./cartColumns";
import Emptycart from "./emptyCart";
import { ProductConsumer } from "./../../context";
import Cartlist from "./Cartlist";
import CartTotal from "./CartTotal";

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="your" title="cart" />
                  <CartColumn></CartColumn>
                  <Cartlist value={value}></Cartlist>
                  <CartTotal value={value}></CartTotal>
                </React.Fragment>
              );
            } else {
              return <Emptycart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
