import { useContext, useState } from "react";
import Button from "../Button/Button";
import { PizzaContext } from "../GlobalPizza/GlobalPizza";

const ChosenProduct = () => {
  const toppings = [
    // { name: "Ost: ", key: "ost" },
    // { name: "Tomat: ", key: "tomat" },
    // { name: "Lök: ", key: "lök" },
    // { name: "Rödlök: ", key: "rödlök" },
    // { name: "Isbergssallad: ", key: "isbergsallad" },
    // { name: "Paprika: ", key: "paprika" },
    // { name: "Banan: ", key: "banan" },
    // { name: "Ananas: ", key: "ananas" },
    // { name: "Champinjoner: ", key: "champinjoner" },
    // { name: "Jordnötter: ", key: "jordnötter" },
    // { name: "Kebab: ", key: "kebab" },
    // { name: "Kyckling: ", key: "kyckling" },
    // { name: "Skinka: ", key: "skinka" },
    { name: "Tonfisk: ", key: "tonfisk" },
    { name: "Räkor: ", key: "räkor" },
    { name: "Kebabsås: ", key: "kebabsås" },
    { name: "Bearniesås: ", key: "bearniesås" },
    { name: "Curry: ", key: "curry" },
  ];
  const { pizzas, dispatch } = useContext(PizzaContext);
  //   const { modifiedPizza, setModifiedPizza }: any = useContext(PizzaContext);
  //   const [modifiedPizza, setModifiedPizza] = useState({});

  const AddPizzaToCart = () => {
    // setModifiedPizza(
    //   dispatch({
    //     type: "MOD_PIZZA",
    //     payload: pizzas.map((p: any) => p.name),
    //   })
    // );
    // console.log(modifiedPizza, "moddad");
  };
  //   const checkedArray = toppings.filter((a) => PizzaIngredients.includes(a));
  //   console.log(checkedArray);

  return (
    <>
      <div className="flex flex-col border-solid border-2 border-sky-500 size-fit">
        <h1 className="font-bold">Val</h1>
        {pizzas.map((pizza) => (
          <>
            <h2>{pizza.name}</h2>
          </>
        ))}
      </div>
      <div className="flex flex-col border-solid border-2 border-sky-500 size-fit">
        <h1 className="font-bold">Toppings</h1>
        {toppings.map((topping) => (
          <div className="flex flex-row relative  " key={topping.name}>
            <label htmlFor={topping.name}>{topping.name}</label>
            <input
              type="checkbox"
              name={topping.name}
              id=""
              className="absolute right-0 top-1"
              //   checked={PizzaIngredients?.includes(topping.name) === false}
            />
          </div>
        ))}
        <Button ButtonClick={AddPizzaToCart} ButtonTitle="Bekräfta" />
      </div>
    </>
  );
};

export default ChosenProduct;
