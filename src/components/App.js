import "./App.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import HomeScreen from "./screens/HomeScreen";
import ProjectsScreen from "./screens/ProjectsScreen";
import ContactScreen from "./screens/ContactScreen";
import ResumeScreen from "./screens/ResumeScreen";

const App = () => {
  return (
    <div className="app-background">
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Route path="/" exact component={HomeScreen} />
          <Route path="/projects" exact component={ProjectsScreen} />
          <Route path="/resume" exact component={ResumeScreen} />
          <Route path="/contact" exact component={ContactScreen} />
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
};

export default App;
