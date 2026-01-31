import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaGooglePlusG,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-logo">Veduka</h2>
        <p className="footer-sub">weddings & celebrations</p>

        <p className="footer-cities">
          Bangalore | Hyderbad | Mangalore | Ananthapur | Kurnool |
        </p>

        <p className="footer-text">
          Please enable footer phone in Theme Options.
        </p>

        <p className="footer-email">veduka@gmail.com</p>

        <div className="footer-icons">
          <FaFacebookF />
          <FaInstagram />
          <FaGooglePlusG />
          <FaYoutube />
          <FaPinterestP />
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 <span>Veduka Weddings & Celebrations</span>. All Rights Reserved.
      </div>
    </footer>
  );
}
