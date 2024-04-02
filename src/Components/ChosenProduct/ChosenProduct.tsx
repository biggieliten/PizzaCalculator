import { useContext, useRef, useState } from "react";
import Button from "../Button/Button";
import { PizzaContext } from "../GlobalPizza/GlobalPizza";
import { toppingsType } from "../../pizzaTypes";
const ChosenProduct = () => {
  const [selectedToppings, setSelectedToppings] = useState<toppingsType[]>([]);
  const checkboxRef = useRef<HTMLInputElement>(null);
  const [resetCheckbox, setResetCheckbox] = useState(0);

  const toppings: toppingsType[] = [
    { name: "Extra ost ", price: 10 },
    { name: "Extra tomat ", price: 10 },
    { name: "Extra lök ", price: 10 },
    { name: "Extra rödlök ", price: 10 },
    { name: "Extra isbergssallad ", price: 10 },
    { name: "Extra paprika ", price: 10 },
    { name: "Extra banan ", price: 10 },
    { name: "Extra ananas ", price: 10 },
    { name: "Extra champinjoner ", price: 10 },
    { name: "Extra jordnötter ", price: 10 },
    { name: "Extra kebab ", price: 10 },
    { name: "Extra kyckling ", price: 10 },
    { name: "Extra skinka", price: 10 },
    { name: "Extra tonfisk ", price: 10 },
    { name: "Extra räkor ", price: 10 },
    { name: "Extra kebabsås ", price: 10 },
    { name: "Extra bearniesås ", price: 10 },
    { name: "Extra curry ", price: 10 },
  ];

  const handleToppingChange = (topping: toppingsType) => {
    if (selectedToppings.some((t) => t.name === topping.name)) {
      setSelectedToppings(
        selectedToppings.filter((t) => t.name !== topping.name)
      );
    } else {
      setSelectedToppings([...selectedToppings, topping]);
    }
  };

  const { currentPizza, dispatch, modifiedDispatch } = useContext(PizzaContext);

  const AddPizzaToCart = () => {
    if (currentPizza) {
      const totalToppingsPrice = selectedToppings.reduce(
        (sum, topping) => sum + topping.price,
        0
      );
      const totalPrice = currentPizza.price + totalToppingsPrice;
      modifiedDispatch({
        type: "MOD_PIZZA",
        payload: {
          ...currentPizza,
          toppings: selectedToppings.map((t) => t.name),
          price: totalPrice,
        },
      });
    } else {
      console.error("No pizza added first");
    }
    if (currentPizza) {
      dispatch({ type: "REMOVE_PIZZA", payload: currentPizza.id });
    } else {
      console.error("No pizza added");
    }
    setResetCheckbox((prevKey) => prevKey + 1);
    setSelectedToppings([]);
  };

  return (
    <>
      <>
        <div className="flex flex-col items-center m-4 mt-0 w-1/3 p-4 ">
          <div className="flex flex-col border-solid border-2 border-sky-500 size-fit">
            <h1 className="font-bold px-6 py-4">Välj en Pizza</h1>
          </div>
          {currentPizza && (
            <div className=" max-w-sm rounded overflow-hidden shadow-lg bg-darkyellow border mt-4">
              <div className="px-6 py-4">
                <div className="font-bold text-2xl mb-2">
                  {currentPizza.name}
                </div>
              </div>
            </div>
          )}
          <div className=" bg-vanilla flex flex-col border-solid border-2 border-sky-500 size-auto w-72 p-5 rounded mg m-5">
            <h1 className="font-bold">Tillval 10kr styck</h1>
            {toppings.map((topping) => (
              <div className="flex flex-row relative" key={topping.name}>
                <label htmlFor={topping.name}>{`${topping.name} 
            `}</label>
                <input
                  key={`${topping.name}-${resetCheckbox}`}
                  ref={checkboxRef}
                  value={topping.name}
                  onChange={() => handleToppingChange(topping)}
                  type="checkbox"
                  name={topping.name}
                  id=""
                  className="absolute right-0 top-1 l-10 w-5 h-5"
                />
              </div>
            ))}
            <Button
              ButtonClick={AddPizzaToCart}
              ButtonTitle="Bekräfta"
              styling="bg-blue text-vanilla w-20 h-7 mt-5 rounded "
            />{" "}
          </div>
        </div>
      </>
    </>
  );
};

export default ChosenProduct;
