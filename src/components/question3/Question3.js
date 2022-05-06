import React from "react";
import "./question3.css";
import { useState, useEffect } from "react";

import Keypad from "../Keypad";
function Question3({ incrementQuestion }) {
  const [wholeNum, setwholeNum] = useState("");
  const [numer, setNumer] = useState("");
  const [denom, setDenom] = useState("");
  // // given number in form of array.First item in numerator and second is denominator
  const firstValueGiven = [1, 2];
  const secondValueGiven = [1, 4];
  // when user types from keyboard or the keypad,color of field changes to green
  const [changeClass_middle, setChange_middle] = useState("");
  const [changeClass_numer, setChange_numer] = useState("");
  const [changeClass_denom, setChange_denom] = useState("");

  //for focus event of mixed fraction.When user focus then color of field changes
  const [focusClass_middle, setFocus_middle] = useState(false);
  const [focusClass_numer, setFocus_numer] = useState(false);
  const [focusClass_denom, setFocus_denom] = useState(false);
  const [result, setResult] = useState("");

  const [wholePortion, setWholePortion] = useState(null); // whole portion
  const [numerator, setNumerator] = useState(null); // at first decimal place
  const [denominator, setDenominator] = useState(null); // at second decimal place
  function gotoques() {
    incrementQuestion();
  }

  function checkBtn(e) {
    //when button is pressed on keypad
    const value = e.currentTarget.id; // get value pressed

    if (focusClass_middle) {
      setChange_middle("change_middle"); //
      setwholeNum(value); //set middle term value
      console.log("in ths loop");
    } else if (focusClass_numer) {
      setChange_numer("change_numer");
      setNumer(value); //set numerator value
    } else if (focusClass_denom) {
      setChange_denom("change_denom");

      setDenom(value); //set denominator value
    }
  }
  useEffect(() => {
    fractiontomixed();
  }, []);
  const fractiontomixed = () => {
    let fraction =
      firstValueGiven[0] / firstValueGiven[1] +
      secondValueGiven[0] / secondValueGiven[1];
    var len = fraction.toString().length - 2;
    var wholePortion = Math.floor(fraction);
    var denominator = Math.pow(10, len);
    var numerator = fraction * denominator;
    var gcd = function (a, b) {
      if (b < 0.0000001) return a; // Since there is a limited precision we need to limit the value.

      return gcd(b, Math.floor(a % b)); // Discard any fractions due to limitations in precision.
    };

    var divisor = gcd(numerator, denominator);
    numerator /= divisor; // Should be 687
    denominator /= divisor;
    setNumerator(numerator); //set numeratorn value caluculated
    setDenominator(denominator); // setdenom value caluculated
    setWholePortion(wholePortion); // set whole value caluculated
  };
  useEffect(() => {
    if (focusClass_denom || focusClass_middle || focusClass_numer) {
      // if input fields are focusses only the go further
      if (
        wholeNum == wholePortion &&
        numer == numerator &&
        denom == denominator
      ) {
        setResult("true");
      } else if (
        (wholeNum == wholePortion &&
          ((numer != numerator && numer != "") ||
            (denom != denominator && denom != ""))) || // al condition to check if numerator and denom are correct
        wholeNum != ""
      ) {
        setResult("false");
      } else {
        setResult("");
      }
    }
  }, [wholeNum, numer, denom]);

  return (
    <div className="container">
      <div className="question row">
        <div className="col-8">
          <h4 className="app_ques col-12">convert decimal to fraction</h4>
          <div className="box col-12">
            <div className="content">
              <div className="expression">
                <div className="d-flex align-items-center">
                  <div className="firstTerm mx-2">
                    <p
                      className="mb-0"
                      style={{ borderBottom: "1px solid black" }}
                    >
                      {firstValueGiven[0]}
                    </p>
                    <p className="mb-0">{firstValueGiven[1]}</p>
                  </div>
                  <div className="operator">+</div>
                  <div className="secondTerm mx-2">
                    <p
                      className="mb-0"
                      style={{ borderBottom: "1px solid black" }}
                    >
                      {secondValueGiven[0]}
                    </p>
                    <p className="mb-0">{secondValueGiven[1]}</p>
                  </div>
                </div>
                <span className="sign">=</span>

                <div className="mixed_exprression">
                  <input
                    className={`one ${focusClass_middle ? "focus" : ""}  ${
                      //setting classnames depending on focus and if value is entered or not
                      wholeNum != "" ? changeClass_middle : ""
                    }`}
                    type="text"
                    value={wholeNum}
                    onFocus={(e) => {
                      setFocus_middle(true); // change classname to focus to make border of field orange
                      setFocus_numer(false);
                      setFocus_denom(false);
                    }}
                    onChange={(e) => {
                      setChange_middle("change_middle");
                      setwholeNum(e.target.value);
                    }}
                  />
                  <input
                    className={`two ${focusClass_numer ? "focus" : ""} ${
                      numer != "" ? changeClass_numer : ""
                    }`}
                    type="text"
                    value={numer}
                    onFocus={(e) => {
                      setFocus_numer(true);
                      setFocus_middle(false);
                      setFocus_denom(false);
                    }}
                    onChange={(e) => {
                      //when button on keyboard is pressed

                      setChange_numer("change_numer");
                      setNumer(e.target.value); // gettings value from keyboard and setting it to nummerator
                    }}
                  />
                  <input
                    className={`three ${focusClass_denom ? "focus" : ""} ${
                      denom != "" ? changeClass_denom : ""
                    }`}
                    type="text"
                    value={denom}
                    onFocus={(e) => {
                      setFocus_denom(true);
                      setFocus_numer(false);
                      setFocus_middle(false);
                    }}
                    onChange={(e) => {
                      setChange_denom("change_denom");
                      setDenom(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">{result}</div> {/*showing result*/}
          <div className="btn col-12 text-right">
            <button className="next" onClick={gotoques}>
              next
            </button>
          </div>
        </div>
        <div className="col-4 keypad">
          <Keypad checkBtn={checkBtn} />
        </div>
      </div>
    </div>
  );
}

export default Question3;
