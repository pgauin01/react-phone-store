import React from "react";

const cartItem = (props) => {
  const { id, img, title, price, total, count } = props.item;
  const { increment, decrement, removeItem, addTotal } = props.value;
  return (
    <div className="row my-2 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
          alt="product"
        ></img>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product:</span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price:</span>
        {price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn btn-black mx-1" onClick={() => decrement(id)}>
              -
            </span>
            <span className="btn btn-black mx-1">{count}</span>
            <span className="btn btn-black mx-1" onClick={() => increment(id)}>
              +
            </span>
          </div>
        </div>
      </div>
      {/* end button */}
      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fa fa-trash"></i>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>Item total: ${total}</strong>
      </div>
    </div>
  );
};

export default cartItem;
