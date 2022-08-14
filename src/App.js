import React, { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import Quiz from "./components/Quiz";
import QuizScore from "./components/QuizScore";
import { QuizContext } from "./QuizContext";

const App = () => {
  const [gameStatus, setGameStatus] = useState("menu");
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [rightAnswer, setRightAnswer] = useState("");
  return (
    <div className="App">
      <div className="wrapper">
        <QuizContext.Provider
          value={{
            gameStatus,
            setGameStatus,
            score,
            setScore,
            currentQuestion,
            setCurrentQuestion,
            rightAnswer,
            setRightAnswer,
          }}
        >
          {gameStatus === "menu" && <Menu />}
          {gameStatus === "quiz" && <Quiz />}
          {gameStatus === "score" && <QuizScore />}
        </QuizContext.Provider>
      </div>
    </div>
  );
};

export default App;
