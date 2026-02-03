import "./TellYourStory.css";

export default function TellYourStory() {
  return (
    <section className="story-section">
      <div className="story-overlay"></div>

      <form className="story-form">
        <h2>We Tell Your Story</h2>
        <p className="story-subtitle">
          PLEASE GET IN TOUCH WITH US AND PROVIDE AS MANY DETAILS AS YOU CAN
        </p>

        <div className="form-grid">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />

          <input type="text" placeholder="Phone" />
          <input type="date" placeholder="Wedding Date" />

          <input type="text" placeholder="Wedding Destination" />
          <input type="number" placeholder="Wedding Budget" />
        </div>

        <div className="form-group">
          <label>Functions</label>
          <div className="checkbox-group">
            {[
              "Mehendi",
              "Sangeet",
              "Wedding",
              "Cocktail Party",
              "Reception",
            ].map((item) => (
              <label key={item}>
                <input type="checkbox" /> {item}
              </label>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label>Category of Hotel (if required)</label>
          <div className="checkbox-group">
            {["5 Star", "4 Star", "3 Star", "Villa"].map((item) => (
              <label key={item}>
                <input type="checkbox" /> {item}
              </label>
            ))}
          </div>
        </div>

        <textarea placeholder="Tell us about your dream day"></textarea>

        <div className="form-grid">
          <input type="number" placeholder="Number of Rooms (if required)" />
          <select>
            <option>How did you hear about us?</option>
            <option>Instagram</option>
            <option>Google</option>
            <option>Friends</option>
          </select>
        </div>

        <div className="form-group">
          <label>
            Schedule online consultation via WhatsApp / Skype / Hangout
          </label>
          <div className="radio-group">
            <label>
              <input type="radio" name="consult" /> Yes, I would prefer to talk
            </label>
            <label>
              <input type="radio" name="consult" /> No, I would stick with email
            </label>
          </div>
        </div>

        <button className="submit-button" type="submit">SUBMIT NOW</button>
      </form>
    </section>
  );
}
