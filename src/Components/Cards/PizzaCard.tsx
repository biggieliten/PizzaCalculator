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
      <div className="flex flex-col items-center w-1/3 h-screen p-4 border border-gray-200 overflow-scroll">
        <h1 className="font-bold">Pizza Klass 1</h1>
        <div className="standardpizza flex flex-wrap items-center justify-center mb-6">
          {standardPizza.map(
            (pizza: {
              name: string;
              ingredients: string[];
              price: number;
              id: string;
              img?: any;
            }) => {
              return (
                <Card
                  name={pizza.name}
                  ingredients={pizza.ingredients}
                  price={pizza.price}
                  id={pizza.id}
                  img={pizza.img}
                />
              );
            }
          )}
        </div>
        <h1 className="font-bold">Pizza Klass 2</h1>
        <div className="kebabpizza flex flex-wrap items-center justify-center mb-6">
          {kebabPizza.map(
            (pizza: {
              name: string;
              ingredients: string[];
              price: number;
              id: string;
              img?: any;
            }) => {
              return (
                <Card
                  name={pizza.name}
                  ingredients={pizza.ingredients}
                  price={pizza.price}
                  id={pizza.id}
                  img={pizza.img}
                />
              );
            }
          )}
        </div>
        <h1 className="font-bold">Pizza Klass 3</h1>
        <div className="kycklingpizza flex flex-wrap items-center  justify-center">
          {kycklingPizza.map(
            (pizza: {
              name: string;
              ingredients: string[];
              price: number;
              id: string;
              img?: any;
            }) => {
              return (
                <Card
                  name={pizza.name}
                  ingredients={pizza.ingredients}
                  price={pizza.price}
                  id={pizza.id}
                  img={pizza.img}
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
