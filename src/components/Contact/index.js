import "./Contact.css";
import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <div className="contactLinks">
        <a
          href="https://github.com/salmanrrana"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://i.imgur.com/hKg9vht.png"
            alt="github profile link"
            className="img"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/salmanrrana/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://i.imgur.com/UCHoS5w.png"
            alt="linkedin profile link"
            className="img"
          />
        </a>
      </div>
    );
  }
}

export default Contact;
