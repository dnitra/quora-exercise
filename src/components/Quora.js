import Answer from "./Answer";
import Likes from "./Likes";

const Quora = (props) => {
  const user = "David";

  return (
    <>
      <div className="question">
        <h3 className="question__title">{props.title}</h3>
        <p className="question__text">{props.text}</p>
        <Likes />
        <Answer className="answers first-level"/>
      </div>
    </>
  );
};

export default Quora;
