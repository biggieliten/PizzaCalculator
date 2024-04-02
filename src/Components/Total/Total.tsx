/* import React, { useState } from "react";
import { useContext } from "react";
import { PizzaContext } from "../GlobalPizza/GlobalPizza";
import PizzaDetails from "./PizzaDetails/PizzaDetails";
import Button from "../Button/Button";

const TotalSum: React.FC = (): React.ReactNode => {
  const { currentPizza, dispatch, modifiedDispatch, modifiedPizza } =
    useContext(PizzaContext);
  const [pizzaCount, setPizzaCount] = useState(0);

  const total = modifiedPizza.reduce((sum, pizza) => sum + pizza.price, 0);

  console.log( "hej", modifiedPizza );

  return (
    <div className="flex flex-col w-1/3 p-4 border border-gray-200">
      {modifiedPizza.map((pizza, index) => (
        <PizzaDetails key={index} pizza={pizza} />
      ))}
      <h2>Totala beloppet: {total} kr</h2>
      
    </div>
  );
};

export default TotalSum; */

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
      {/* {modifiedPizza.map((pizza, index) => (
        <div key={index} className="mb-2">
          <h3>{pizza.name}</h3>
          <p>Price: {pizza.price} kr</p>
          <p>Toppings: {pizza.toppings && pizza.toppings.join(", ")}</p>
        </div>
      ))} */}
      <h2>
        <strong>Totalt belopp: </strong>
        {modifiedPizza.reduce((sum, pizza) => sum + pizza.price, 0)} kr
      </h2>
    </div>
  );
};

export default TotalSum;
