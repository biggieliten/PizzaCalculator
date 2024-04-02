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
      <div className="mb-2 p-5 bg-vanilla border-l-8 border-blue ">
        {" "}
        <strong>{pizza.name}</strong>
        <p>Ingredienser: {pizza.ingredients.join(", ")}</p>
        <p>Pris: {pizza.price} kr</p>
        <i>Tillval: {pizza.toppings && pizza.toppings.join(", ")}</i>
      </div>

      <Button
        ButtonClick={() => deletePizza(pizza.id)}
        ButtonTitle="Ta bort Pizza"
        styling="bg-blue text-vanilla w-fit p-1 rounded mb-4"
      />
    </div>
  );
};

export default PizzaDetails;
