import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

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
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-blue">
                  <h1>{title}</h1>
                </div>
              </div>

              {/* Product info */}
              <div className="row">
                <div className="col-10 col-md-6 mx-auto my-3">
                  <img src={img} alt={title} className="img-fluid" />
                </div>
                {/* Product Text */}
                <div className="col-10 col-md-6 mx-auto my-3 text-capitalize">
                  <h2>Model: {title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    Made By: {company}
                  </h4>
                  <h5 className="text-blue">
                    <strong>
                      Price: <span>$</span> {price}
                    </strong>
                  </h5>
                  <p className="text-uppercase font-weight-bold mt-3 mb-0">
                    Product Information:
                  </p>
                  <p className="text-muted lead">{info}</p>

                  {/* Buttons */}
                  <Link to="/">
                    <ButtonContainer>Back to products</ButtonContainer>
                  </Link>
                  {/* cart button */}
                  <ButtonContainer
                    cart
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                  >
                    {inCart ? "In Cart" : "Add To Cart"}
                  </ButtonContainer>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
