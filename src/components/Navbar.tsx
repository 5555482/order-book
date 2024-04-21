import React from "react";
import { CgReorder } from "react-icons/cg";

interface NavbarProps {
  selectedCoin: string;
  selectedExchange: string;
  handleCoinChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleExchangeChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  selectedCoin,
  selectedExchange,
  handleCoinChange,
  handleExchangeChange,
}: NavbarProps) => {
  return (
    <nav className="flex text-lg justify-between items-center px-6 py-4 bg-sky-100 text-sky-800" aria-label="Breadcrumb">
      <CgReorder />
      {/* Coin and Exchange selection */}
      <div className="flex text-sm  flex-col sm:flex-row items-center justify-between">
        {/* Coin selection */}
        <div className="flex items-center mb-4 sm:mb-0">
          {/* <label htmlFor="coin" className="mr-2 font-semibold">Select Coin:</label> */}
          <select
            id="coin"
            className="border rounded p-2 bg-gray-100 text-gray-800"
            value={selectedCoin}
            onChange={handleCoinChange}
          >
            <option value="BTC/USD">Bitcoin (BTC/USD)</option>
            <option value="ETH/USD">Ethereum (ETH/USD)</option>
            {/* Add more options for other coins */}
          </select>
        </div>

        {/* Exchange selection */}
        <div className="flex text-sm items-center ml-2">
          {/* <label htmlFor="exchange" className="mr-2 font-semibold">Select Exchange:</label> */}
          <select
            id="exchange"
            className="border rounded p-2 bg-gray-100 text-gray-800"
            value={selectedExchange}
            onChange={handleExchangeChange}
          >
            <option value="ExchangeX">ExchangeX</option>
            <option value="ExchangeY">ExchangeY</option>
            {/* Add more options for other exchanges */}
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
