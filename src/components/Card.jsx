import "./Card.css";

export function Card(props) {
  return (
    <>
      <div
        className={`card ${props.lost ? "lost" : props.win ? "win" : ""}`}
        onClick={props.onClick}
      >
        <p className={`card-name ${props.lost ? "lost" : ""}`}>{props.name}</p>
        <img
          className={"card-img"}
          src={props.img}
          alt={props.name}
          draggable={false}
        />
      </div>
    </>
  );
}
