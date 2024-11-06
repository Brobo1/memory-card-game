import "./Popup.css";

export function Popup(props) {
  return (
    <>
      {!props.start && (
        <div id={"popup-backdrop"}>
          <div id="popup-container">
            <p>PLAYYYY</p>
            <button className={"popup-btn"} onClick={props.onclick}>
              Start
            </button>
          </div>
        </div>
      )}
    </>
  );
}
