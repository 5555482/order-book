import React from "react";

interface OrderBookDataProps {
  data: OrderBookData;
}

interface OrderBookData {
  bids: [number, number][];
  asks: [number, number][];
}

const OrderBookDataComponent: React.FC<OrderBookDataProps> = ({ data }: OrderBookDataProps) => {
  return (
    <div>
      <h2>Bids</h2>
      <ul>
        {data.bids.map((bid, index) => (
          <li key={index}>
            Price: {bid[0]}, Amount: {bid[1]}
          </li>
        ))}
      </ul>
      <h2>Asks</h2>
      <ul>
        {data.asks.map((ask, index) => (
          <li key={index}>
            Price: {ask[0]}, Amount: {ask[1]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderBookDataComponent;
