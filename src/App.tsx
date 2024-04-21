import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import OrderBook from "./components/OrderBook";
import { OrderBookData } from "./interfaces/OrderBookData";


function App(): JSX.Element {
  // State variables
  const [selectedCoin, setSelectedCoin] = useState < string > ("BTC/USD");
  const [selectedExchange, setSelectedExchange] = useState < string > ("ExchangeX");
  const [orderBookData, setOrderBookData] = useState < OrderBookData | null > (null);

  // Function to fetch order book data
  useEffect(() => {
    // WebSocket connection setup
    const ws = new WebSocket("wss://mock.lo.tech:8443/ws/orderbook");

    // WebSocket event listeners
    ws.onopen = () => {
      console.log("WebSocket connected");
    };

    ws.onmessage = (event) => {
      const data: OrderBookData = JSON.parse(event.data);
      // console.log(JSON.parse(event.data))
      if (data.coin === selectedCoin && data.exchange === selectedExchange) {
        setOrderBookData(data);
      }
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
      setError("Failed to connect to server. Please try again.");
    };

    ws.onclose = () => {
      console.log("WebSocket closed");
    };

    // Cleanup function
    return () => {
      ws.close();
    };
  }, [selectedCoin, selectedExchange]);

  // Function to handle coin selection change
  const handleCoinChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setSelectedCoin(event.target.value);
    setOrderBookData(null); // Clear data when coin selection changes
  };

  // Function to handle exchange selection change
  const handleExchangeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setSelectedExchange(event.target.value);
    setOrderBookData(null); // Clear data when exchange selection changes
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="max-w-lg w-full p-6 bg-white rounded-md shadow-md">
        <Navbar
          selectedCoin={selectedCoin}
          selectedExchange={selectedExchange}
          handleCoinChange={handleCoinChange}
          handleExchangeChange={handleExchangeChange}
        />
        <OrderBook
          orderBookData={orderBookData}
          selectedCoin={selectedCoin}
          selectedExchange={selectedExchange}
        />
      </div>
    </div>
  );
}

export default App;
