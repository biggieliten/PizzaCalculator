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
    { name: "Extra ananas: ", price: 10 },
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
      <div className="choiceBox flex flex-col items-center  ">
        <div className="flex flex-col border-sky-500 size-fit m-1.5 ">
          <h1 className="font-bold ">Tillval</h1>
          <h2>{currentPizza?.name}</h2>
          {/* <Button ButtonClick={() => deletePizza(pizza.id)} ButtonTitle="Delete" /> */}
        </div>
        <div className=" bg-vanilla flex flex-col border-solid border-2 border-sky-500 size-auto w-72 p-5 rounded">
          <h1 className="font-bold">Toppings</h1>

          {toppings.map((topping) => (
            <div className="flex flex-row relative" key={topping.name}>
              <label
                htmlFor={topping.name}
              >{`${topping.name} (${topping.price} kr)`}</label>
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
          />
        </div>
      </div>
    </>
  );
};

export default ChosenProduct;

/* import { useContext, useState } from "react";
import Button from "../Button/Button";
import { PizzaContext } from "../GlobalPizza/GlobalPizza";
import { toppingsType } from "../../pizzaTypes";

const ChosenProduct = () => {
  const [ingredients, setIngredients] = useState([{}]);
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
  const handleToppingChange = (e: any) => {
    setIngredients(e.target.value);
  };
  console.log(ingredients);

  const [click, setClick] = useState<any>(null);

  //   setClick(() => {});

  const { currentPizza, dispatch, modifiedDispatch } = useContext(PizzaContext);

  console.log(currentPizza, "pizzor");

  const AddPizzaToCart = () => {
    if (currentPizza) {
      modifiedDispatch({ type: "MOD_PIZZA", payload: currentPizza });
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
    console.log(currentPizza);
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
              value={topping.name}
              onChange={handleToppingChange}
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
 */
