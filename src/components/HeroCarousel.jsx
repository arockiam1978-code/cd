import React, { useState, useEffect, useRef } from "react";

export default function HeroCarousel() {
  const slides = [
    { href: "/category/10-Business", src: "../assets/174531683413.webp", alt: "Business" },
    { href: "/category/7-Party", src: "../assets/174531680387.webp", alt: "Party" },
    { href: "/category/7-Party", src: "../assets/174531693624.webp", alt: "Party 2" },
    { href: "/category/9-Slim", src: "../assets/174531686655.webp", alt: "Slim" },
    { href: "/category/16-Festive", src: "../assets/174531677642.webp", alt: "Festive" }
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const slideInterval = useRef(null);

  const startAutoSlide = () => {
    slideInterval.current = setInterval(() => {
      setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
  };

  const stopAutoSlide = () => {
    clearInterval(slideInterval.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const handleNext = () => {
    stopAutoSlide();
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    startAutoSlide();
  };

  const handlePrev = () => {
    stopAutoSlide();
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    startAutoSlide();
  };

  return (
    <section className="hero-carousel">
      {/* Slides */}
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${activeSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="carousel-slide" key={index}>
            <a href={slide.href}>
              <img
                loading="lazy"
                src={new URL(slide.src, import.meta.url).href} // Use import.meta.url to get the absolute URL of the imageslide.src}
                alt={slide.alt}
              />
            </a>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button className="carousel-btn prev" onClick={handlePrev}>❮</button>
      <button className="carousel-btn next" onClick={handleNext}>❯</button>

      {/* Dots */}
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeSlide ? "active" : ""}`}
            onClick={() => setActiveSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}
