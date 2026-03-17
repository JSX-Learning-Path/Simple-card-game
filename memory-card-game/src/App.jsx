import React from "react";
import GameHeader from "./components/GameHeader";
import cardEmoji from "./data/cardEmoji";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="min-h-screen bg-black/90 relative flex flex-col items-center justify-start py-10">
      <GameHeader score={3} moves={5} />
      <div className="grid grid-cols-4 gap-4 w-fit gap-5 mt-10">
        {cardEmoji.map((emoji) => (
          <Card card={emoji} />
        ))}
      </div>
    </div>
  );
};

export default App;
