import clsx from "clsx";

export default function Question(props) {
  if (props === undefined) return "";

  const answesEls = props.data.answers.map((answer, i) => (
    <button
      key={i}
      id={answer.id}
      className={clsx({
        selected: answer.selected && !props.checked,
        "not-selected":
          props.checked &&
          !answer.selected &&
          answer.answer !== props.data.correct_answer,
        correct:
          props.checked && props.data.correct_answer === String(answer.answer),
        false:
          props.checked &&
          answer.selected &&
          answer.answer !== props.data.correct_answer,
      })}
      onClick={() => props.answerToggleFunc(props.data.id, answer.id)}
    >
      {answer.answer}
    </button>
  ));

  return (
    <div className="question-container">
      <h2>{props.data.question}</h2>
      <div className="answers">{answesEls}</div>
      <hr />
    </div>
  );
}
