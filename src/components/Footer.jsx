import React from "react";

/*
  Footer component — converted main links and social icons.
  Keep the long-form footer content (SEO content) in a separate component/file if desired.
*/
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="col">
          <h4>Charagh Din Site</h4>
          <ul>
            <li><a href="https://www.charaghdin.com/customers/login">Login/Register</a></li>
            <li><a href="https://www.charaghdin.com/">Home</a></li>
            <li><a href="https://www.charaghdin.com/products/shopping-cart">Shopping Cart</a></li>
            <li><a href="https://www.charaghdin.com/products/wishlist">Wishlist</a></li>
            <li><a href="https://www.charaghdin.com/about-charagh-din">About</a></li>
          </ul>
        </div>

        <div className="col">
          <h4>Follow Us</h4>
          <ul className="social">
            <li><a href="https://www.facebook.com/cdshirts"><img src="/assets/fb-icon.png" alt="facebook" /></a></li>
            <li><a href="https://www.instagram.com/charaghdinshirts/"><img src="/assets/instagram-icon.png" alt="instagram" /></a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom container">
        <small>© {new Date().getFullYear()} Charagh Din</small>
      </div>
    </footer>
  );
}