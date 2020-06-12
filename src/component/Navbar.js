import React, { Component } from "react";
import Logo from "../logo.svg";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { Button } from "./Buttons";

class Navbar extends Component {
  render() {
    return (
      <NavbarWrap className="navbar navbar-expend-sm  navbar-dark px-sm-5">
        <NavLink to="/">
          <img src={Logo} alt="logo" className="navbar-brand" />
        </NavLink>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item mi-5">
            <NavLink to="/" className="nav-link">
              Products
            </NavLink>
          </li>
        </ul>
        <NavLink to="/cart" className="ml-auto">
          <Button>
            <span className="mr-2">
              <i className="fa fa-cart-plus" aria-hidden="true">
                My Cart
              </i>
            </span>
          </Button>
        </NavLink>
      </NavbarWrap>
    );
  }
}

const NavbarWrap = styled.nav`
  background: var(--mainBlue);
  color: var(--mainWhite);
  text-transform: capatalize;
  font-size: 1.3rem;
`;

export default Navbar;
