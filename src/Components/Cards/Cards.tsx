// Card.tsx
import Button from "../Button/Button";
import { PizzaContext } from "../GlobalPizza/GlobalPizza";
import { useContext } from "react";


type CardProps = {
  name: string;
  ingredients: string[];
  price: number;
  
}

const Card: React.FC<CardProps> = ({ name, ingredients, price }) => {
  const { dispatch } = useContext(PizzaContext);
  const addPizzaToMenu = () => {
    dispatch({ type: "ADD_PIZZA", payload: {name: name , ingredients: ingredients , price: price} });
  };
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-darkyellow border mb-2">
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{ingredients.join(", ")} </p>
        <div className="font-bold mb-2">{price}kr</div>
        <Button ButtonClick={addPizzaToMenu} ButtonTitle="Lägg till pizza" />
      </div>
    </div>
  );
};

export default Card;
