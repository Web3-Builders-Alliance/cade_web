import React, { useState } from "react";
import { GiTwoCoins } from "react-icons/gi";
import CardMachineForBuyUSDC from "./CardMachineForBuyUSDC";
const CadeBuyingOptions = ({ functionForPayment, switchHeading, changeNetwork }) => {

 

  return (
    <>
      <section className="p-5 text-gray-400 bg-transparent body-font">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-row justify-center w-max">
            <div className="">
              <h2 className="text-white font-abc text-6xl">
                Buy Cade
              </h2>
            </div>
          </div>
          <div onClick={changeNetwork} className="mt-5">
            <h2 className="text-white hover:text-yellow-300 font-abc text-2xl underline">
              {switchHeading}
            </h2>
          </div>
          <div className="flex justify-center flex-wrap mt-10">
            <div className="lg:mb-0 mb-6">
              {buyCadeData.map((item, index) => {
                if (index == currentIndex) {
                  return (
                    <>
                      <CardMachineForBuyUSDC />
                    </>
                  )
                }
              })}
            </div>
          </div>
        </div>


        {/* <h1 className="mt-16 text-5xl text-white font-abc">Buy Custom Amount of Cade</h1>
        <div className="flex justify-center flex-row gap-x-5 mt-10">
          <div className="flex justify-center w-1/4 lg:w-2/4">
            <input class="shadow appearance-none border text-white font-abc text-2xl rounded w-full py-2 px-3 bg-gray-900 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="Amount " />
          </div>
          <div className="flex justify-center w-1/4 lg:1/4">
            <select class="block appearance-none w-full font-abc text-2xl bg-gray-900 text-white  border border-gray-400 hover:border-gray-500 px-1 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              <option>Devent</option>
              <option>Mainnet</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
          </div>
          <div className="w-1/4 flex justify-center">
            <button className="px-6 text-2xl font-abc bg-gray-900  hover:bg-blue-500 text-white font-semibold hover:text-white  border border-white hover:border-transparent rounded">
              Buy
            </button>
          </div>
        </div> */}

      </section>
    </>
  );
};

export default CadeBuyingOptions;