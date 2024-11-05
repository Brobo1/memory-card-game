import "./Card.css";

export function Card(props) {
  return (
    <>
      <div className={"card-container"} onClick={props.onClick}>
        <p className={"card-name"}>{props.name}</p>
        <img className={"card-img"} src={props.img} alt={props.name} />
      </div>
    </>
  );
}
