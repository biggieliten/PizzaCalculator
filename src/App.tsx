import ChosenProduct from "./Components/ChosenProduct/ChosenProduct";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TotalSum, { pizzaPrices } from "./Components/Total/Total";
import {
  initialPizzas,
  PizzaContext,
} from "./Components/GlobalPizza/GlobalPizza";

function App() {
  console.log(initialPizzas);
  return (
    <>
      <Header />
      <ChosenProduct />
      {/* <div>
        <p className="text-blue text-9xl">hej</p>
        <h1>hola</h1>
      </div> */}
      <TotalSum prices={pizzaPrices} />
      {/* <PizzaContext.Provider value={initialPizzas}>
        {initialPizzas.map((pizza, index) => (
          <div key={index}>
          <h2>{pizza.name}</h2>
          <p>{pizza.type}</p>
          <ul>
          {pizza.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
            ))}
            </ul>
            </div>
            ))}
          </PizzaContext.Provider> */}
      <Footer />
    </>
  );
}

export default App;
