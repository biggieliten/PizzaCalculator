export type Pizza = {
  id: string;
  name: string;
  type?: string;
  ingredients: string[];
  price: number;
  toppings?: string[];
  img: string;
};

export type toppingsType = {
  name: string;
  price: number;
};
