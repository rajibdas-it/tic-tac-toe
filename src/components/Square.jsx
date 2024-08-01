/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const Squares = ({ value, onSquareClick }) => {
  return (
    <button
      className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg font-bold"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

export default Squares;
