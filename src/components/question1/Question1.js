import React, { useContext } from "react";
import "./question1.css";
import { useState, useEffect } from "react";

import Slider from "@mui/material/Slider";
function Question1({ incrementQuestion }) {
  const [sliderValue, setSliderValue] = useState(null);
  const [min, setmin] = useState(); // for mnimum value
  const [max, setmax] = useState(); // for maximum value
  const [result, setResult] = useState(null);
  const given = 500 / 1000;

  function gotoques() {
    incrementQuestion();
  }
  const findingmax = () => {
    //max value
    const ans = given + given * 0.05;
    setmax(ans);
  };
  const findingmin = () => {
    // min value
    const ans = given - given * 0.05;
    setmin(ans);
  };
  const getvalue = (event, newvalue) => {
    setSliderValue(newvalue);
  };
  const clearResult = () => {
    setResult("");
  };
  useEffect(() => {
    findingmax();
    findingmin();
    if (sliderValue == null) {
      // initially when slider is not moved
      setResult("");
    } else if (sliderValue > min && sliderValue < max) {
      setResult("correct");
    } else {
      setResult("incorrect");
    }
  }, [sliderValue]);

  return (
    <div>
      <div className="container">
        <div className="question row">
          <h4 className="app_ques col-12">
            click on number line from 0 to 1 where you think result of fraction
            lies
          </h4>
          <div className=" slider col-8 mx-3 ">
            <h6 className="given text-center my-0">{given}</h6>
            <Slider
              size="small"
              aria-label="Small"
              min={0}
              onChange={clearResult}
              max={1}
              onChangeCommitted={getvalue}
              step={0.001}
            />
            <span className="starting">0</span>

            <span className="end">1</span>
          </div>
          <div className="text-center">{sliderValue}</div>
          <div className="btn col-12 d-flex justify-content-between">
            <span className="result">{result}</span>
            <button className="next" onClick={gotoques}>
              {" "}
              next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question1;
