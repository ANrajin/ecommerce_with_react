import React from "react";
import { Link } from "react-router-dom";

export default function CartTotals({ value }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 col-sm-8 mt-2 ml-sm-5 ml-md-auto text-capitalize text-right">
            {/* clear btn */}
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase px-5 mb-3"
                onClick={() => clearCart()}
              >
                clear cart
              </button>
            </Link>
            {/*  */}
            <h5>
              <span className="text-title">Subtotal:</span>
              <strong>$ {cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-title">Tax:</span>
              <strong>$ {cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title">Total:</span>
              <strong>$ {cartTotal}</strong>
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
