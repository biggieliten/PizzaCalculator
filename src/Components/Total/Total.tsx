import React, { useState } from "react";
import { useContext } from "react";
import { PizzaContext } from "../GlobalPizza/GlobalPizza";
import PizzaDetails from "./PizzaDetails/PizzaDetails";
import Button from "../Button/Button";

const TotalSum: React.FC = (): React.ReactNode => {
  const pizzas = useContext(PizzaContext);
  const [pizzaCount, setPizzaCount] = useState(0);

  const total = pizzas.reduce((sum, pizza) => sum + pizza.price, 0);

  console.log({ pizzas });

  const AddPizza = () => {
    const newPizza = {
      name: "Hawaii",
      type: "regular",
      ingredients: ["tomatsås", "ost", "skinka", "ananas"],
      price: 100,
    };
    setPizzaCount(pizzaCount + 1);
    pizzas.push(newPizza);
  };

  return (
    <div className="place-self-auto ...">
      {pizzas.map((pizza, index) => (
        <PizzaDetails key={index} pizza={pizza} />
      ))}
      <h2>Totala beloppet: {total} kr</h2>
      <Button ButtonClick={AddPizza} ButtonTitle="Lägg till pizza" />
    </div>
  );
};

export default TotalSum;
