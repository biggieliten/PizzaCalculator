// Card.tsx
import Button from "../Button/Button";
import { PizzaContext } from "../GlobalPizza/GlobalPizza";
import { useContext } from "react";

type CardProps = {
  name: string;
  ingredients: string[];
  price: number;
  id: string;
  img?: undefined;
};

const Card: React.FC<CardProps> = ({ name, ingredients, price, id, img }) => {
  const { dispatch } = useContext(PizzaContext);
  const addPizzaToChosen = () => {
    dispatch({
      type: "ADD_PIZZA",
      payload: {
        name: name,
        ingredients: ingredients,
        price: price,
        id: id,
        img: img,
      },
    });

    console.log(id);
  };
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-darkyellow border mb-2 m-5">
      <div className="px-6 py-4 w-56 h-[24rem]  flex flex-col justify-center 	">
        <img src={img} alt="" className="h-40" />

        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{ingredients.join(", ")} </p>
        <div className="font-bold mb-2">{price}kr</div>
        <Button
          styling="bg-blue text-vanilla w-fit p-1 rounded"
          ButtonClick={addPizzaToChosen}
          ButtonTitle="Lägg till pizza"
        />
      </div>
    </div>
  );
};

export default Card;
