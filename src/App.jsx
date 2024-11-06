import "./App.css";
import { Card } from "./components/Card.jsx";
import { useEffect, useState } from "react";
import { getPokemon } from "./api/apiCalls.jsx";
import { capitalize, shuffle } from "./helper/funcs.js";

function App() {
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

  // function combineHandlers(e) {
  //   setPickedCards((prevPickedCards) => {
  //     if (prevPickedCards.includes(e)) {
  //       setLost(true);
  //       return prevPickedCards;
  //     } else {
  //       const newPickedCards = [...prevPickedCards, e];
  //       setPickedCards(newPickedCards);
  //       // Only shuffle if game is not lost
  //       shuffleHandler();
  //       return newPickedCards;
  //     }
  //   });
  // }

  return (
    <>
      <div className={"score-container"}>
        <p className={`score-text ${lost ? "lost" : ""}`}>
          Score: {pickedCards.length}/{pokemon.length}
        </p>
      </div>
      <div className={"cards-container"}>
        {pokemon.map((pokemon, index) => (
          <Card
            key={index}
            lost={pokemon.lost}
            name={capitalize(pokemon.name)}
            img={pokemon.sprites.other.dream_world.front_default}
            onClick={lost ? () => {} : () => pickedHandler(pokemon.name)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
