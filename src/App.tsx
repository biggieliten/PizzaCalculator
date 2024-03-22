import { useState } from "react";
import "./App.css";
import Card from "./Cards";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Card title={"kebab pizza"} content = {"kebab"}/>
      <div>
        <p className="text-yellow text-9xl">hej</p>
      </div>
    </>)
  ;
}

export default App;
