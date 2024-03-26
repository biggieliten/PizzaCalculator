import Card from "./Cards";
import { useContext } from "react";
import { PizzaContext } from "../GlobalPizza/GlobalPizza";
import { Pizza } from "../../pizzaTypes";
import { initialPizzas } from "../GlobalPizza/GlobalPizza";

const PizzaCard = () => {
  

  const standardPizza = initialPizzas.filter(
    (pizza: { type?: string }) => pizza.type === "standard"
  );
  const kebabPizza = initialPizzas.filter(
    (pizza: { type?: string }) => pizza.type === "kebab"
  );
  const kycklingPizza = initialPizzas.filter(
    (pizza: { type?: string }) => pizza.type === "kyckling"
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
          <h1 className="font-bold">Pizza Klass 3</h1>
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
