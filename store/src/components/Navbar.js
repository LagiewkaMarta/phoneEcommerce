import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import styles from '../App.scss';
import logo from "../logo.svg";
import ButtonContainer from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark">
        {/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}
        <NavLink to="/">
          <img src={logo} alt="store icon link" className="navbar-brand" />
        </NavLink>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <NavLink to="/" className="nav-link text-white">
              products
            </NavLink>
          </li>
        </ul>
        <NavLink to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus"> my cart</i>
            </span>
          </ButtonContainer>
        </NavLink>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
background: ${styles.mainBlue};
.nav-link {
  font-size: 1.3rem;
  text-transform: capitalize;
}
`
