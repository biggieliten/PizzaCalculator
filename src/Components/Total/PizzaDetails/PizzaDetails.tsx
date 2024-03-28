import { useContext } from "react";
import { Pizza } from "../../../pizzaTypes";
import Button from "../../Button/Button";
import { PizzaContext } from "../../GlobalPizza/GlobalPizza";




const PizzaDetails = ({ pizza }: { pizza: Pizza }) => {
    const {modifiedDispatch} = useContext(PizzaContext)
    
    const deletePizza = (pizzaId: string) => {
        modifiedDispatch({type: "REMOVE_PIZZA", payload: pizzaId})
    }
    
    
    
    
    
    return (
    <div className="">
      <h3>{pizza.name}</h3>

      <div className="mb-2">
        {/* <h3>{pizza.name}</h3> */}
        {/* <p>Price: {pizza.price} kr</p> */}
        <i>Toppings: {pizza.toppings && pizza.toppings.join(", ")}</i>
      </div>

      <ul>
        {/* {pizza.ingredients.map((ingredients, index) => (
          <li key={index}>{ingredients}</li>
        ))}  */}
      </ul>
      {/* <p>Pris: {pizza.price}</p> */}
      <Button ButtonClick={() => deletePizza(pizza.id)} ButtonTitle="Delete" />
    </div>
  );
};

export default PizzaDetails;
