import { useContext, useState } from "react";
import Button from "../Button/Button";
import { PizzaContext } from "../GlobalPizza/GlobalPizza";




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
    setIngredients(e.target.value)
   

  }
  console.log(ingredients);
  
  const [click, setClick] = useState<any>(null);

  //   setClick(() => {});

  const { currentPizza, dispatch, modifiedDispatch } = useContext(PizzaContext);

  console.log(currentPizza, "pizzor");

  const AddPizzaToCart = () => {
    if (currentPizza) {
      modifiedDispatch({ type: "MOD_PIZZA", payload: {...currentPizza, ingredients} });
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
