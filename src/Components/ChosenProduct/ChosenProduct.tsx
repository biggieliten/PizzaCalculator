import { useState } from "react";
import Button from "../Button/Button";

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

  return (
    <>
      <h1>Val</h1>
      <h2>"Vald Pizza"</h2>
      <div className="flex flex-col border-solid border-2 border-sky-500 size-fit">
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
      </div>
      <Button ButtonClick={click} children="Bekräfta" />
    </>
  );
};

export default ChosenProduct;
