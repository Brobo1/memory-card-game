import "./App.css";
import { Card } from "./components/Card.jsx";

function App() {
  const arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
  return (
    <>
      <div className={"cards-container"}>
        {arr.map((item, index) => (
          <Card key={index} id={item} />
        ))}
      </div>
    </>
  );
}

export default App;
