import { useEffect, useRef } from "react";
import "./WeddingStories.css";
import haldi from "../../assets/images/haldi.jpg";
import reception from "../../assets/images/reception.jpg";
import ceremony from "../../assets/images/marriage.jpg";
import sangeet from "../../assets/images/sangeetha.jpg";

const stories = [
  {
    title: "Reception",
    image: reception,
  },
  {
    title: "Ceremony",
    image: ceremony,
  },
  {
    title: "Haldi & Mehendi",
    image: haldi,
  },
  {
    title: "Sangeet",
    image: sangeet,
  },
];

const WeddingStories = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 },
    );

    cardsRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="wedding-stories">
      <p className="top-title">Wedding Stories Curated By Veduka</p>
      <div className="divider" />

      <h2 className="script-title">Veduka – Implies The Beginning</h2>

      <p className="description">
        We ensure that the work we render thoroughly represent you. Our services
        range from themed weddings, stage decor, photography and much more.
        <br />
        <br />
        Creating memories across Kerala, Karnataka. We believe even the tiniest
        details matter, so you can enjoy your event as much as your guests.
      </p>

      <div className="story-grid">
        {stories.map((story, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            className="story-card fade-in"
          >
            <img src={story.image} alt={story.title} />
            <span className="label">{story.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeddingStories;
