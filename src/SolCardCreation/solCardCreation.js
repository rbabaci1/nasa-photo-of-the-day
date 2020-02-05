import React, { useState, useEffect } from "react";
import LastSol from "../LastSol/lastSol";

import axios from "axios";

function SolCardCreation() {
  const [weatherData, setWeatherData] = useState([]);

  function effectFunction() {
    axios
      .get(
        "https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0"
      )
      .then(response => setWeatherData(response.data))
      .catch(error => console.error(error));
  }

  useEffect(() => {}, []);

  return null;
}

export default SolCardCreation;
