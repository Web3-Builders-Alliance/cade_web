import React, { useState } from "react";

const Coinflip = () => {
  const [betSide, setBetSide] = useState(0);
  const [betAmount, setBetAmount] = useState("");
  return (
    <>
      <div className="flex justify-center p-16 bg-black">
        <form className="mt-5 mb-2 w-80 max-w-screen-lg sm:w-96">
          <h1 className="text-white text-2xl flex justify-center">
            Coin Flip Game
          </h1>
          <div className="mb-4 flex flex-col gap-6">
            <div>
              <div className="flex items-center justify-center">
                <div className="bg-[url('/heads.svg')] bg-no-repeat text-blue border-black hover:bg-blue flex h-40 w-40 cursor-pointer flex-col items-center justify-center rounded-full border-2 bg-black uppercase tracking-wide shadow-lg mt-5">
                  <></>
                </div>
              </div>
              <div className="flex flex-col space-y-2 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 mt-5"></div>
            </div>
            <h1 className="block text-xl font-semibold mb-2 text-white dark:text-white">
              Flip a Coin
            </h1>
            <div className="mb-1">
              <label
                htmlFor="default-input"
                className="block text-xl font-semibold mb-2 text-white dark:text-white"
              >
                Bet Amount in Sol
              </label>
              <input
                type="text"
                id="small-input"
                className="block w-full p-2 text-white border border-gray-300 rounded-lg bg-black focus:border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div className="flex flex-row mt-5">
            <button
              type="button"
              className="w-full border ml-5 border-white text-black bg-white focus:ring-4 focus:ring-blue-300 font-medium rounded-md  py-3 focus:outline-none"
            >
              Heads
            </button>
            <button
              type="button"
              className="w-full border ml-5 border-white text-black bg-white focus:ring-4 focus:ring-blue-300 font-medium rounded-md  py-3 focus:outline-none"
            >
              Tails
            </button>
          </div>

          <button
            type="button"
            className="w-full border mt-10 border-white text-black bg-white focus:ring-4 focus:ring-blue-300 font-medium rounded-md  py-3 focus:outline-none"
          >
            Play
          </button>
        </form>
      </div>
    </>
  );
};

export default Coinflip;
