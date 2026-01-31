import "./StorySlices.css";
import chairs from "../../assets/images/chairs.png";
import stage from "../../assets/images/dance.png";
import nightDancs from "../../assets/images/nightdance.png";
import wedding from "../../assets/images/wedding-day3.png";
import useScrollReveal from "../../hooks/useScrollReveal";

const StorySlices = () => {
  useScrollReveal();

  return (
    <section className="story-section">
      <div className="story-grid">
        {/* IMAGE */}
        <div className="story-card image-card reveal zoom">
          <img src={chairs} alt="Wedding chairs decor" />
        </div>

        {/* TEXT */}
        <div className="story-card text-card reveal slide-left">
          <div className="story-card-inner">
            <h3>Our Story In Slices</h3>
            <p>
              It all started in the year of 2011, a young Gujrathi couple from
              Canada who came to learn yoga in Cannanore, Kerala asked for our
              hotel to help them with the wedding catering and also wanted
              assistance with décor & the game began!
            </p>
          </div>
        </div>

        <div className="story-card text-card small-text reveal slide-right">
          <div className="story-card-inner">
            <p>
              The trend of weddings may have changed in the wishful front on
              décor, catering, favours etc., but Indian weddings especially has
              evolved so gracefully. Every wedding we create is a new fairy tale
              in each event!
            </p>
          </div>
        </div>

        <div className="story-card image-card reveal zoom">
          <img src={stage} alt="Wedding stage celebration" />
        </div>

        <div className="story-card image-card reveal zoom">
          <img src={nightDancs} alt="Wedding dance" />
        </div>

        <div className="story-card text-card reveal slide-left">
          <div className="story-card-inner">
            <p>
              Yes, it’s a team! A team of talents, individuals with heart
              throbbing passion and a zeal to create that difference. Our
              clients place their big day on our shoulders with 100% trust.
            </p>
          </div>
        </div>

        <div className="story-card text-card small-text reveal slide-right">
          <div className="story-card-inner">
            <p>
              Veduka means “The New Beginning”. It is not just about getting two
              people married, but about the memories they carry for years ahead.
            </p>
          </div>
        </div>

        <div className="story-card image-card reveal zoom">
          <img src={wedding} alt="Wedding day" />
        </div>
      </div>
    </section>
  );
};

export default StorySlices;
