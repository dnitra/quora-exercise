import { useRef, useState } from "react";
import Quora from "./Quora";

const Ask_question = () => {
  const [questions, pushQuestion] = useState([]);
  const inputRef = useRef(null);

  const addQuestion = (question) => {
    pushQuestion([...questions, question]);
  };

  const handleInput = (e) => {
    const value = inputRef.current.value;
    inputRef.current.value = "";
    return value;
  };

  return (
    <main>
      <form
        className="ask-question"
        action="/"
        method="get"
        onSubmit={(e) => {
          e.preventDefault();
          addQuestion(handleInput());
        }}
      >
        <textarea
          name="ask_question"
          id="ask_question"
          ref={inputRef}
        ></textarea>
        <button type="submit">Ask a question</button>
      </form>
      {questions.map((question) => {
        return <Quora title={question} />;
      })}
    </main>
  );
};

export default Ask_question;
