import { useEffect, useState } from "react";
import { getPokemon } from "./apiCalls.jsx";
import "./Card.css";

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

export function Card(props) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    async function fetchData() {
      const data = await getPokemon(props.id);
      const img = data.sprites.other.dream_world.front_default;
      setPokemon({ name: capitalize(data.name), img: img });
    }

    fetchData().catch((err) => setPokemon({ name: err.toString() }));
  }, [props.id]);

  return (
    <>
      <div className={"card-container"}>
        <p className={"card-name"}>{pokemon.name}</p>
        <img className={"card-img"} src={pokemon.img} alt={pokemon.name} />
      </div>
    </>
  );
}
