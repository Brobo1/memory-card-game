import { useEffect, useState } from "react";
import { getPokemon } from "./apiCalls.jsx";

export function Card() {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    async function fetchData() {
      const data = await getPokemon("ditto");
      setPokemon({ name: data.species.name, img: data.sprites.front_default });
      console.log(data);
    }
    fetchData().catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div>
        <p>{pokemon.name}</p>
        <img src={pokemon.img} alt="" />
      </div>
    </>
  );
}
