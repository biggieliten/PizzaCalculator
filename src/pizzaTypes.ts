export type Pizza = {
  name: string;
  type?: string;
  ingredients: string[];
  price: number;
  toppings?: string[];
};

export type toppingsType = {
  name: string;
  price: number;
};
