import React from "react";

export default function CartColumn() {
  return (
    <div className="container-fluid d-none d-lg-block text-center">
      <div className="row">
        <div className="col-10 col-lg-2 mx-auto">
          <p className="text-center text-uppercase">Products</p>
        </div>
        <div className="col-10 col-lg-2 mx-auto">
          <p className="text-center text-uppercase">Name of Products</p>
        </div>
        <div className="col-10 col-lg-2 mx-auto">
          <p className="text-center text-uppercase">Price</p>
        </div>
        <div className="col-10 col-lg-2 mx-auto">
          <p className="text-center text-uppercase">Quantity</p>
        </div>
        <div className="col-10 col-lg-2 mx-auto">
          <p className="text-center text-uppercase">Action</p>
        </div>
        <div className="col-10 col-lg-2 mx-auto">
          <p className="text-center text-uppercase">Total</p>
        </div>
      </div>
    </div>
  );
}
