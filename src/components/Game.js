import React, { useState, useEffect } from "react";
import Board from "./Board";
import History from "./History";

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [history, setHistory] = useState([]);
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [step, setStep] = useState(0);

  // Declaring a Winner

  //function to check if a player has won.
  //If a player has won, we can display text such as “Winner: X” or “Winner: O”.
  //Input: squares: given an array of 9 squares:'X', 'O', or null.
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  //Handle player
  const handleClick = (i) => {
    if (squares[i] || winner) {
      return;
    }
    const newBoard = [...squares];
    newBoard[i] = xIsNext ? "X" : "O";
    setSquares(newBoard);
    setXIsNext(!xIsNext);
    setStep(step + 1);
  };

  //Restart game
  const handleRestart = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
    setHistory([]);
    setStep(0);
  };

  useEffect(() => {
    setHistory(history.concat([squares]));
    const result = calculateWinner(squares);
    if (result) {
      setWinner(result);
    }
  }, [squares]);

  const handleStep = (index) => {
    setStep(index);
    setXIsNext(index % 2 === 0);
  };

  return (
    <div className="main">
      <h2 className="result">Winner is: {winner ? winner : "N/N"}</h2>
      <div className="game">
        <span className="player">Next player is: {xIsNext ? "X" : "O"}</span>
        <Board squares={history[step] || squares} handleClick={handleClick} />
      </div>
      <button onClick={handleRestart} className="restart-btn">
        Restart
      </button>
      <History history={history} handleStep={handleStep} />
    </div>
  );
}

export default Game;
