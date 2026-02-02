import "./ContactSection.css";
import phoneIcon from "../../assets/images/phone-call.png";
import EmailIcon from "../../assets/images/communication.png";
import AddressIcon from "../../assets/images/home-address.png";
import WebsiteIcon from "../../assets/images/web-link.png";
import LocationIcon from "../../assets/images/location.png";

const locations = [
  "BANGALORE",
  "MANGALORE",
  "HYDERABAD",
  "ANANTHAPUR",
  "KURNOOL",
  "TIRUPATI",
];

const ContactSection = () => {
  return (
    <section className="contact-section">
        <div className="our-location">Our Locations</div>
      <div className="locations">
        {locations.map((city) => (
          <div key={city} className="location">
            <span className="pin">
              <img src={LocationIcon} alt="Location Icon" />
            </span>
            {city}
          </div>
        ))}
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-item">
            <span className="icon">
              <img src={phoneIcon} alt="Phone Icon" />
            </span>
            <div>
              <h4>Phone</h4>
              <p>+91 9849175588</p>
            </div>
          </div>

          <div className="info-item">
            <span className="icon">
              <img src={EmailIcon} alt="Email Icon" />
            </span>
            <div>
              <h4>Email</h4>
              <p>veduka@gmail.com</p>
            </div>
          </div>

          <div className="info-item">
            <span className="icon">
              <img src={AddressIcon} alt="Address Icon" />
            </span>
            <div>
              <h4>Address</h4>
              <p>
                #131, 80 Feet Rd, opp. to Canara Bank,
                <br />
                Ashwath Nagar, Sanjayanagara, Bengaluru, Karnataka - 560094
              </p>
            </div>
          </div>

          <div className="info-item">
            <span className="icon">
              <img src={WebsiteIcon} alt="Website Icon" />
            </span>
            <div>
              <h4>Website</h4>
              <p>veduka.vercel.app</p>
            </div>
          </div>
        </div>

        <div className="map-box">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1377830120223!2d77.57684667373283!3d13.026896613666214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17c69f8039db%3A0x29881944fc0948bc!2sASAR%20IT%20TECHNOLOGIES%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1770050986962!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
