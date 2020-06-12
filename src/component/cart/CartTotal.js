import React from "react";
import { Link } from "react-router-dom";

const cartTotal = (props) => {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = props.value;
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mt-2 ml-sm-5 md-auto col-sm-8 text-capitalize text-right">
          <Link to="/">
            <button
              className="btn btn-outline-danger text-uppercase mb-3 px-5"
              type="button"
              onClick={() => clearCart()}
            >
              clearCart
            </button>
          </Link>
          <h5>
            <span className="text-title">subTotal:</span>
            <strong>${cartSubTotal}</strong>
          </h5>
          <h5>
            <span className="text-title">cartTax:</span>
            <strong>${cartTax}</strong>
          </h5>
          <h5>
            <span className="text-title">cartTotal:</span>
            <strong>${cartTotal}</strong>
          </h5>
        </div>
      </div>
    </div>
  );
};
export default cartTotal;
