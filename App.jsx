import React from "react";
import clsx from "clsx";

import StartSection from "./components/StartSection";
import Quiz from "./components/Quiz";

export default function App() {
  const [isGameStarted, setIsGameStarted] = React.useState(false);

  function toggleGame() {
    setIsGameStarted((prev) => !prev);
  }
  return (
    <main className={clsx({ "quiz-active": isGameStarted })}>
      {!isGameStarted ? (
        <StartSection className="startSection" onClick={toggleGame} />
      ) : (
        <Quiz />
      )}
    </main>
  );
}
