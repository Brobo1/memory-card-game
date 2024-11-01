import "./App.css";
import { getPokemon } from "./components/apiCalls.jsx";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    async () => console.log(getPokemon("ditto"));
  }, []);
  return <></>;
}

export default App;
