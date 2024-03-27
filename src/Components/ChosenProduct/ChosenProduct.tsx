import { useContext, useState } from "react";
import Button from "../Button/Button";
import { PizzaContext } from "../GlobalPizza/GlobalPizza";
import { toppingsType } from "../../pizzaTypes";

const ChosenProduct = () => {
  const toppings: toppingsType[] = [
    { name: "Extra ost: ", price: 10 },
    { name: "Extra tomat: ", price: 10 },
    { name: "Extra lök: ", price: 10 },
    { name: "Extra rödlök: ", price: 10 },
    { name: "Extra isbergssallad: ", price: 10 },
    { name: "Extra paprika: ", price: 10 },
    { name: "Extra banan: ", price: 10 },
    { name: "Extra ananas: ", price: 10 },
    { name: "Extra champinjoner: ", price: 10 },
    { name: "Extra jordnötter: ", price: 10 },
    { name: "Extra kebab: ", price: 10 },
    { name: "Extra kyckling: ", price: 10 },
    { name: "Extra skinka: ", price: 10 },
    { name: "Extra tonfisk: ", price: 10 },
    { name: "Extra räkor: ", price: 10 },
    { name: "Extra kebabsås: ", price: 10 },
    { name: "Extra bearniesås: ", price: 10 },
    { name: "Extra curry: ", price: 10 },
  ];
  const [click, setClick] = useState<any>(null);

  //   setClick(() => {});

  const { currentPizza, dispatch, modifiedDispatch } = useContext(PizzaContext);

  console.log(currentPizza, "pizzor");

  const AddPizzaToCart = () => {
    if (currentPizza) {
      modifiedDispatch({
        type: "MOD_PIZZA",
        payload: { currentPizza, toppings },
      });
    } else {
      console.error("No pizza added first");
    }
    if (currentPizza) {
      dispatch({ type: "REMOVE_PIZZA", payload: currentPizza.name });
    } else {
      // handle the case when currentPizza is null
      console.error("No pizza added");
    }
    // dispatch({ type: "REMOVE_PIZZA", payload: currentPizza.name });
  };

  //   const [filter, setFilter] = useState("");
  //   const AddToppings = () => {
  //     if (filter === "checked") {
  //       console.log(filter);
  //     }
  //   };

  return (
    <>
      <div className="flex flex-col border-solid border-2 border-sky-500 size-fit">
        <h1 className="font-bold">Val</h1>
        <h2>{currentPizza?.name}</h2>
      </div>
      <div className="flex flex-col border-solid border-2 border-sky-500 size-fit">
        <h1 className="font-bold">Toppings</h1>
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
