import React from "react";

interface PizzaTotalProps {
  prices: number[];
}

export const pizzaPrices = [80, 120, 100];

const TotalSum: React.FC<PizzaTotalProps> = ({ prices }) => {
  const total = prices.reduce((sum, price) => sum + price, 0);

  return (
    <div className="place-self-auto ...">
      <h2>Totala beloppet: {total} </h2>
    </div>
  );
};

export default TotalSum;
