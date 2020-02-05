import React from "react";

import "./intro.css";

function Intro() {
  return (
    <div className="intro">
      <h1>Latest Weather at Elysium Planitia 🪐</h1>
      <p>
        InSight is taking daily weather measurements (temperature, wind,
        pressure) on the surface of Mars at Elysium Planitia, a flat, smooth
        plain near Mars's equator.{" "}
        <span style={{ color: "orange" }}>"Sol is a Mars solar day"</span>
      </p>
    </div>
  );
}

export default Intro;
