import "./OurProcess.css";
import flowerLeft from "../../assets/images/flower4.png";
import flowerRight from "../../assets/images/flower2.jpg";
import divider from "../../assets/images/design.png";

const processData = [
  {
    step: "01",
    title: "We Understand",
    desc: "Listening to you is our priority because it helps us gain a clear understanding of your unique needs, interests, budget, timeline etc., also presenting you our vast repository of work and inspirations.",
  },
  {
    step: "02",
    title: "Brainstorm",
    desc: "A creativity exercise is done with our team to produce and gather ideas that stands out, based on extensive research.",
  },
  {
    step: "03",
    title: "Ideate",
    desc: "With the gathered ideas, we form a slider with options pertaining to your interests and events, alongside a venue visit preferably with you.",
  },
  {
    step: "04",
    title: "Present",
    desc: "We meet you in person or an online share to give a detailed presentation that shall give you an insight of what your Big day holds to look like.",
  },
  {
    step: "05",
    title: "Revision",
    desc: "Based on your feedback, there are changes made to the presentation and the complete output is presented.",
  },
  {
    step: "06",
    title: "Commercials & SOW",
    desc: "We will then share a proposal with commercials and complete Scope of Work, that is delegated to us, which leads to negotiation and finalization.",
  },
  {
    step: "07",
    title: "Design & Development",
    desc: "Based on the final presentation, 3D layout is shared for the stage, seating area etc., that helps you visualize your Big Day.",
  },
  {
    step: "08",
    title: "Final Review",
    desc: "One complete walkthrough is done to ensure we are on the same page and the design is shop ready.",
  },
  {
    step: "09",
    title: "Execute",
    desc: "The BIG Daydreams are brought to life!",
  },
];

const OurProcess = () => {
  return (
    <section className="process-section">
      <img src={flowerLeft} className="floral floral-left" alt="floral left" />
      <img
        src={flowerRight}
        className="floral floral-right"
        alt="floral right"
      />

      <h2 className="process-title">Our Process</h2>
      <img src={divider} alt="decorative divider" className="process-divider" />

      <div className="process-grid">
        {processData.map((item) => (
          <div className="process-card" key={item.step}>
            <span className="process-step">{item.step}</span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProcess;
