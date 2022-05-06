import React, { useEffect } from "react";
import "./screen.css";
import { useState } from "react";
function Screen1({ incrementQuestion }) {
  function gotoques() {
    incrementQuestion();
  }
  return (
    <div className="container">
      <div className="screen">
        <p>F</p>
      </div>
      <div className="btn">
        <button className="next" onClick={gotoques}>
          next
        </button>
      </div>
    </div>
  );
}

export default Screen1;
