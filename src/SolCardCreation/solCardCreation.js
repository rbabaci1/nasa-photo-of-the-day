import React, { useState, useEffect } from "react";
import SolCard from "../SolCard/solCard";
import CurrentSol from "../CurrentSol/currentSol";

import axios from "axios";
import "./solCards.css";

function SolCardCreation() {
  const [weatherData, setWeatherData] = useState({});
  const [dataSolKeys, setDataSolKeys] = useState([]);

  const [lastSol, setLastSol] = useState("");
  const [firstSol, setFirstSol] = useState("");

  function effectFunction() {
    axios
      .get(
        "https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0"
      )
      .then(response => {
        const data = response.data;
        const keys = response.data.sol_keys;

        setWeatherData(data);
        setDataSolKeys(keys);

        setLastSol(keys[keys.length - 1]);
        setFirstSol(keys[0]);
      })
      .catch(error => console.error(error));
  }

  useEffect(effectFunction, [firstSol]);

  return (
    <div>
      {lastSol ? (
        <CurrentSol sol={weatherData[lastSol]} solNumber={lastSol} />
      ) : null}

      <div className="weather-cards">
        {dataSolKeys.map(key => {
          return <SolCard key={key} sol={weatherData[key]} solNumber={key} />;
        })}
      </div>
    </div>
  );
}

export default SolCardCreation;
