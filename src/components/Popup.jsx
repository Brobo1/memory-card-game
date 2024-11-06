import "./Popup.css";

export function Popup(props) {
  return (
    <>
      {!props.start && (
        <div id={"popup-backdrop"}>
          <div id="popup-container">
            <div className="text">
              <h1>Memory Game</h1>
              <p>The objective is to avoid clicking the same pokemon twice</p>
            </div>
            <button className={"popup-btn"} onClick={props.startHandler}>
              Start
            </button>
          </div>
        </div>
      )}
      {props.win && (
        <div id={"popup-backdrop"}>
          <div id="popup-container">
            <h1>Great Success!</h1>
            <button className={"popup-btn"} onClick={props.winHandler}>
              Replay
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
