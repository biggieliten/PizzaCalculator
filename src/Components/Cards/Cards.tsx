// Card.tsx
import Button from "../Button/Button";
import { PizzaContext } from "../GlobalPizza/GlobalPizza";
import { useContext } from "react";


type CardProps = {
  name: string;
  ingredients: string[];
  price: number;
  id:string
 
  
}

const Card: React.FC<CardProps> = ({ name, ingredients, price, id }) => {
  const { dispatch } = useContext(PizzaContext);
  const addPizzaToChosen = () => {
    dispatch({ type: "ADD_PIZZA", payload: {name: name , ingredients: ingredients , price: price, id: id} });
   
    console.log(id);
    
  };
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-darkyellow border mb-2">
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{ingredients.join(", ")} </p>
        <div className="font-bold mb-2">{price}kr</div>
        <Button ButtonClick={addPizzaToChosen} ButtonTitle="Lägg till pizza" />
      </div>
    </div>
  );
};

export default Card;
