import "./App.css";
import { Game } from "./components/Game.jsx";
import { Popup } from "./components/Popup.jsx";
import { useState } from "react";

function App() {
  const [gameState, setGameState] = useState({
    startGame: false,
    win: false,
    lose: false,
  });

  function startHandler() {
    setGameState((prevState) => ({
      ...prevState,
      startGame: !prevState.startGame,
    }));
  }

  return (
    <>
      <Popup start={gameState.startGame} onclick={startHandler} />
      <Game win={"123"} />
    </>
  );
}

export default App;
