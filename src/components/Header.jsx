import React from "react";
const logoUrl = new URL("../assets/charaghdin-logo.png", import.meta.url).href;
const cart = new URL("../assets/cart2.png", import.meta.url).href ;
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
          <a href="/">
            <img src={logoUrl} alt="Charagh Din Logo" />
          </a>
        </div>
        <Menu />
        <div className="header-actions">
          <a className="btn login" href="/customers/login">Log In</a>
          <a className="icon" href="/products/wishlist">
            <img src={new URL("../assets/wishLh.png", import.meta.url).href} alt="Wishlist" />
          </a>
          <a className="icon" href="/products/shopping-cart">
            <img src={cart} alt="Cart" />
          </a>
        </div>
      </div>
    </header>
  );
}