import "./MagicalDay.css";
import wedding from "../../assets/images/wedding-day.png";

const MagicalDay = () => {
  return (
    <section className="magical-container">
      <div className="magical-content">
        <h1 className="magical-title">Let’s Create Your Magical Day!</h1>

        <div className="divider">
          <span className="dot"></span>
        </div>

        <p className="magical-text">
          We Are A Crew Of Passionate Wedding Planners, Enthusiasts And Creative
          Prodigies, Who Find Immense Happiness In Those Curations Along The
          Way.
          <br />
          <br />
          Those Smiles And Memories Created Are Ceaseless, Created With All The
          Love And Bliss One Could Dream Of.
        </p>
      </div>

      <div className="magical-image">
        <img src={wedding} alt="Wedding Ceremony" />
      </div>
    </section>
  );
};

export default MagicalDay;
