import Board from "./Board";
import History from "./History";

const Game = () => {
  return (
    <div className="flex gap-10">
      <Board />
      <History />
    </div>
  );
};

export default Game;
