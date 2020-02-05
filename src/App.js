import React, { useState, useEffect } from "react";
import Intro from "./Introduction/intro";
import SolCardCreation from "./SolCardCreation/solCardCreation";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Intro />
      <SolCardCreation />
    </div>
  );
}

export default App;
