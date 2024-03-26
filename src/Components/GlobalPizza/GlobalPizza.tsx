import pizzaData from "../../pizza.json";
import { createContext, ReactNode, useReducer } from "react";
import { Pizza } from "../../pizzaTypes";

type PizzaProviderProps = {
  children: ReactNode;
};

type PizzaAction =
  | { type: "ADD_PIZZA"; payload: Pizza }
  | { type: "MOD_PIZZA"; payload: any }
  | { type: "REMOVE_PIZZA"; payload: string };

const pizzaReducer = (state: Pizza[], action: PizzaAction): Pizza[] => {
  switch (action.type) {
    case "ADD_PIZZA":
      return [...state, action.payload];
    case "MOD_PIZZA":
      return [...state, action.payload];
    case "REMOVE_PIZZA":
      return state.filter((pizza: Pizza) => pizza.name !== action.payload);
    default:
      return state;
  }
};

export const PizzaContext = createContext({
  pizzas: [] as Pizza[],
  dispatch: (() => {}) as React.Dispatch<PizzaAction>,
});

export const PizzaProvider: React.FC<PizzaProviderProps> = ({ children }) => {
  const [pizzaState, dispatch] = useReducer(pizzaReducer, []);

  return (
    <PizzaContext.Provider value={{ pizzas: pizzaState, dispatch }}>
      {children}
    </PizzaContext.Provider>
  );
};

export const initialPizzas: Pizza[] = pizzaData.pizzor;

/* export const PizzaContext = createContext([] as Pizza[]); */
