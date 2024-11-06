import "./App.css";
import { Game } from "./components/Game.jsx";
import { Popup } from "./components/Popup.jsx";
import { useEffect, useState } from "react";
import { getPokemon } from "./api/apiCalls.jsx";
import { shuffle } from "./helper/funcs.js";

const CARDAMT = 2;

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [pickedCards, setPickedCards] = useState([]);
  const [gameState, setGameState] = useState({
    startGame: false,
    win: false,
    lose: false,
  });

  useEffect(() => {
    async function fetchPokemon() {
      const rand = Math.floor(Math.random() * 200);
      const pokemonPromise = [];
      for (let i = rand; i < rand + CARDAMT; i++) {
        pokemonPromise.push(getPokemon(i.toString()));
      }
      const data = await Promise.all(pokemonPromise);
      setPokemon(data);
    }
    if (pickedCards.length === 0) {
      fetchPokemon().catch((err) => console.log(err));
    }

    if (pickedCards.length === CARDAMT) {
      setGameState((prev) => ({ ...prev, win: true }));
    }
  }, [pickedCards.length]);

  function shuffleHandler() {
    setPokemon((prevPokemon) => shuffle(prevPokemon));
  }
  function pickedHandler(e) {
    setPickedCards((prevPickedCards) => {
      // if (pickedCards.length === CARDAMT) {
      //   setGameState((prev) => ({ ...prev, win: true }));
      //   return prevPickedCards;
      // }
      if (pickedCards.includes(e)) {
        // setLost(true);
        setGameState((prev) => ({ ...prev, lose: true }));
        setPokemon((prevState) =>
          prevState.map((p) => {
            if (p.name === e) {
              return { ...p, lost: true };
            }
            return p;
          }),
        );
        return prevPickedCards;
      } else {
        shuffleHandler();
        return [...prevPickedCards, e];
      }
    });
  }

  function startHandler() {
    setGameState((prevState) => ({
      ...prevState,
      startGame: !prevState.startGame,
    }));
  }
  function winHandler() {
    setGameState((prevState) => ({
      ...prevState,
      win: false,
    }));
    setPickedCards([]);
    setPokemon((prev) => prev.map((p) => ({ ...p, lost: false })));
  }
  function lostHandler() {
    setGameState((prevState) => ({
      ...prevState,
      lose: false,
    }));
    setPickedCards([]);
    setPokemon((prev) => prev.map((p) => ({ ...p, lost: false })));
  }

  return (
    <>
      <Popup
        start={gameState.startGame}
        startHandler={startHandler}
        win={gameState.win}
        winHandler={winHandler}
        lost={gameState.lose}
        lostHandler={lostHandler}
      />
      <Game
        pokemon={pokemon}
        pickedCards={pickedCards}
        pickedHandler={pickedHandler}
        lost={gameState.lose}
      />
    </>
  );
}

export default App;
