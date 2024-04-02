import React from "react";
import { useContext } from "react";
import { PizzaContext } from "../GlobalPizza/GlobalPizza";
import PizzaDetails from "./PizzaDetails/PizzaDetails";

const TotalSum: React.FC = (): React.ReactNode => {
  const { modifiedPizza } = useContext(PizzaContext);

  return (
    <div className="flex flex-col w-1/3 p-4 border border-gray-200">
      <h1 className="font-bold">Kundvagn</h1>

      {modifiedPizza.map((pizza, index) => (
        <PizzaDetails pizza={pizza} key={index} />
      ))}
      <h2>
        <strong>Totalt belopp: </strong>
        {modifiedPizza.reduce((sum, pizza) => sum + pizza.price, 0)} kr
      </h2>
    </div>
  );
};

export default TotalSum;
