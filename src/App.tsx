import ChosenProduct from "./Components/ChosenProduct/ChosenProduct";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
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
      <TotalSum prices={pizzaPrices} />
      <PizzaContext.Provider value={initialPizzas}>
        {/* {initialPizzas.map((pizza, index) => (
          <div key={index}>
          <h2>{pizza.name}</h2>
          <p>{pizza.type}</p>
          <ul>
          {pizza.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
            ))}
            </ul>
            </div>
            ))} */}
      </PizzaContext.Provider>
      <Footer />
    </>
  );
}

export default App;
