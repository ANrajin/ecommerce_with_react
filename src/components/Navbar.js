import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

//css style component
import styled from "styled-components";

export default class Navbar extends Component {
  render() {
    return (
      <Navwrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="ecom" className="navbar-brand" />
        </Link>

        <ul className="navbar-nav align-item-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              products
            </Link>
          </li>
        </ul>

        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fa fa-cart-plus"></i>
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </Navwrapper>
    );
  }
}

//Styled-Components
const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  color: var(--lightBlue);
  border-radius: 0.3rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;

  // SASS tag
  &: hover {
    background: var(--lightBlue);
    color: var(--mainBlue);
  }

  &:focus {
    outline: none;
  }
`;

const Navwrapper = styled.nav`
  background: var(--mainBlue);

  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
