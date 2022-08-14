import React, { useState, useContext } from "react";
import { QuizContext } from "../QuizContext";
import "./Quiz.css";
import Questions from "./Questions";

const Quiz = () => {
  const [optionChosen, setOptionChosen] = useState("");

  //   const [timer, setTimer] = useState(second);
  const {
    setGameStatus,
    score,
    setScore,
    currentQuestion,
    setCurrentQuestion,
    rightAnswer,
  } = useContext(QuizContext);
  return (
    <div className="wrapper">
      <div className="score">
        <h3>
          {score}/{Questions.length}
        </h3>
      </div>

      <div className="question-section">
        <h2>{Questions[currentQuestion].prompt}</h2>
      </div>
      <div className="answer-section">
        <button
          style={{ backgroundColor: rightAnswer }}
          onClick={() => setOptionChosen("A")}
        >
          {Questions[currentQuestion].optionA}
        </button>
        <button
          style={{ backgroundColor: rightAnswer }}
          onClick={() => setOptionChosen("B")}
        >
          {Questions[currentQuestion].optionB}
        </button>
        <button
          style={{ backgroundColor: rightAnswer }}
          onClick={() => setOptionChosen("C")}
        >
          {Questions[currentQuestion].optionC}
        </button>
      </div>
      <div className="directions">
        {currentQuestion === Questions.length - 1 ? (
          <button
            onClick={() => {
              if (optionChosen === Questions[currentQuestion].answer) {
                setScore(score + 1);
              }
              setGameStatus("score");
            }}
          >
            Finish
          </button>
        ) : (
          <div className="next-prev-btn">
            <button
              onClick={() => {
                if (score >= 1) {
                  setCurrentQuestion(currentQuestion - 1);
                  setScore(() => {
                    setScore(score - 1);
                  });
                }
              }}
            >
              Previous
            </button>
            <button
              onClick={() => {
                if (optionChosen === Questions[currentQuestion].answer) {
                  setCurrentQuestion(currentQuestion + 1);
                  setScore(score + 1);
                } else {
                  setCurrentQuestion(currentQuestion + 1);
                }
              }}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
