import pizzaData from "../../pizza.json";
import { createContext } from "react";
import { Pizza } from "../../pizzaTypes";

/* type Pizza = {
  name: string;
  type: string;
  ingredients: string[];
  price: number;
}; */

/* type PizzaData = {
    pizzor: Pizza[];
}
 */

export const initialPizzas: Pizza[] = pizzaData.pizzor;

export const PizzaContext = createContext([] as Pizza[]);
