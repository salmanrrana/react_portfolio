import "./App.css";
import React from "react";
import { Router, Route } from "react-router-dom";

import Header from "./Header";
import HomeScreen from "./screens/HomeScreen";
import ProjectsScreen from "./screens/ProjectsScreen";
import ContactScreen from "./screens/ContactScreen";
import ResumeScreen from "./screens/ResumeScreen";
import ModalScreen from "./screens/ModalScreen";
import history from "../history";

const App = () => {
  return (
    <div className="app-background">
      <Router basename="/" history={history}>
        <React.Fragment>
          <Header />
          <div className="scroll">
            <Route path="/" exact component={HomeScreen} />
            <Route path="/projects" exact component={ProjectsScreen} />
            <Route path="/resume" exact component={ResumeScreen} />
            <Route path="/contact" exact component={ContactScreen} />
            <Route
              path="/projectdescription/:id"
              exact
              component={ModalScreen}
            />
          </div>
        </React.Fragment>
      </Router>
    </div>
  );
};

export default App;
