import React, { Component } from "react";

export default class Error extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
            <h1 className="displey-3">404</h1>
            <h1>oops!!! page not found</h1>
            <br />
          </div>
        </div>
        <h5 className="text-center">
          your requested url
          <span className="text-danger">
            {this.props.location.pathname}
          </span>{" "}
          was not found
        </h5>
      </div>
    );
  }
}
