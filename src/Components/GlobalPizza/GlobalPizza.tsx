import pizzaData from "../../pizza.json";
import { createContext, ReactNode, useReducer } from "react";
import { Pizza } from "../../pizzaTypes";
import { v4 as uuidv4 } from "uuid";

type PizzaProviderProps = {
  children: ReactNode;
};

type PizzaContextType = {
  currentPizza: Pizza | null;
  modifiedPizza: Pizza[];
  dispatch: React.Dispatch<PizzaAction>;
  modifiedDispatch: React.Dispatch<PizzaAction>;
  toppings?: any;
};

type PizzaAction =
  | { type: "ADD_PIZZA"; payload: Pizza }
  | { type: "MOD_PIZZA"; payload: any }
  | { type: "REMOVE_PIZZA"; payload: string };

const pizzaReducer = (state: Pizza[], action: PizzaAction): Pizza[] => {
  switch (action.type) {
    case "ADD_PIZZA":
      return [{ ...action.payload, id: uuidv4() }];
    case "MOD_PIZZA":
      return [...state, action.payload];
    case "REMOVE_PIZZA":
      return state.filter((pizza: Pizza) => pizza.id !== action.payload);
    default:
      return state;
  }
};

export const PizzaContext = createContext<PizzaContextType>({
  currentPizza: null,
  modifiedPizza: [],
  dispatch: () => {},
  modifiedDispatch: () => {},
});

export const PizzaProvider: React.FC<PizzaProviderProps> = ({ children }) => {
  const [currentState, dispatch] = useReducer(pizzaReducer, []);
  const [modifiedState, modifiedDispatch] = useReducer(pizzaReducer, []);

  return (
    <PizzaContext.Provider
      value={{
        currentPizza: currentState[0],
        dispatch,
        modifiedPizza: modifiedState,
        modifiedDispatch,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

export const initialPizzas: Pizza[] = pizzaData.pizzor.map((pizza) => ({
  ...pizza,
  id: uuidv4(),
}));
