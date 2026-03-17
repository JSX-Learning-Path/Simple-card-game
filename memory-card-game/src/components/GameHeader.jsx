function GameHeader({ score, moves }) {
  return (
    <div className="relative bg-gray-700 p-4 flex flex-col items-center mx-auto rounded-lg mb-4 w-fit px-10">
      <h1 className="text-white text-3xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        Memory Card Game
      </h1>
      <div className="grid grid-cols-2 gap-5 mt-4 text-white ">
        <div className="text-green-500 text-lg">Score:{score}</div>
        <div className="text-red-500 text-lg">Moves:{moves}</div>
      </div>
    </div>
  );
}

export default GameHeader;
