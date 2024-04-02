import ChosenProduct from "./Components/ChosenProduct/ChosenProduct";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import "./App.css";
import TotalSum from "./Components/Total/Total";
import PizzaCard from "./Components/Cards/PizzaCard";
import { PizzaProvider } from "./Components/GlobalPizza/GlobalPizza";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row justify-around  ">
        <PizzaProvider>
          <PizzaCard />
          <ChosenProduct />
          <TotalSum />
        </PizzaProvider>
      </div>
      <Footer />
    </>
  );
}

export default App;
