import { useState } from "react";
import "./App.css";
import Card from "./Cards";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Card title={"kebab pizza"} content = {"kebab"}/>
      <div>
        <p className="text-blue text-9xl">hej</p>
        <h1>hola</h1>
      </div>
    </>)
  ;
}

export default App;
