import { capitalize } from "../helper/funcs.js";
import { Card } from "./Card.jsx";
import "./Game.css";

export function Game(props) {
  return (
    <>
      <div className="header">
        <div className="reload-container">
          <button className={"reload-btn"} onClick={props.reloadHandler}>
            Reload Pokemon
          </button>
        </div>

        <div className={"score-container"}>
          <p className={`score-text ${props.lost ? "lost" : ""}`}>
            Score: {props.pickedCards.length}/{props.pokemon.length}
          </p>
        </div>
        <div className="difficulty-container">
          <input
            className="difficulty-input"
            type="number"
            value={props.difficulty}
            max={50}
            min={3}
            onChange={(e) => props.setDifficulty(parseInt(e.target.value))}
          />
          <button className="difficulty-btn" onClick={props.reloadHandler}>
            Set difficulty
          </button>
        </div>
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
