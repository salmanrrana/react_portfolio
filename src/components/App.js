import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import Home from "./screens/Home";
import Projects from "./screens/Projects";
import Contact from "./screens/Contact";
import Resume from "./screens/Resume";

const App = () => {
  return (
    <div className=" ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/resume" exact component={Resume} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
