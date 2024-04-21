import React from "react";

interface OrderBookProps {
  orderBookData: OrderBookData | null;
}

interface OrderBookData {
  timestamp: number;
  exchange: string;
  coin: string;
  bids: [number, number][];
  asks: [number, number][];
}

const OrderBook: React.FC<OrderBookProps> = ({ orderBookData }: OrderBookProps) => {
  if (!orderBookData) {
    return <p className="text-lg">No data available for the selected coin and exchange.</p>;
  }

  return (
    <div className="bg-sky-50 rounded-md p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Bids */}
        <div className="overflow-auto max-h-screen">
          <h2 className="text-md font-semibold mb-2 text-sky-700 ">Bids:</h2>
          {orderBookData.bids.sort((a, b) => b[0] - a[0]).map((bid, index) => (
            <div className="w-full max-w-md p-2 mb-1 bg-white border border-gray-200 rounded-lg shadow sm:p-4 dark:bg-gray-800 dark:border-gray-700" key={index}>
              <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Price: {bid[0]}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          Amount: {bid[1]}
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
        {/* Asks */}
        <div className="overflow-auto max-h-screen">
          <h2 className="text-md font-semibold mb-2 text-sky-700">Asks:</h2>
          {orderBookData.asks.sort((a, b) => b[0] - a[0]).map((ask, index) => (
            <div className="w-full max-w-md p-2 mb-1 bg-white border border-gray-200 rounded-lg shadow sm:p-4 dark:bg-gray-800 dark:border-gray-700" key={index}>
              <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Price: {ask[0]}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          Amount: {ask[1]}
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderBook;
