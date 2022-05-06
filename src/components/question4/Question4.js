import React from "react";
import { useState, useEffect } from "react";
import Dragging_item from "./Dragging_item";

import "./question4.css";
import { useDrop } from "react-dnd";

function Question4() {
  let sum = 0;
  const newArray = []; // intermediate array for pushing each dragged

  const [sequence, setsequence] = useState("");
  const [expressionArray, setexpressionarray] = useState([]);
  const [sumArray, setSumArray] = useState([]); // sum of array elements
  const [NoOfSequences, setNoOfsequences] = useState(0); // counter checking no of sequences
  const [sequenceArray, setsequenceArray] = useState([]); // the final sequences array in the form of ["1/4+2/5","2/4+1/2+1/4"]

  const [box, setBox] = useState([]); // the array when all items has been dropped

  const [Arraysum, setSum] = useState(""); // the final sum of arrry elements

  const [{ isOver }, drop] = useDrop(() => ({
    // hook for dropping element
    accept: "div",
    drop: (item) => addValuesToBox(item.id), // adding each dragged item to box array
  }));

  const dragging_values = [
    // the dragging items array
    {
      id: "1",
      numer: "1",
      denom: "4",
    },
    {
      id: "2",
      numer: "2",
      denom: "4",
    },
    {
      id: "3",
      numer: "3",
      denom: "4",
    },
    {
      id: "4",
      numer: "4",
      denom: "4",
    },
    {
      id: "5",
      numer: "+",
      denom: "",
    },
  ];

  const addValuesToBox = (id) => {
    const new_dragging_values = dragging_values.filter(
      // psuhing each dragged item to box array
      (value) => id === value.id
    );
    setBox((box) => [...box, new_dragging_values[0]]); //setting box array with dragged items
  };
  function addingValues() {
    setNoOfsequences(NoOfSequences + 1);
    // when add button is pressed
    box.map((value) => {
      // mapping through box array to get each item being dragged and pushing it to newarray to find the sum
      newArray.push(
        `${value.numer}${value.denom != "" ? "/" + value.denom : value.denom}` // gettings array in the form of  ["1/4",+,2/4,=,2]
      );
    });
    setexpressionarray(newArray);
  }

  useEffect(() => {
    if (expressionArray.length != 0) {
      setsequence(expressionArray.join(" "));
      //finding sum
      let arr = expressionArray
        .filter((item, index) => index % 2 == 0)
        .map((i) => eval(i));
      for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
      }
      setSum(sum);
    }
  }, [NoOfSequences]);
  useEffect(() => {
    if (sequence != "") {
      setsequenceArray(() => [...sequenceArray, sequence]); // set sequences array
    }
  }, [sequence]);

  useEffect(() => {
    if (Arraysum > 0) {
      setSumArray(() => [...sumArray, Arraysum]);
    }
    //when ever sum changes run this function
  }, [Arraysum]);
  return (
    <div className="container">
      {" "}
      <div className="question row">
        <h4 className="app_ques col-12">
          Drag the elements below to make no more than 5 combination that equal
          to 2.Drag number off to remove them.
        </h4>

        <div className="dragging_items col-12">
          {dragging_values.map(({ id, numer, denom }, index) => {
            // mapping and rendering each term
            return (
              <div key={id}>
                <Dragging_item
                  numer={numer}
                  denom={denom}
                  index={index}
                  id={id}
                />
              </div>
            );
          })}
        </div>
        <div className="box col-12 row align-items-center">
          <div className="col-8" ref={drop}>
            <div className="flex row">
              {box.map(({ id, numer, denom }, index) => {
                return (
                  <div className="col-1 p-0 main-box">
                    <Dragging_item
                      numer={numer}
                      denom={denom}
                      index={index}
                      id={id}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="buttons col-4">
            <button
              className="clear mx-3"
              onClick={() => {
                // when clearbutton is pressed reset all states
                setBox([]);

                setSum("");
              }}
            >
              clear
            </button>
            {box.length > 2 ? ( // if dropping container have items less tah 5 ,then make add button disabled
              <button className="add" onClick={addingValues}>
                add
              </button>
            ) : (
              <button disabled className="add_disabled" onClick={addingValues}>
                add
              </button>
            )}
          </div>
        </div>

        <div className="col-12 text-right">
          {" "}
          <button disabled className="next_disabled">
            next
          </button>
        </div>
        <div className="row">
          <div className=" col-12 ">
            <h5>Sequences:{NoOfSequences}</h5>
            {sequenceArray.map((term, index) => {
              return (
                <div className="d-flex">
                  <p>{term}</p>
                  <p>=</p>
                  <p>{sumArray[index]}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question4;
