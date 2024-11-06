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
      {!props.win && (
        <div id={"popup-backdrop"}>
          <div id="popup-container">
            <p>PLAYYYY</p>
            <button className={"popup-btn"} onClick={props.winHandler}>
              Start
            </button>
          </div>
        </div>
      )}
    </>
  );
}
