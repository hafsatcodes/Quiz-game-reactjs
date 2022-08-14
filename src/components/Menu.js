import React, { useContext } from "react";
import { QuizContext } from "../QuizContext";
import "./Menu.css";

const Menu = () => {
  const { gameStatus, setGameStatus } = useContext(QuizContext);
  return (
    <div className="menu">
      <div className="button-wrapper">
        {/* <div className="title">
          <h1> Quiz Game</h1>
        </div> */}
        <button onClick={() => setGameStatus("quiz")} className="play-button">
          Play Quiz
        </button>
      </div>
    </div>
  );
};

export default Menu;
