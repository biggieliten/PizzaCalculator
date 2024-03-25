import { useState } from "react";
import ChosenProduct from "./Components/ChosenProduct/ChosenProduct";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <ChosenProduct />
      <Footer />
      {/* <div>
        <p className="text-blue text-9xl">hej</p>
        <h1>hola</h1>
      </div> */}
    </>
  );
}

export default App;
