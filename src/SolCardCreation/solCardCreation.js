import React, { useState, useEffect } from "react";
// import LastSol from "../LastSol/lastSol";
import SolCard from "../SolCard/solCard";
import axios from "axios";
import "./solCards.css";

function SolCardCreation() {
  const [weatherData, setWeatherData] = useState({});
  const [dataSolKeys, setDataSolKeys] = useState([]);

  const [firsSol, setFirsSol] = useState("");

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
        setFirsSol(keys[0]);

        console.log(data);
      })
      .catch(error => console.error(error));
  }

  useEffect(effectFunction, []);

  return (
    <div className="weather-cards">
      {dataSolKeys.map(key => {
        return <SolCard key={key} sol={weatherData[key]} solNumber={key} />;
      })}
    </div>
  );
}

export default SolCardCreation;
