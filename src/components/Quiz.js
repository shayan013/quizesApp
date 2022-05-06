import React, { useEffect } from "react";
import { useState } from "react";

import Question1 from "./question1/Question1";
import Question2 from "./question2/Question2";
import Question3 from "./question3/Question3";
import Question4 from "./question4/Question4";
import Question5 from "./question5/Question5";
import Screen1 from "./question5/Screen1";
import Screen2 from "./question5/Screen2";
function Quiz() {
  const [count, setCount] = useState(1);
  const [dic, setDic] = useState({}); // storing timestamp of questions
  const timestamp = Math.round(new Date().getTime() / 1000); //time in seconds

  useEffect(() => {
    setDic((prev) => ({
      ...prev,
      [`ques${count}`]: timestamp + "seconds",
    }));
  }, [count]);
  const incrementQuestion = () => {
    setCount(count + 1);
    console.log(dic);
  };

  return (
    <div className="app__quiz">
      {count == 1 && <Question1 incrementQuestion={incrementQuestion} />}
      {count == 2 && <Question2 incrementQuestion={incrementQuestion} />}
      {count == 3 && <Question3 incrementQuestion={incrementQuestion} />}

      {count == 4 && <Question4 incrementQuestion={incrementQuestion} />}

      {count == 5 && <Screen1 incrementQuestion={incrementQuestion} />}
      {count == 6 && <Screen2 incrementQuestion={incrementQuestion} />}
      {count == 7 && <Question5 incrementQuestion={incrementQuestion} />}
    </div>
  );
}

export default Quiz;
