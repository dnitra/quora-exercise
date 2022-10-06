import { useState } from "react";
import { useRef } from "react";

import Likes from "./Likes";

const Answer = (props) => {
  const [answers, pushAnswers] = useState([]);

  const inputRef = useRef(null);
  const addAnswer = (answer) => {
    if (answer === "") return;
    return pushAnswers((oldArray) => [...oldArray, answer]);
  };

  const takeInput = () => {
    const value = inputRef.current.value;

    inputRef.current.value = "";
    return value;
  };

  return (
    <div className={props.className}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addAnswer(takeInput());
        }}
        action="/"
        method="get"
        className="answers__form"
      >
        <textarea
          className="answers__answer-input"
          name="answers__answer-input"
          ref={inputRef}
        ></textarea>
        <button type="sumbit">Answer</button>
      </form>
      {answers.map((answer, index) => (
        <div key={index} className="answers__answer-container">
          <span className="answers__answer-text">{answer}</span>
          <Likes />
          {(props.className==="answers first-level")? 
          <Answer className="answers second-level" />:""}
          
        </div>
      ))}
    </div>
  );
};
export default Answer;
