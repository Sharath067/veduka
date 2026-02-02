import "./WhatWeDo.css";

import img1 from "../../assets/images/wedding-image.jpg";
import img2 from "../../assets/images/entertainment-image.png";
import img3 from "../../assets/images/stage-setup.png";
import img4 from "../../assets/images/ceremany.png";
import img5 from "../../assets/images/mehendi.png";
import img6 from "../../assets/images/invitation-card.png";
import img7 from "../../assets/images/candidate-image.jpg";
import img8 from "../../assets/images/ceremany-venu.png";
import img9 from "../../assets/images/bridal-makeup.png";

import img10 from "../../assets/images/design.png";

const data = [
  { img: img1, title: "Wedding Films" },
  { img: img2, title: "Entertainment Setups" },
  { img: img3, title: "Stage Setups" },
  { img: img4, title: "Ceremony Accessories" },
  { img: img5, title: "Mehendi Artist" },
  { img: img6, title: "Invitation Cards" },
  { img: img7, title: "Candid Photography" },
  { img: img8, title: "Ceremony Venues" },
  { img: img9, title: "Bridal Makeup" },
];

export default function WhatWeDo() {
  return (
    <section className="what-we-do">
      <h2 className="what-title">What We Do</h2>
      <img src={img10} alt="decorative" className="what-decorative" />

      <div className="what-grid">
        {data.map((item, index) => (
          <div className="what-card" key={index}>
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
