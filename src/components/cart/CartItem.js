import React from "react";

export default function CartItem({ item, value }) {
  const { id, title, img, count, price, total } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="row my-3 text-capitalize text-center">
      <div className="col-10 col-lg-2 mx-auto">
        <img
          src={img}
          alt={title}
          className="img-fluid"
          style={{ width: "5rem", height: "5rem" }}
        />
      </div>
      <div className="col-10 col-lg-2 mx-auto">
        <span className="d-lg-none">Product: </span>
        {title}
      </div>
      <div className="col-10 col-lg-2 mx-auto">
        <span className="d-lg-none">Price: </span>$ {price}
      </div>
      {/*  */}
      <div className="col-10 col-lg-2 my-2 my-lg-0 mx-auto">
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
      {/*  */}
      <div className="col-10 col-lg-2 mx-auto">
        <button className="btn cart-icon" onClick={() => removeItem(id)}>
          <i className="fa fa-trash"></i>
        </button>
      </div>
      <div className="col-10 col-lg-2 mx-auto">
        <strong>Item Total: $ {total}</strong>
      </div>
    </div>
  );
}
