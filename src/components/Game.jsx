import { useEffect, useState } from "react";
import { getPokemon } from "../api/apiCalls.jsx";
import { capitalize, shuffle } from "../helper/funcs.js";
import { Card } from "./Card.jsx";
import "./Game.css";

export function Game(props) {
  return (
    <>
      <div className={"score-container"}>
        <p className={`score-text ${props.lost ? "lost" : ""}`}>
          Score: {props.pickedCards.length}/{props.pokemon.length}
        </p>
      </div>
      <div className={"cards-container"}>
        {props.pokemon.map((pokemon, index) => (
          <Card
            key={index}
            lost={pokemon.lost}
            name={capitalize(pokemon.name)}
            img={pokemon.sprites.other.dream_world.front_default}
            onClick={
              props.lost ? () => {} : () => props.pickedHandler(pokemon.name)
            }
          />
        ))}
      </div>
    </>
  );
}
