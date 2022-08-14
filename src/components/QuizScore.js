import React, { useContext } from "react";
import { QuizContext } from "../QuizContext";
import Questions from "./Questions";
import "./QuizScore.css";

const QuizScore = () => {
  const {
    score,
    setScore,
    setGameStatus,
    currentQuestion,
    setCurrentQuestion,
    rightAnswer,
    setRightAnswer,
  } = useContext(QuizContext);

  return (
    <div className="score-record">
      {score >= 6 ? (
        <h3>
          Congratulations....you scored {score}/{Questions.length}
        </h3>
      ) : (
        <h3>
          You scored {score}/{Questions.length}....better luck next time
        </h3>
      )}

      <button
        onClick={() => {
          setGameStatus("menu");
          setCurrentQuestion(0);
          setScore(0);
        }}
      >
        Retry
      </button>
      {/* <button
      // onClick={() => {
      //   setGameStatus("quiz");
      //   setCurrentQuestion(0);
      //   if (Questions[currentQuestion].answer) {
      //     setRightAnswer("red");
      //   }
      // }}
      >
        Check Answers
      </button> */}
    </div>
  );
};

export default QuizScore;
