import { useContext, useState } from "react";
import Button from "../Button/Button";
import { PizzaContext } from "../GlobalPizza/GlobalPizza";

const ChosenProduct = () => {
  const toppings = [
    { name: "Ost: " },
    { name: "Tomat: " },
    { name: "Lök: " },
    { name: "Rödlök: " },
    { name: "Isbergssallad: " },
    { name: "Paprika: " },
    { name: "Banan: " },
    { name: "Ananas: " },
    { name: "Champinjoner: " },
    { name: "Jordnötter: " },
    { name: "Kebab: " },
    { name: "Kyckling: " },
    { name: "Skinka: " },
    { name: "Tonfisk: " },
    { name: "Räkor: " },
    { name: "Kebabsås: " },
    { name: "Bearniesås: " },
    { name: "Curry: " },
  ];
  const [click, setClick] = useState<any>(null);

  //   setClick(() => {});

  const { pizzas, dispatch } = useContext(PizzaContext);
  console.log(pizzas, "pizzor");

  const AddPizzaToCart = () => {
    const newPizza = {
      name: "Hawaii",
      type: "regular",
      ingredients: ["tomatsås", "ost", "skinka", "ananas"],
      price: 100,
    };
    dispatch({ type: "ADD_PIZZA", payload: newPizza });
  };

  return (
    <>
      <div className="flex flex-col w-1/3 p-4 border border-gray-200">
        <h1>Val</h1>
        {pizzas.map((pizza) => (
          <>
            <h2>{pizza.name}</h2>
          </>
        ))}
        {toppings.map((topping) => (
          <div className="flex flex-row relative  ">
            <label htmlFor={topping.name}>{topping.name}</label>
            <input
              type="checkbox"
              name={topping.name}
              id=""
              className="absolute right-0 top-1 "
            />
          </div>
        ))}
        <Button ButtonClick={AddPizzaToCart} ButtonTitle="Bekräfta" />
      </div>
    </>
  );
};

export default ChosenProduct;
