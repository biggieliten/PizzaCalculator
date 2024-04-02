import Card from "./Cards";
import { initialPizzas } from "../GlobalPizza/GlobalPizza";
import { Pizza } from "../../pizzaTypes";

const PizzaCard = () => {
  const standardPizza = initialPizzas.filter(
    (pizza: Pizza) => pizza.type === "standard"
  );
  const kebabPizza = initialPizzas.filter(
    (pizza: Pizza) => pizza.type === "kebab"
  );
  const kycklingPizza = initialPizzas.filter(
    (pizza: Pizza) => pizza.type === "kyckling"
  );

  return (
    <>
      <div className="bg-yellow flex flex-col items-center w-1/3 h-screen p-4 border border-gray-200 overflow-y-scroll">
        <h1 className="font-bold">Pizza Klass 1</h1>
        <div className="standardpizza flex flex-wrap items-center justify-center mb-6">
          {standardPizza.map((pizza: Pizza) => {
            return (
              <Card
                key={pizza.id}
                name={pizza.name}
                ingredients={pizza.ingredients}
                price={pizza.price}
                id={pizza.id}
                img={pizza.img}
              />
            );
          })}
        </div>
        <h1 className="font-bold">Pizza Klass 2</h1>
        <div className="kebabpizza flex flex-wrap items-center justify-center mb-6">
          {kebabPizza.map((pizza: Pizza) => {
            return (
              <Card
                key={pizza.id}
                name={pizza.name}
                ingredients={pizza.ingredients}
                price={pizza.price}
                id={pizza.id}
                img={pizza.img}
              />
            );
          })}
        </div>
        <h1 className="font-bold">Pizza Klass 3</h1>
        <div className="kycklingpizza flex flex-wrap items-center  justify-center">
          {kycklingPizza.map((pizza: Pizza) => {
            return (
              <Card
                key={pizza.id}
                name={pizza.name}
                ingredients={pizza.ingredients}
                price={pizza.price}
                id={pizza.id}
                img={pizza.img}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default PizzaCard;
