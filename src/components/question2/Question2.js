import React, { useEffect } from "react";
import "./question2.css";
import { useState } from "react";
import Keypad from "../Keypad";
function Question2({ incrementQuestion }) {
  const [wholeNum, setwholeNum] = useState("");
  const [numer, setNumer] = useState("");
  const [denom, setDenom] = useState("");
  const givenValue = [60, 5000]; // given number in form of array.First item in numerator and second is denominator.
  // when user types from keyboard or the keypad,color of field changes to green
  const [changeClass_middle, setChange_middle] = useState("");
  const [changeClass_numer, setChange_numer] = useState("");
  const [changeClass_denom, setChange_denom] = useState("");

  //for focus event of mixed fraction.When user focus then color of field changes
  const [focusClass_middle, setFocus_middle] = useState(false);
  const [focusClass_numer, setFocus_numer] = useState(false);
  const [focusClass_denom, setFocus_denom] = useState(false);

  // usestate for decimal part and whole part
  const [wholePortion, setWholePortion] = useState(null); // whole portion
  const [decimalPortion1, setDecimalPortion1] = useState(null); // at first decimal place
  const [decimalPortion2, setDecimalPortion2] = useState(null); // at second decimal place
  const [result, setResult] = useState("");
  function gotoques() {
    incrementQuestion();
  }
  function checkBtn(e) {
    //when button is pressed on keypad
    const value = e.currentTarget.id; // get value pressed

    if (focusClass_middle) {
      setChange_middle("change_middle"); //
      setwholeNum(value); //set middle term value
    } else if (focusClass_numer) {
      setChange_numer("change_numer");
      setNumer(value); //set numerator value
    } else if (focusClass_denom) {
      setChange_denom("change_denom");

      setDenom(value); //set denominator value
    }
  }
  useEffect(() => {
    fractiontodecimal();
  }, []); // find whole and decimal part when component first renders

  const fractiontodecimal = () => {
    const fraction = (givenValue[0] / givenValue[1]).toFixed(2);
    const integerPart = Math.floor(fraction);
    const decimalPart = (fraction - integerPart).toString().split(".")[1];

    setWholePortion(integerPart); //  value before decimal place
    setDecimalPortion1(decimalPart[0]); // value after first decimal place
    setDecimalPortion2(decimalPart[1]); // value after second decimal place
  };

  useEffect(() => {
    if (focusClass_denom || focusClass_middle || focusClass_numer) {
      if (
        wholeNum == wholePortion &&
        numer == decimalPortion1 &&
        denom == decimalPortion2
      ) {
        setResult("true");
      } else if (
        (wholeNum != wholePortion &&
          ((numer != decimalPortion1 && numer != "") ||
            (denom != decimalPortion2 && denom != ""))) ||
        wholeNum !== ""
        //
      ) {
        setResult("false");
      } else {
        setResult("");
      }
    }
  }, [wholeNum, numer, denom]);

  return (
    <div className="container">
      <div className="question">
        <div className="content">
          <div className="ques-content">
            <h4 className="app_ques ">convert decimal to fraction</h4>
            <div className="box">
              <div className="expression-content">
                <div className="expression">
                  <div style={{ width: "max-content" }}>
                    <p
                      className="mb-0"
                      style={{ borderBottom: "1px solid black" }}
                    >
                      {givenValue[0]}
                    </p>
                    <p className="mb-0">{givenValue[1]}</p>
                  </div>
                  <span className="sign">=</span>

                  <div className="decimalFraction">
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
                    <span className="decimal"></span>
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

            <div className="result">{result}</div>
            <div className="btn">
              <button className="next" onClick={gotoques}>
                {" "}
                next
              </button>
            </div>
          </div>
          <div className="keypad">
            <Keypad checkBtn={checkBtn} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question2;
