import "./Project.css";
import React from "react";
import { Link } from "react-router-dom";
import Spinner from "../Spinner";

class Project extends React.Component {
  state = {
    isLoading: true
  };

  handleOnLoad = () => {
    this.setState({
      isLoading: false
    });
  };

  render() {
    const project = this.props.projectData;
    const { isLoading } = this.state;
    let shouldDisplayImage = isLoading ? "block" : null;

    return (
      <div className="card">
        <Link
          to={{
            pathname: `/projectdescription/${project.id}`,
            state: {
              project: project
            }
          }}
        >
          {isLoading && <Spinner />}
          <img
            className="projectPic"
            src={project.image}
            alt="project"
            onLoad={this.handleOnLoad}
            style={{ display: shouldDisplayImage }}
          />

          <div className="description">
            <h3>{project.name}</h3>
          </div>
        </Link>
      </div>
    );
  }
}

export default Project;
