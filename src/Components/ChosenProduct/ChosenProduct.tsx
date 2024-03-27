// import React, { useContext, useState, useEffect } from "react";
// import Button from "../Button/Button";
// import { PizzaContext } from "../GlobalPizza/GlobalPizza";

// const ChosenProduct = () => {
//   const toppings = [
//     { name: "Ost: ", key: "ost" },
//     { name: "Tomat: ", key: "tomat" },
//     { name: "Lök: ", key: "lök" },
//     { name: "Rödlök: ", key: "rödlök" },
//     { name: "Isbergssallad: ", key: "isbergssallad" },
//     { name: "Paprika: ", key: "paprika" },
//     { name: "Banan: ", key: "banan" },
//     { name: "Ananas: ", key: "ananas" },
//     { name: "Champinjoner: ", key: "champinjoner" },
//     { name: "Jordnötter: ", key: "jordnötter" },
//     { name: "Kebab: ", key: "kebab" },
//     { name: "Kyckling: ", key: "kyckling" },
//     { name: "Skinka: ", key: "skinka" },
//     { name: "Tonfisk: ", key: "tonfisk" },
//     { name: "Räkor: ", key: "räkor" },
//     { name: "Kebabsås: ", key: "kebabsås" },
//     { name: "Bearniesås: ", key: "bearniesås" },
//     { name: "Curry: ", key: "curry" },
//   ];

//   const { pizzas, dispatch } = useContext(PizzaContext);
//   const [selectedToppings, setSelectedToppings] = useState({});

//   useEffect(() => {
//     const initialSelectedToppings: { [key: string]: boolean } = {};
//     toppings.forEach((topping) => {
//       initialSelectedToppings[topping.key] = false;
//     });
//     setSelectedToppings(initialSelectedToppings);
//   }, []);

//   const AddPizzaToCart = () => {
//     const selectedIngredients = Object.entries(selectedToppings)
//       .filter(([key, value]) => value)
//       .map(([key]) => key);

//     const newPizza = {
//       name: "Custom Pizza",
//       type: "custom",
//       ingredients: selectedIngredients,
//       price: selectedIngredients.length * 10, // Assuming each topping costs $10
//     };
//     dispatch({ type: "ADD_PIZZA", payload: newPizza });
//   };

//   const handleCheckboxChange = (key: string) => {
//     setSelectedToppings((prevSelectedToppings: { [key: string]: boolean }) => ({
//       ...prevSelectedToppings,
//       [key]: !prevSelectedToppings[key],
//     }));
//   };
//   return (
//     <>
//       <h1>Val</h1>

//       <div className="flex flex-col border-solid border-2 border-sky-500 size-fit">
//         {toppings.map((topping) => (
//           <div className="flex flex-row relative" key={topping.key}>
//             <label htmlFor={topping.name}>{topping.name}</label>
//             <input
//               type="checkbox"
//               name={topping.name}
//               checked={
//                 selectedToppings[topping.key as keyof typeof selectedToppings]
//               }
//               onChange={() => handleCheckboxChange(topping.key)}
//               className="absolute right-0 top-1"
//             />
//           </div>
//         ))}
//         <Button ButtonClick={AddPizzaToCart} ButtonTitle="Bekräfta" />
//       </div>
//     </>
//   );
// };

// export default ChosenProduct;

import { useContext, useState } from "react";
import Button from "../Button/Button";
import { PizzaContext } from "../GlobalPizza/GlobalPizza";

const ChosenProduct = () => {
  const toppings = [
    { name: "Ost: ", key: "ost" },
    { name: "Tomat: ", key: "tomat" },
    { name: "Lök: ", key: "lök" },
    { name: "Rödlök: ", key: "rödlök" },
    { name: "Isbergssallad: ", key: "isbergsallad" },
    { name: "Paprika: ", key: "paprika" },
    { name: "Banan: ", key: "banan" },
    { name: "Ananas: ", key: "ananas" },
    { name: "Champinjoner: ", key: "champinjoner" },
    { name: "Jordnötter: ", key: "jordnötter" },
    { name: "Kebab: ", key: "kebab" },
    { name: "Kyckling: ", key: "kyckling" },
    { name: "Skinka: ", key: "skinka" },
    { name: "Tonfisk: ", key: "tonfisk" },
    { name: "Räkor: ", key: "räkor" },
    { name: "Kebabsås: ", key: "kebabsås" },
    { name: "Bearniesås: ", key: "bearniesås" },
    { name: "Curry: ", key: "curry" },
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
  const PizzaIngredients = pizzas[0]?.ingredients;
  //   const checkedArray = toppings.filter((a) => PizzaIngredients.includes(a));
  console.log(pizzas, "pizzorna");
  //   console.log(checkedArray);

  return (
    <>
      <h1>Val</h1>
      {pizzas.map((pizza) => (
        <>
          <h2>{pizza.name}</h2>
        </>
      ))}
      <div className="flex flex-col border-solid border-2 border-sky-500 size-fit">
        {toppings.map((topping) => (
          <div className="flex flex-row relative  " key={topping.name}>
            <label htmlFor={topping.name}>{topping.name}</label>
            <input
              type="checkbox"
              name={topping.name}
              id=""
              className="absolute right-0 top-1"
              //   checked={pizzas.ingredients.includes(topping.name)}
            />
          </div>
        ))}
        <Button ButtonClick={AddPizzaToCart} ButtonTitle="Bekräfta" />
      </div>
    </>
  );
};

export default ChosenProduct;
