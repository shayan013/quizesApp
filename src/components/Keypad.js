import React from "react";

function Keypad({ checkBtn }) {
  return (
    <div className="keypad_grid">
      <button onClick={checkBtn} id="7">
        7
      </button>
      <button onClick={checkBtn} id="8">
        8
      </button>
      <button onClick={checkBtn} id="9">
        9
      </button>
      <button onClick={checkBtn} id="4">
        4
      </button>
      <button onClick={checkBtn} id="5">
        5
      </button>
      <button onClick={checkBtn} id="6">
        6
      </button>
      <button onClick={checkBtn} id="1">
        1
      </button>
      <button onClick={checkBtn} id="2">
        2
      </button>
      <button onClick={checkBtn} id="3">
        3
      </button>
      <button id=""></button>
      <button onClick={checkBtn} id="0">
        0
      </button>
      <button></button>
    </div>
  );
}

export default Keypad;
