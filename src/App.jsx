import "./App.css";
import { Card } from "./components/Card.jsx";

const ARR = Array.from({ length: 12 }, () => Math.floor(Math.random() * 500));

function App() {
  return (
    <>
      <div className={"cards-container"}>
        {ARR.map((item, index) => (
          <Card key={index} id={item} />
        ))}
      </div>
    </>
  );
}

export default App;
