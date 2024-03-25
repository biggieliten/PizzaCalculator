import React from "react";
import { useContext } from "react";
import { PizzaContext } from "../GlobalPizza/GlobalPizza";

const TotalSum: React.FC = () => {
  const pizzas = useContext(PizzaContext);

  const total = pizzas.reduce((sum, pizza) => sum + pizza.price, 0);

  return (
    <div className="place-self-auto ...">
      <h2>Totala beloppet: {total} kr</h2>
    </div>
  );
};

export default TotalSum;
