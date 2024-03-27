import pizzaData from "../../pizza.json";
import { createContext, ReactNode, useReducer, useState } from "react";
import { Pizza } from "../../pizzaTypes";

const [modifiedPizza, setModifiedPizza] = useState({});

type PizzaProviderProps = {
  children: ReactNode;
};

type PizzaContextType = {
  currentPizza: Pizza | null;
  modifiedPizza: Pizza[];
  dispatch: React.Dispatch<PizzaAction>;
  modifiedDispatch: React.Dispatch<PizzaAction>;
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

/* export const PizzaContext = createContext({
  currentPizza: [] as Pizza[],
  modifiedPizza: [] as Pizza[],
  dispatch: (() => {}) as React.Dispatch<PizzaAction>,
}); */

export const PizzaContext = createContext<PizzaContextType>({
  currentPizza: null,
  modifiedPizza: [],
  dispatch: () => {},
  modifiedDispatch: () => {},
});

export const PizzaProvider: React.FC<PizzaProviderProps> = ({ children }) => {
  const [currentState, dispatch] = useReducer(pizzaReducer, []); // Provide an initial state of an empty array
  const [modifiedState, modifiedDispatch] = useReducer(pizzaReducer, []);

  return (
    <PizzaContext.Provider
<<<<<<< HEAD
      value={
        { modifiedPizza, setModifiedPizza } && { pizzas: pizzaState, dispatch }
      }
=======
      value={{
        currentPizza: currentState[0],
        dispatch,
        modifiedPizza: modifiedState,
        modifiedDispatch,
      }}
>>>>>>> submain
    >
      {children}
    </PizzaContext.Provider>
  );
};

export const initialPizzas: Pizza[] = pizzaData.pizzor;

/* export const PizzaContext = createContext([] as Pizza[]); */
