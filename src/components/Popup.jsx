import "./Popup.css";

export function Popup(props) {
  return (
    <>
      {!props.start && (
        <div id={"popup-backdrop"}>
          <div id="popup-container">
            <p>PLAYYYY</p>
            <button className={"popup-btn"} onClick={props.startHandler}>
              Start
            </button>
          </div>
        </div>
      )}
      {props.win && (
        <div id={"popup-backdrop"}>
          <div id="popup-container">
            <p>Great memory! Great Success! </p>
            <button className={"popup-btn"} onClick={props.winHandler}>
              Start2
            </button>
          </div>
        </div>
      )}
      {props.lost && (
        <div id={"popup-backdrop"}>
          <div id="popup-container">
            <h1 className={"popup-text"}>You lost :(</h1>
            <button className={"popup-btn"} onClick={props.lostHandler}>
              Try again!
            </button>
          </div>
        </div>
      )}
    </>
  );
}
