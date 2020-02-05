import React from "react";
import "./currentSol.css";

function CurrentSol({ sol, solNumber }) {
  console.log(sol);
  return (
    <div className="current-sol">
      <div className="left-side">
        <span>Sol {solNumber}</span>
        <p>{sol.Last_UTC}</p>
      </div>
      <div className="right-side">
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
