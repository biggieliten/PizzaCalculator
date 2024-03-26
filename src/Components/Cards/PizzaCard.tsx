import Card from "./Cards";
import { useContext } from "react";
import { PizzaContext } from "../GlobalPizza/GlobalPizza";
import { Pizza } from "../../pizzaTypes";

const PizzaCard = () => {
  const pizzor: { pizzas: Pizza[] } = useContext(PizzaContext);

  const standardPizza = pizzor.pizzas.filter(
    (pizza: { type: string }) => pizza.type === "standard"
  );
  const kebabPizza = pizzor.pizzas.filter(
    (pizza: { type: string }) => pizza.type === "kebab"
  );
  const kycklingPizza = pizzor.pizzas.filter(
    (pizza: { type: string }) => pizza.type === "kyckling"
  );

  return (
    <>
      <div className="overflow-auto h-96 w-fit gap-4 mt-6">
        <div className="standardpizza ">
          <h1 className="font-bold">Pizza Klass 1</h1>
          {standardPizza.map(
            (pizza: { name: string; ingredients: string[]; price: number }) => {
              return (
                <Card
                  name={pizza.name}
                  ingredients={pizza.ingredients}
                  price={pizza.price}
                />
              );
            }
          )}
        </div>
        <div className="kebabpizza ">
          <h1 className="font-bold">Pizza Klass 2</h1>
          {kebabPizza.map(
            (pizza: { name: string; ingredients: string[]; price: number }) => {
              return (
                <Card
                  name={pizza.name}
                  ingredients={pizza.ingredients}
                  price={pizza.price}
                />
              );
            }
          )}
        </div>
        <div className="kycklingpizza">
          <h1 className="font-bold">Pizza Klass 33</h1>
          {kycklingPizza.map(
            (pizza: { name: string; ingredients: string[]; price: number }) => {
              return (
                <Card
                  name={pizza.name}
                  ingredients={pizza.ingredients}
                  price={pizza.price}
                />
              );
            }
          )}
        </div>
      </div>
    </>
  );
};
export default PizzaCard;
