import "./Resume.css";
import React from "react";

class Resume extends React.Component {
  render() {
    return (
      <div className="resume">
        <a
          href="https://drive.google.com/file/d/1vaZfr37IpVp-SWz5IKRdgsOq6Uf5QKgS/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="resumePic"
            src="https://i.imgur.com/HE3xbiY.jpg"
            alt="Salman Rana Resume"
          />
        </a>
        <a
          className="resumeLink"
          href="https://drive.google.com/file/d/1vaZfr37IpVp-SWz5IKRdgsOq6Uf5QKgS/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          CLICK FOR PDF
        </a>
      </div>
    );
  }
}

export default Resume;
