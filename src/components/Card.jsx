import "./Card.css";

export function Card(props) {
  return (
    <>
      <div
        className={`card ${props.lost ? "lost" : ""}`}
        onClick={props.onClick}
      >
        <p className={"card-name"}>{props.name}</p>
        <img className={"card-img"} src={props.img} alt={props.name} />
      </div>
    </>
  );
}
