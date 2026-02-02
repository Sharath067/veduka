import { useState, useEffect, useRef } from "react";
import "./WorkCarousel.css";

import img1 from "../../assets/images/nightdance.png";
import img2 from "../../assets/images/dance.png";
import img3 from "../../assets/images/chairs.png";
import img4 from "../../assets/images/wedding-1.jpg";
import img5 from "../../assets/images/wedding-2.jpg";
import img6 from "../../assets/images/wedding-3.jpeg";
import img7 from "../../assets/images/wedding-4.jpeg";
import img8 from "../../assets/images/wedding-5.jpeg";
import img9 from "../../assets/images/wedding-day.png";

const data = [
  {
    img: img1,
    title: "Fine Little Details!",
    desc: "We are known for the little details...",
  },
  {
    img: img2,
    title: "A Stage Of Grace!",
    desc: "With all the traditions and rituals intact...",
  },
  {
    img: img3,
    title: "Lounge Like Treat!",
    desc: "This is one kind of a lounge for a Mehendi evening...",
  },
  {
    img: img4,
    title: "Fine Little Details!",
    desc: "We are known for the little details...",
  },
  {
    img: img5,
    title: "A Stage Of Grace!",
    desc: "With all the traditions and rituals intact...",
  },
  {
    img: img6,
    title: "Lounge Like Treat!",
    desc: "This is one kind of a lounge for a Mehendi evening...",
  },
  {
    img: img7,
    title: "Fine Little Details!",
    desc: "We are known for the little details...",
  },
  {
    img: img8,
    title: "A Stage Of Grace!",
    desc: "With all the traditions and rituals intact...",
  },
  {
    img: img9,
    title: "Lounge Like Treat!",
    desc: "This is one kind of a lounge for a Mehendi evening...",
  },
];

export default function WorkCarousel() {
  const [index, setIndex] = useState<number>(() => {
    const saved = localStorage.getItem("carouselIndex");
    return saved ? Number(saved) : 0;
  });

  const intervalRef = useRef<number | null>(null);

  const prev = () => setIndex((prev) => (prev - 1 + data.length) % data.length);
  const next = () => setIndex((prev) => (prev + 1) % data.length);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      next();
    }, 3000);

    return () => {
      if (intervalRef.current !== null) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("carouselIndex", index.toString());
  }, [index]);

  const stopAutoPlay = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const startAutoPlay = () => {
    if (intervalRef.current === null) {
      intervalRef.current = window.setInterval(next, 3000);
    }
  };

  return (
    <section className="work-section">
      <h2>A CAROUSEL OF OUR WORK</h2>

      <div
        className="carousel"
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}
      >
        <button className="arrow" onClick={prev}>
          ‹
        </button>

        <div className="cards">
          {data.map((item, i) => {
            const position =
              i === index
                ? "active"
                : i === (index + 1) % data.length
                  ? "right"
                  : i === (index - 1 + data.length) % data.length
                    ? "left"
                    : "hidden";

            return (
              <div key={i} className={`card ${position}`}>
                <img src={item.img} alt="" />
                <div className="card-body">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <button className="arrow" onClick={next}>
          ›
        </button>
      </div>
    </section>
  );
}
