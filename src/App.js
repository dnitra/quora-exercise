import "./App.scss";
import React, { useState } from "react";
import Quora from "./components/Quora";
import Answer from "./components/Answer";
import Ask_question from "./components/Ask_question";

const myclassName = "App";

function App() {
  const [isShown, setIsShown] = useState(false);
  return (
    <>
      <h1 className="quora">QUORA </h1>
      <Ask_question />
  </>
  );
}

export default App;
