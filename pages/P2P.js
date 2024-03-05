import React, { useState } from "react";
import SelllerTable from "../components/P2P/SelllerTable";

const P2P = () => {
  const [showSellNowList, setShowSellList] = useState(false);
  return (
    <>
      <div>
        <h1 className="text-white font-abc text-6xl ml-5 mt-5">
          Cade P2P Market
        </h1>
      </div>
      <section className="antialiased bg-black text-gray-600 h-screen px-4">
        <div className="flex flex-col py-12 h-full">
          <div className="w-full mx-auto bg-black shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
              <div className="flex flex-row">
                <button
                  onClick={() => setShowSellList(!showSellNowList)}
                  className="p-2 text-black font-abc bg-yellow-400 border-0 py-2 px-6 focus:outline-none rounded text-3xl"
                >
                  Sell Now
                </button>
              </div>
            </header>

            {showSellNowList ? (
              <>
                <div className="flex-grow">
                  <div className="w-56 text-sm ml-5 mt-5 font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <button
                      aria-current="true"
                      type="button"
                      className="w-full px-4 py-2 font-abc text-left text-3xl text-white bg-blue-700 border-b border-gray-800 rounded-t-lg cursor-pointer focus:outline-none dark:bg-gray-800 dark:border-gray-600"
                    >
                      Instant Profile Sell for 2 CADE
                    </button>
                    <button
                      aria-current="true"
                      type="button"
                      className="w-full px-4 py-2 font-abc text-left text-3xl text-white bg-blue-700 border-b border-gray-800 rounded-t-lg cursor-pointer focus:outline-none dark:bg-gray-800 dark:border-gray-600"
                    >
                      Sell InGame Collectible
                    </button>
                    <button
                      aria-current="true"
                      type="button"
                      className="w-full px-4 py-2 font-abc text-left text-3xl text-white bg-blue-700 border-b border-gray-800 rounded-t-lg cursor-pointer focus:outline-none dark:bg-gray-800 dark:border-gray-600"
                    >
                      Sell at Your Price
                    </button>
                    <input
                      placeholder="Enter the Amount"
                      className="p-2 mb-2 ml-2 mr-2 mt-2 bg-gray-900 rounded-lg"
                    ></input>
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}

            <header className="px-5 py-4 border-b border-gray-100">
              <div className="flex flex-row">
                <h2
                  onClick={() => setShowSellList(!showSellNowList)}
                  className="font-abc  text-4xl text-yellow-400  bg-gray-900 p-2 rounded-2xl "
                >
                  Your Listing
                </h2>
              </div>
              <div className="p-3">
                <div className="flex justify-center">
                  <h1 className="text-white font-abc text-3xl">
                    You have No Listed Item To Sell
                  </h1>
                </div>
              </div>
            </header>
            <header className="px-5 py-4 border-b border-gray-100">
              <div className="flex flex-row">
                <h2
                  onClick={() => setShowSellList(!showSellNowList)}
                  className="font-abc  text-4xl text-yellow-400 bg-gray-900 p-2 rounded-2xl "
                >
                 Avatars Sellers
                </h2>
              </div>

              <SelllerTable />
            </header>
          </div>
        </div>
      </section>
    </>
  );
};

export default P2P;
