import { useContext } from "react";
import { Pizza } from "../../../pizzaTypes";
import Button from "../../Button/Button";
import { PizzaContext } from "../../GlobalPizza/GlobalPizza";

const PizzaDetails = ({ pizza }: { pizza: Pizza }) => {
  const logDetails = () => console.log(pizza);
  console.log("Pizza Details:", pizza.name, pizza.ingredients);
  const { modifiedPizza } = useContext(PizzaContext);

  return (
    <div className="">
      <h3>{pizza.name}</h3>
      {modifiedPizza.map((pizza, index) => (
        <div key={index} className="mb-2">
          <h3>{pizza.name}</h3>
          <p>Price: {pizza.price} kr</p>
          <i>Toppings: {pizza.toppings && pizza.toppings.join(", ")}</i>
        </div>
      ))}
      <ul>
        {/* {pizza.ingredients.map((ingredients, index) => (
          <li key={index}>{ingredients}</li>
        ))}  */}
      </ul>
      <p>Pris: {pizza.price}</p>
      <Button ButtonClick={logDetails} ButtonTitle="Logga" />
    </div>
  );
};

export default PizzaDetails;
