import React from "react";
import { Button } from "react-scroll";
import Link from "next/link";
import { useRouter } from "next/router";

const TowerDefence = () => {
  const router = useRouter();
  return (
    <>
      <>
        <div className=" p-4 bg-gray-900">
          <div className="flex flex-col items-center">
            <h1 className="text-white font-abc text-3xl m-3 mt-5 text-center">
              Solana Royale
            </h1>
          </div>
          <div className="mt-4">
            <div className="flex flex-col items-center sm:flex-row sm:items-center m-8">
              <div className="mt-4 items-start sm:mt-0">
                <Link href="/TowerDefence/CreateMap">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2.5 px-5 mx-20 text-sm font-large text-white bg-lime-500 outline outline-lime-500 border-lime-600 hover:bg-lime-600 focus:ring-4 focus:outline-none focus:ring-lime-600 dark:bg-lime-600 dark:hover:bg-lime-600 dark:focus:ring-lime-600 w-2/3"
                  >
                    Create a New Map
                  </button>
                </Link>
              </div>
              <div className="mt-4 sm:mt-0 mx-20">
                <Link href="/TowerDefence/SearchForMap">
                  <button
                    type="submit"
                    class="inline-flex justify-center py-2.5 px-5 mx-20 text-sm font-large text-white bg-lime-500 border-lime-500 outline outline-lime-500 border-lime-600 hover:bg-lime-600 focus:ring-4 focus:outline-none focus:ring-lime-600 dark:bg-lime-600 dark:hover:bg-lime-600 dark:focus:ring-lime-600 w-2/3"
                  >
                    Select a Map
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default TowerDefence;
