import "./Project.css";
import React from "react";
import { Link } from "react-router-dom";

class Project extends React.Component {
  renderProjects() {
    return this.props.data.map(project => {
      console.log("the project is this from Project.js: ", project);
      return (
        <div className="card" key={project.id}>
          <Link
            to={{
              pathname: `/projectdescription/${project.id}`,
              state: {
                project: project
              }
            }}
          >
            <img className="projectPic" src={project.image} alt="project" />
          </Link>
          <div className="description">
            <h3>{project.name}</h3>
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
