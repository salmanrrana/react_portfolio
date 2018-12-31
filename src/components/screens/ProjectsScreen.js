import "./ProjectsList.css";
import React from "react";
import Projects from "../Projects";

class ProjectsScreen extends React.Component {
  render() {
    return (
      <div className="list">
        <Projects />
      </div>
    );
  }
}

export default ProjectsScreen;
