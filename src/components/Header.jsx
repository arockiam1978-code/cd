import React from "react";
import logo from "../assets/charaghdin-logo.png";
import wishlist from "../assets/wishLh.png";
import cart from "../assets/cart2.png";
import Menu from "./Menu.jsx";
import "./Header.css";

/*
  Converted header/navigation. The original used Bootstrap and many conditional elements.
  This simplified header keeps the structure and links; expand it to reproduce the original behavior.
*/
export default function Header() {
  return (
    <header className="site-header">
      <div className="header-top container">
        <div className="logo">
          <a href="https://www.charaghdin.com/">
            <img src={logo} alt="Charagh Din Logo" />
          </a>
        </div>
        <Menu />
        <div className="header-actions">
          <a className="icon" href="https://www.charaghdin.com/products/wishlist">
            <img src={wishlist} alt="Wishlist" />
          </a>
          <a className="icon" href="https://www.charaghdin.com/products/shopping-cart">
            <img src={cart} alt="Cart" />
          </a>
        </div>
      </div>
    </header>
  );
}