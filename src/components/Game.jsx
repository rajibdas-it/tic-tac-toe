/* eslint-disable react/jsx-key */
import { useState } from "react";
import Board from "./Board";
import History from "./History";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [isNext, setIsNext] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);

  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares) => {
    setIsNext(!isNext);
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (move) => {
    setCurrentMove(move);
    setIsNext(move % 2 === 0);
  };

  const moves = history.map((squares, move) => {
    let descriptions;
    if (move > 0) {
      descriptions = `Go To The move # ${move}`;
    } else {
      descriptions = `Go & Start the game`;
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{descriptions}</button>
      </li>
    );
  });

  return (
    <div className="flex gap-10">
      <div>
        <Board isNext={isNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div>
        <History moves={moves} />
      </div>
    </div>
  );
};

export default Game;
