import { Pizza } from "../../../pizzaTypes";
import Button from "../../Button/Button";


const PizzaDetails = ({ pizza }: { pizza: Pizza }) => {
  const logDetails = () => console.log(pizza);
  console.log("Pizza Details:", pizza.name, pizza.ingredients);

  return (
    <div className="">
      <h3>{pizza.name}</h3>
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
