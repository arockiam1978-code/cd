import React from "react";
import Header from "./components/Header";
import HeroCarousel from "./components/HeroCarousel";
import Footer from "./components/Footer";

/*
  Top-level App: composes Header, Hero/Content, Footer.
  When converting the rest of the site, split sections into more components.
*/
export default function App() {
  return (
    <div className="site-root">
      <Header />
      <main>
        <HeroCarousel />
        {/* Several promotional blocks and product-image links from original */}
        <section className="promo-grid container">
          <div className="row">
            <div className="col">
              <a href="https://www.charaghdin.com/category/11-Regular">
                <img src="/assets/casual-shirts-2.webp" alt="Casual Shirts" />
              </a>
            </div>
            <div className="col">
              <a href="https://www.charaghdin.com/category/7-party">
                <img src="/assets/party-shirts-2.webp" alt="Party shirts" />
              </a>
            </div>
          </div>
        </section>

        {/* SEO & long-form content preserved as static HTML */}
        <section className="seo-text container">
          <h1>CHARAGH DIN: The Ultimate Destination for Exclusive Shirts</h1>
          <p>
            Charagh Din, originally New Lord & Company, began in the year 1947...
            (migrated content — keep the rest of the original SEO text here)
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}