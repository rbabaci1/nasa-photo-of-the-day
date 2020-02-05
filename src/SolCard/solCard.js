import React from "react";
import "./solCard.css";

function SolCard({ sol, solNumber }) {
  return (
    <div className="card">
      <div className="top">
        <span>Sol {solNumber}</span>
        <p>{sol.Last_UTC}</p>
      </div>

      <div className="bottom">
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
