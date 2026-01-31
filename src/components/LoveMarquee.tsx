import React from "react";
import "./LoveMarquee.css";

interface LoveMarqueeProps {
  text: string;
}

const LoveMarquee: React.FC<LoveMarqueeProps> = ({ text }) => {
  return (
    <div className="marquee-container">
      <div className="marquee">{text}</div>
    </div>
  );
};

export default LoveMarquee;
