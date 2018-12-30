import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

const styles = {
  backgroundImage: 'url("../assets/img/flowers.jpg")'
};

ReactDOM.render(<App style={styles} />, document.querySelector("#root"));
