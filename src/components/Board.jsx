/* eslint-disable no-unused-vars */
import { useState } from "react";
import Squares from "./Square";
import calculateWinner from "../utils/calculateWinner";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(true);
  const winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next Player ${isNext ? "X" : "O"}`;
  }

  const handleClick = (i) => {
    if (squares[i] || winner) {
      return;
    }
    const nextSquares = squares.slice();
    if (isNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    setSquares(nextSquares);
    setIsNext(!isNext);
  };

  return (
    <div>
      <div>{status}</div>
      <div className="flex">
        <Squares value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Squares value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Squares value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="flex">
        <Squares value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Squares value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Squares value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>

      <div className="flex">
        <Squares value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Squares value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Squares value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
};

export default Board;
