import "./ElegantSection.css";
import BackgroundImage from "../../assets/images/wedding-day1.png";

export default function ElegantSection() {
  return (
    <section>
      <section className="elegant-section">
        <p className="testimonial">
          Thank You So Much Veduka Wedding For Making Both My Engagement And
          Wedding The Two Most Beautiful Days Of My Life. What I Must Mention Is
        </p>

        <p className="testimonial">
          How Veduka Weddings Will Always Match Up To Your Expectations Of Your
          Dream Day, If Not Better!
        </p>

        <p className="testimonial author">
          Lovely Work Sarang And Once Again Thank You So Much! – Anjali & Rishil
        </p>

        <h2 className="main-heading">
          Bespoke Weddings With
          <br />
          Exquisite Service & Professionalism
        </h2>

        <p className="description">
          We Are A Crew Of Passionate Wedding Planners, Enthusiasts And Creative
          Prodigies, Who Find Immense Happiness In Those Curations Along The
          Way.
        </p>

        <p className="description">
          Those Smiles And Memories Created Are Ceaseless, Created With All The
          Love And Bliss One Could Dream Of.
        </p>
      </section>
      <img
        src={BackgroundImage}
        alt="Elegant Wedding Background"
        className="background-image"
      />
    </section>
  );
}
