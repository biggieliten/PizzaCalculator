import React, { useState } from "react";
import { useContext } from "react";
import { PizzaContext } from "../GlobalPizza/GlobalPizza";
import PizzaDetails from "./PizzaDetails/PizzaDetails";
import Button from "../Button/Button";

const TotalSum: React.FC = (): React.ReactNode => {
  const { currentPizza, dispatch, modifiedDispatch, modifiedPizza } =
    useContext(PizzaContext);
  const [pizzaCount, setPizzaCount] = useState(0);

  const total = modifiedPizza.reduce((sum, pizza) => sum + pizza.price, 0);

  console.log({ currentPizza });

  //   const AddPizza = () => {
  //     const newPizza = {
  //       name: "Hawaii",
  //       type: "regular",
  //       ingredients: ["tomatsås", "ost", "skinka", "ananas"],
  //       price: 100,
  //     };
  //     dispatch({ type: "ADD_PIZZA", payload: newPizza });
  //   };

  return (
    <div className="flex flex-col w-1/3 p-4 border border-gray-200">
      {modifiedPizza.map((pizza, index) => (
        <PizzaDetails key={index} pizza={pizza} />
      ))}
      <h2>Totala beloppet: {total} kr</h2>
      {/* <Button ButtonClick={AddPizza} ButtonTitle="Lägg till pizza" /> */}
    </div>
  );
};

export default TotalSum;
