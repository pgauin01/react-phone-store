import React, { Component } from "react";
import { ProductConsumer } from "./../context";
import { NavLink } from "react-router-dom";
import { Button } from "./Buttons";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            title,
            img,
            price,
            company,
            info,
            inCart,
          } = value.detailProduct;
          return (
            <div className="container">
              {/* title */}

              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end title */}
              {/* product info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                {/* end product info */}
                {/* product text */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitaize">
                  <h2>Model:{title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by: <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      price :<span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    some info about product:
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/* buttons */}
                  <NavLink to="/">
                    <Button>Back to product</Button>
                  </NavLink>
                  <Button
                    cart
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                    disabled={inCart ? true : false}
                  >
                    {inCart ? "inCart" : "addTocart"}
                  </Button>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
