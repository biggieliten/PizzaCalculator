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
      <div className="flex flex-col w-1/3 p-4 border border-gray-200">
        <div className="standardpizza ">
          <h1 className="font-bold">Pizza Klass 1</h1>
          {standardPizza.map(
            (pizza: { name: string; ingredients: string[]; price: number; id:string} ) => {
              return (
                <Card
                  name={pizza.name}
                  ingredients={pizza.ingredients}
                  price={pizza.price}
                  id={pizza.id}
                />
              );
            }
          )}
        </div>
        <div className="kebabpizza ">
          <h1 className="font-bold">Pizza Klass 2</h1>
          {kebabPizza.map(
            (pizza: { name: string; ingredients: string[]; price: number; id:string }) => {
              return (
                <Card
                  name={pizza.name}
                  ingredients={pizza.ingredients}
                  price={pizza.price}
                  id={pizza.id}
                />
              );
            }
          )}
        </div>
        <div className="kycklingpizza">
          <h1 className="font-bold">Pizza Klass 3</h1>
          {kycklingPizza.map(
            (pizza: { name: string; ingredients: string[]; price: number; id:string }) => {
              return (
                <Card
                  name={pizza.name}
                  ingredients={pizza.ingredients}
                  price={pizza.price}
                  id={pizza.id}
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
