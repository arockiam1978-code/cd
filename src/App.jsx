import React from "react";
import Header from "./components/Header";
import HeroCarousel from "./components/HeroCarousel";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import 'bootstrap/dist/css/bootstrap.min.css';

/*
  Top-level App: composes Header, Hero/Content, Footer.
  When converting the rest of the site, split sections into more components.
*/
export default function App() {
  return (
    <div className="site-root">
      <Header />
      <HeroCarousel />
      <Banner />

      <Footer />
    </div>
  );
}