import Question from "./Question";
import { nanoid } from "nanoid";
import React from "react";
import he from "he";

// винесли фунцію бо вона не стосується компонента
function sortAnswers(incorrect, correct) {
  const arr = [...incorrect, correct]
    .sort(() => Math.random() - 0.5)
    .map((value) => ({
      id: nanoid(),
      answer: value,
      selected: false,
    }));
  return arr;
}

export default function Quiz() {
  const [apiData, setApiData] = React.useState([]);

  //стейт шоб керувати відображенням в кінці після субміту
  const [isChecked, setIsChecked] = React.useState(false);

  const [count, setCount] = React.useState(0);

  React.useEffect(
    function () {
      fetch(import.meta.env.VITE_API_URL)
        .then((res) => res.json())
        .then((data) =>
          data.results.map((obj) => ({
            ...obj,
            question: he.decode(obj.question),
            correct_answer: he.decode(obj.correct_answer),
            incorrect_answers: obj.incorrect_answers.map((answ) =>
              he.decode(answ),
            ),
          })),
        )
        .then((decodedData) =>
          decodedData.map((obj) => ({
            id: nanoid(),
            question: obj.question,
            answers: sortAnswers(obj.incorrect_answers, obj.correct_answer),
            correct_answer: obj.correct_answer,
          })),
        )
        .then((data) => setApiData(data))
        .then(() => setIsChecked(false));
    },
    [count],
  );

  function toggleSelected(questionID, answerID) {
    setApiData((prev) =>
      prev.map((question) =>
        question.id === questionID
          ? {
              ...question,
              answers: question.answers.map((answer) =>
                answer.id === answerID
                  ? { ...answer, selected: !answer.selected }
                  : { ...answer, selected: false },
              ),
            }
          : question,
      ),
    );
  }

  function submitAnswers() {
    setIsChecked((prev) => !prev);
  }

  console.log(apiData);

  const questionsEls = apiData.map((obj, i) => (
    <Question
      key={i}
      data={obj}
      answerToggleFunc={toggleSelected}
      checked={isChecked}
    />
  ));

  function countCorrAnswers() {
    const corrAnswers = apiData.filter(
      (question) =>
        question.correct_answer ===
        question.answers.find((answer) => answer.selected)?.answer,
    );
    return corrAnswers.length;
  }

  function reloadApp() {
    setCount((prev) => prev + 1);
  }
  return (
    <section data={apiData} className="quiz">
      {questionsEls}
      {isChecked && (
        <p className="correct-answers">{`You scored ${countCorrAnswers()} correct answers`}</p>
      )}
      <button className="check" onClick={isChecked ? reloadApp : submitAnswers}>
        {isChecked ? "Play Again" : "Check Answers"}
      </button>
    </section>
  );
}
