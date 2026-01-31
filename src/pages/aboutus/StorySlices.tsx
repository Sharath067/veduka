import "./StorySlices.css";
import chairs from "../../assets/images/chairs.png";
import stage from "../../assets/images/dance.png";
import nightDancs from "../../assets/images/nightdance.png";
import wedding from "../../assets/images/wedding-day3.png";
import useScrollReveal from "../../hooks/useScrollReveal";

const StorySlices = () => {
  useScrollReveal();

  return (
    <section className="story-slices-section">
      <div className="slices-grid">
        <div className="slices-card slices-image reveal zoom">
          <img src={chairs} alt="Wedding chairs decor" />
        </div>

        <div className="slices-card slices-text reveal slide-left">
          <div className="slices-inner">
            <h3>Our Story In Slices</h3>
            <p>
              It all started in the year of 2011, a young Gujrathi couple from
              Canada who came to learn yoga in Cannanore, Kerala asked for our
              hotel to help them with the wedding catering (Oh yes! Our family
              is a bunch of hoteliers for ages now) and also wanted assistance
              with décor & the game began! – Sravani & Venkatesh
            </p>
          </div>
        </div>

        <div className="slices-card slices-text small-text reveal slide-right">
          <div className="slices-inner">
            <p>
              The trend of weddings may have changed in the wishful front on
              décor, catering, favours etc., but Indian weddings especially has
              evolved so gracefully. It feels amazing to curate some astonishing
              dreams and choices that our clients come up with. With all the
              inspirations and creative ideas that are revolving around the web,
              every wedding we create is so much fun, a new fairy tale in each
              event!
            </p>
          </div>
        </div>

        <div className="slices-card slices-image reveal zoom">
          <img src={stage} alt="Wedding stage" />
        </div>

        <div className="slices-card slices-image reveal zoom">
          <img src={nightDancs} alt="Wedding dance" />
        </div>

        <div className="slices-card slices-text reveal slide-left">
          <div className="slices-inner">
            <p>
              Yes, It’s a team! A team of talents, individuals with heart
              throbbing passion and a zeal to create that difference. We have
              versatile minds, an atmosphere that invite new ideas everyday and
              most of all the freedom to express the difference we wish to make.
              Our clients so far have placed their big day on our shoulders with
              100% trust, and that elevates us to produce only the best!
            </p>
          </div>
        </div>

        <div className="slices-card slices-text small-text reveal slide-right">
          <div className="slices-inner">
            <p>
              Veduka means “The New Beginning” and hence the name. It is not
              just about getting two people married, but about the memories they
              carry along for all the years ahead of them. When they look back
              to those memories, to us – all that we look for is that “smile”
              and the family like friendship we build with every client who pass
              by our way. Blissful so far & will be for all the time ahead of
              us, because hard work and passion is a rare combination and we are
              an endless source of just that!
            </p>
          </div>
        </div>

        <div className="slices-card slices-image reveal zoom">
          <img src={wedding} alt="Wedding day" />
        </div>
      </div>
    </section>
  );
};

export default StorySlices;
