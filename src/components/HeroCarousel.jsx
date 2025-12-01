import React from "react";

/*
  A lightweight static carousel replicate.
  For animated or interactive carousel, install a carousel library (e.g., swiper or react-slick)
  and replace this with its component wiring.
*/
export default function HeroCarousel() {
  const slides = [
    { href: "https://www.charaghdin.com/category/10-Business", src: "/assets/174531683413.webp", alt: "Business" },
    { href: "https://www.charaghdin.com/category/7-Party", src: "/assets/174531680387.webp", alt: "Party" },
    { href: "https://www.charaghdin.com/category/7-Party", src: "/assets/174531693624.webp", alt: "Party 2" },
    { href: "https://www.charaghdin.com/category/9-Slim", src: "/assets/174531686655.webp", alt: "Slim" },
    { href: "https://www.charaghdin.com/category/16-Festive", src: "/assets/174531677642.webp", alt: "Festive" }
  ];

  return (
    <section className="hero-carousel container">
      <div className="carousel-inner">
        {slides.map((s, i) => (
          <div className={`slide ${i === 0 ? "active" : ""}`} key={i}>
            <a href={s.href}>
              <img loading="lazy" src={s.src} alt={s.alt} />
            </a>
          </div>
        ))}
      </div>
      {/* Controls could be added here */}
    </section>
  );
}