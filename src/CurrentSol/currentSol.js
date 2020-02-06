import React from "react";
import "./currentSol.css";

function CurrentSol({ sol, solNumber }) {
  var date = new Date(sol.Last_UTC);
  date = date.toString().replace(/\d{2}:.+/g, "");

  return (
    <div className="current-sol">
      <div className="left-side">
        <span>Sol {solNumber}</span>
        <p>{date.toString()}</p>
      </div>

      <div className="right-side">
        <p>
          <span>Season:</span> {sol.Season}
        </p>
        <p>
          <span>High:</span> {Math.round(sol.AT.mx)}° F | C
        </p>
        <p>
          <span>Low:</span> {Math.round(sol.AT.mn)}° F | C
        </p>
      </div>
    </div>
  );
}

export default CurrentSol;
