import "./App.css";
import { Game } from "./components/Game.jsx";
import { Popup } from "./components/Popup.jsx";
import { useEffect, useState } from "react";
import { getPokemon } from "./api/apiCalls.jsx";
import { shuffle } from "./helper/funcs.js";

function App() {
  const [gameState, setGameState] = useState({
    startGame: false,
    win: false,
    lose: false,
  });

  const [pokemon, setPokemon] = useState([]);
  const [pickedCards, setPickedCards] = useState([]);
  const [lost, setLost] = useState(false);

  useEffect(() => {
    async function fetchPokemon() {
      const rand = Math.floor(Math.random() * 200);
      const pokemonPromise = [];
      for (let i = rand; i < rand + 12; i++) {
        pokemonPromise.push(getPokemon(i.toString()));
      }
      const data = await Promise.all(pokemonPromise);
      setPokemon(data);
    }
    fetchPokemon().catch((err) => console.log(err));
  }, []);

  function shuffleHandler() {
    setPokemon((prevPokemon) => shuffle(prevPokemon));
  }

  function pickedHandler(e) {
    setPickedCards((prevPickedCards) => {
      if (pickedCards.includes(e)) {
        setLost(true);
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
      win: !prevState.win,
    }));
  }

  return (
    <>
      <Popup
        start={gameState.startGame}
        startHandler={startHandler}
        win={gameState.win}
        winHandler={winHandler}
      />
      <Game
        pokemon={pokemon}
        pickedCards={pickedCards}
        pickedHandler={pickedHandler}
        lost={lost}
      />
    </>
  );
}

export default App;
