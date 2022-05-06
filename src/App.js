import { useState } from "react";
import Quiz from "./components/Quiz";
import "./app.css";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
function App() {
  // for result of question 1

  return (
    <DndProvider className="container" backend={HTML5Backend}>
      <Quiz />
    </DndProvider>
  );
}

export default App;
