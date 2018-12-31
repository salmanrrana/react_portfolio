import "./Project.css";
import React from "react";

class Project extends React.Component {
  renderProjects() {
    return this.props.data.map(project => {
      return (
        <div className="card" key={project.id}>
          <img className="projectPic" src={project.image} alt="project" />
          <div>
            <h3>{project.name}</h3>
            <div className="description">
              <p>{project.description}</p>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="list">{this.renderProjects()}</div>;
  }
}

export default Project;
