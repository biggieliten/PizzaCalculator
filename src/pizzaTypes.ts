/* import { v4 as uuidv4 } from 'uuid'; */

export type Pizza = {
  id: string;
  name: string;
  type?: string;
  ingredients: string[];
  price: number;
  toppings?: string[];
  img?: any;
};

export type toppingsType = {
  name: string;
  price: number;
};
