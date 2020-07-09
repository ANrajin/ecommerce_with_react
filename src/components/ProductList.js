import React, { Component } from "react";
import Product from "./Product";
import Title from "./child/Title";
import { storeProducts } from "../data";
import { ProductConsumer } from "../Context";

export default class ProductList extends Component {
  state = {
    products: storeProducts,
  };
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">
              <ProductConsumer>
                {(data) => {
                  return data.products.map((product) => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}