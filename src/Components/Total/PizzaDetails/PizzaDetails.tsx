import { useContext } from "react";
import { Pizza } from "../../../pizzaTypes";
import Button from "../../Button/Button";
import { PizzaContext } from "../../GlobalPizza/GlobalPizza";

const PizzaDetails = ({ pizza }: { pizza: Pizza }) => {
  const { modifiedDispatch } = useContext(PizzaContext);

  const deletePizza = (pizzaId: string) => {
    modifiedDispatch({ type: "REMOVE_PIZZA", payload: pizzaId });
  };

  return (
    <div className="">
      <div className="mb-2">
        <strong>{pizza.name}</strong>
        <p>Ingredienser: {pizza.ingredients.join(", ")}</p>
        <p>Pris: {pizza.price} kr</p>
        <i>Tillval: {pizza.toppings && pizza.toppings.join(", ")}</i>
      </div>

      <ul>
        {/* {pizza.ingredients.map((ingredients, index) => (
          <li key={index}>{ingredients}</li>
        ))}  */}
      </ul>
      {/* <p>Pris: {pizza.price}</p> */}
      <Button
        ButtonClick={() => deletePizza(pizza.id)}
        ButtonTitle="Ta bort Pizza"
        styling="bg-blue text-vanilla w-fit p-1 rounded"
      />
      <p>______________________________________________________</p>
    </div>
  );
};

export default PizzaDetails;
