import React, { useState, useEffect } from "react";
import axios from "axios";
import Intro from "./Introduction/intro";

import "./App.css";

function App() {
  // axios
  //   .get(
  //     "https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0"
  //   )
  //   .then(response => console.log(response.data))
  //   .catch(error => console.error(error));

  return (
    <div className="App">
      <Intro />
    </div>
  );
}

export default App;
