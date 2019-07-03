import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../logo.svg";
export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
        {/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}
        <NavLink to="/">
          <img src={logo} alt="store icon link" className="navbar-brand" />
        </NavLink>
        <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
                <NavLink to="/" className="nav-link">products</NavLink>
            </li>
        </ul>
        <NavLink to="/cart" className="ml-auto">
            <button><i className="fas fa-cart-plus">my cart</i></button>
        </NavLink>
      </nav>
    );
  }
}
