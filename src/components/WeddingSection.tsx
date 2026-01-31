import "./WeddingSection.css";

const WeddingSection = () => {
  return (
    <div className="wedding-container">
      <h1 className="main-title">Planning A Dream Wedding?</h1>

      <div className="divider">
        <span className="line"></span>
        <span className="flower">🌸</span>
        <span className="line"></span>
      </div>

      <p className="description">
        We love visualizing the little many details that make your event
        exceptional. You can be rest assured that even the tiniest elements
        would be taken into consideration so you can enjoy your event as much as
        your guests. Whether We are planning a once-in-a-lifetime wedding, a
        Mehendi, a Haldi or a 50th wedding anniversary, We plunge headlong into
        weaving a beautiful tapestry of events that will linger in the minds of
        the families and guests alike. We look forward to getting to know you –
        and how we could help you plan your big day.
      </p>

      <div className="signature-section">
        <h3 className="signature">Shameer,</h3>
        <p className="founder-line">
          Founder And Creative Head – Veduka Wedding Planners
        </p>
      </div>

      <button className="meet-btn">MEET THE TEAM</button>
    </div>
  );
};

export default WeddingSection;
