import React from "react";
import "./question5";
const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
function Question5({ incrementQuestion }) {
  function gotoques() {
    incrementQuestion();
  }
  return (
    <div className="container">
      <div className="question">
        <div className="grid">
          {" "}
          {letters.map((letter) => {
            return <p>{letter}</p>;
          })}
        </div>
        <div className="btn">
          <button className="next" onClick={gotoques}>
            next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Question5;
