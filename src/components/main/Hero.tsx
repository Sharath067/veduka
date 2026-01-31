import { useEffect } from "react";
import * as bootstrap from "bootstrap";
import "./Hero.css";

import img1 from "../../assets/images/wedding-1.jpg";
import img2 from "../../assets/images/wedding-2.jpg";
import img3 from "../../assets/images/wedding-3.jpeg";
import img4 from "../../assets/images/wedding-4.jpeg";
import img5 from "../../assets/images/wedding-5.jpeg";

const Hero: React.FC = () => {
  useEffect(() => {
    const carouselElement = document.getElementById("heroCarousel");

    let carousel: bootstrap.Carousel | null = null;

    if (carouselElement) {
      carousel = new bootstrap.Carousel(carouselElement, {
        interval: 4500,
        ride: "carousel",
        pause: false,
        wrap: true,
        touch: true,
      });
    }

    return () => {
      if (carousel) {
        carousel.dispose();
      }
    };
  }, []);

  return (
    <div id="heroCarousel" className="carousel slide carousel-fade">
      <div className="carousel-indicators">
        {[0, 1, 2, 3, 4].map((i) => (
          <button
            key={i}
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to={i}
            className={i === 0 ? "active" : ""}
          />
        ))}
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={img1} className="d-block w-100 hero-img" alt="slide1" />
        </div>

        <div className="carousel-item">
          <img src={img2} className="d-block w-100 hero-img" alt="slide2" />
        </div>

        <div className="carousel-item">
          <img src={img3} className="d-block w-100 hero-img" alt="slide3" />
        </div>

        <div className="carousel-item">
          <img src={img4} className="d-block w-100 hero-img" alt="slide4" />
        </div>

        <div className="carousel-item">
          <img src={img5} className="d-block w-100 hero-img" alt="slide5" />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" />
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" />
      </button>
    </div>
  );
};

export default Hero;
