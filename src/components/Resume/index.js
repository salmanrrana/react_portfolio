import "./Resume.css";
import React from "react";
import Spinner from "../Spinner";

class Resume extends React.Component {
  state = {
    isLoading: true
  };

  handleOnLoad = () => {
    this.setState({
      isLoading: false
    });
  };

  render() {
    const { isLoading } = this.state;
    let shouldDisplayImage = isLoading ? 0 : null;

    return (
      <div className="resume">
        <a
          href="https://drive.google.com/file/d/1vaZfr37IpVp-SWz5IKRdgsOq6Uf5QKgS/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          {isLoading && <Spinner />}
          <img
            className="resumePic"
            src="https://i.imgur.com/HE3xbiY.jpg"
            alt="Salman Rana Resume"
            onLoad={this.handleOnLoad}
            style={{ opacity: shouldDisplayImage }}
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
