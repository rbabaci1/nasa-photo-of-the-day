import React from "react";
import "./solCard.css";

function SolCard({ sol, solNumber }) {
  var date = new Date(sol.Last_UTC);
  date = date.toString().replace(/\d{2}:.+/g, "");

  return (
    <div className="card">
      <div className="top">
        <span>Sol {solNumber}</span>
        <p>{date}</p>
      </div>

      <div className="bottom">
        <p>
          <span>Season:</span> {sol.Season}
        </p>
        <p>
          <span>High:</span> {Math.round(sol.AT.mx)}° F
        </p>
        <p>
          <span>Low:</span> {Math.round(sol.AT.mn)}° F
        </p>
      </div>
    </div>
  );
}

export default SolCard;
