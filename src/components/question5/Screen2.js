import React, { useEffect } from "react";
import "./screen.css";

function Screen2({ incrementQuestion }) {
  function gotoques() {
    incrementQuestion();
  }
  return (
    <div className="container">
      <div className="screen">
        <p>G</p>
      </div>
      <div className="btn">
        <button className="next" onClick={gotoques}>
          next
        </button>
      </div>
    </div>
  );
}

export default Screen2;
