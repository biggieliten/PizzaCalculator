import React from "react";
import pizzaData from "../../pizza.json";
import { createContext, useContext } from "react";

interface Pizza {
  name: string;
  type: string;
  ingredients: string[];
  price: number
}

/* interface PizzaData {
    pizzor: Pizza[];
}
 */

export const initialPizzas: Pizza[] = pizzaData.pizzor;

export const PizzaContext = createContext([] as Pizza[]);
