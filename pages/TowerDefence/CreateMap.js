import { useState } from "react";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import Head from "next/head";
import { useProgram } from "../../connector/ddt-utils/useProgram";
import Image from "next/image";
import { createMap } from "../../connector/ddt-utils/callInstructions";
import { BN } from "@project-serum/anchor";

const CreateMap = (props) => {
  const Data = [
    {
      name: "Space Invaders",
      img: "/spacenew.webp",
      link: "/Games/SpaceInvaders"
    },
    {
      name: "Chess",
      img: "/chess.avif",
      link: "/Games/Chess"
    },
    {
      name: "FourInLine Game",
      img: "/fourinline.png",
      link: "/Games/FourInLine"
    },
    {
      name: "Car Race",
      img: "/car.jpg",
      link: "/Games/Carrace",
      desc : "Ready to race against the best in this high-speed car game!"
    },
    {
      name: "Tower Defence",
      img: "/tower.jpg",
      link: "/Games/TowerDefence"
    },
    {
      name: "Coin Flip",
      img: "/coinflip.jpg",
      link: "/Games/CoinFlip"
    },
  ];

  const wallet = useAnchorWallet();
  const { connection } = useConnection();
  const { program } = useProgram({ connection, wallet });

  // React UseStates hooks for managing args
  //for createMap
  const [name_for_createMap, setname_for_createMap] = useState();
  const [board_for_createMap, setboard_for_createMap] = useState();
  const [budget_for_createMap, setbudget_for_createMap] = useState(new BN(1000));
  const [board, setboard] = useState([
    {
      kind: "tree",
      health: 1,
      dps: 1,
      position: 0,
    },
    {
      kind: "bull",
      health: 100,
      dps: 100,
      position: 2,
    },
  ]);
  //handler functions for inputs feilds
  const namehandler_for_createMap = (e) => {
    setname_for_createMap(e.target.value);
  };
  const boardhandler_for_createMap = (e) => {
    setboard_for_createMap(e.target.value);
  };
  const budgethandler_for_createMap = (e) => {
    setbudget_for_createMap(e.target.value);
  };
  const deployshandler_for_deployUnits = (e) => {
    setdeploys_for_deployUnits(e.target.value);
  };

  return (
    <>
      <section className="text-gray-600 body-font relative bg-[url('/kn.jpg')]">
        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 ">
            <div className="flex justify-center"></div>

            <>
              <Head>
                <title>dtt</title>
                <meta name="description" content="dtt" />
              </Head>
              <div className="p-8 bg-gray-900 text-white">
                <div className="font-semibold text-xl text-center m-5">
                  <h2>Choose your defenders!</h2>
                </div>
                <div className="px-2 mt-2 text-gray-200 sm:text-lg sm:leading-2 flex flex-col items-center">
                  <div className="flex flex-row items-center">
                    <div className="w-60 flex flex-col items-center mr-4">
                      <div className="flex flex-col">
                        <input
                          type="text"
                          className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder={`Enter Map Name`}
                          value={name_for_createMap}
                          onChange={namehandler_for_createMap}
                        />
                      </div>
                      <div className="flex flex-col mt-4">
                        <p className="">
                          Type of Board/Grid component goes here
                        </p>
                        {/* <input
                  type="text"
                  className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  placeholder={`Enter board`}
                  value={board_for_createMap}
                  onChange={boardhandler_for_createMap}
                /> */}
                      </div>
                    </div>
                    <div className="flex mx-5 items-center">
                      <div className="flex flex-row">
                        {/* <input
                type="text"
                className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                placeholder={`Enter budget`}
                value={budget_for_createMap}
                onChange={budgethandler_for_createMap}
              /> */}
                        <div>
                          <button
                            className="bg-blue-500 text-white py-2.5 px-5 text-sm rounded-md focus:outline-none mx-5"
                            value={budget_for_createMap}
                            onClick={budgethandler_for_createMap}
                          >
                            <div className="flex flex-col items-center">
                              <img
                                src="/tree.svg"
                                alt="Tree Icon"
                                className="h-10 w-10"
                              />
                              <div>Health 200</div>
                              <div>DPS 25</div>
                            </div>
                          </button>
                        </div>
                      </div>
                      <div>
                        <button
                          className="bg-blue-500 text-white py-2.5 px-5 text-sm rounded-md focus:outline-none mx-5"
                          value={budget_for_createMap}
                          onClick={budgethandler_for_createMap}
                        >
                          <div className="flex flex-col items-center">
                            <img
                              src="/bear.svg"
                              alt="Bear Icon"
                              className="h-10 w-10"
                            />
                            <div>Health 200</div>
                            <div>DPS 25</div>
                          </div>
                        </button>
                      </div>
                      <div>
                        <button
                          className="bg-blue-500 text-white py-2.5 px-5 text-sm rounded-md focus:outline-none mx-5"
                          value={budget_for_createMap}
                          onClick={budgethandler_for_createMap}
                        >
                          <div className="flex flex-col items-center">
                            <img
                              src="/bull.svg"
                              alt="Bull Icon"
                              className="h-10 w-10"
                            />
                            <div>Health 200</div>
                            <div>DPS 25</div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-4 flex items-center justify-center m-5">
                  <button
                    className="inline-flex py-2.5 px-5 mx-20 text-sm font-large text-white bg-lime-500 border-lime-500 outline outline-lime-500 border-lime-600 hover:bg-lime-600 focus:ring-4 focus:outline-none focus:ring-lime-600 dark:bg-lime-600 dark:hover-bg-lime-600 dark:focus-ring-lime-600 w-60 flex items-center justify-center"
                    onClick={() =>
                      createMap(
                        program,
                        name_for_createMap,
                        board,
                        budget_for_createMap,
                        wallet.publicKey
                      )
                    }
                  >
                    SAVE MAP!
                  </button>
                </div>
              </div>
            </>
          </div>

          <div className="p-5 lg:w-1/3 md:w-1/2 bg-black flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h1 className="text-white font-abc text-5xl mt-5 ml-5">
              Play More
            </h1>
            <div className="container px-5 py-5 mx-auto">
              <div className="flex flex-col">
                <div className="p-2">
                  <div className="flex flex-col">
                    {Data.map((item) => {
                      return (
                        <div className="mt-10" key={item.name}>
                          <div
                            href="#"
                            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                          >
                            <img
                              className="object-cover w-full rounded-t-lg h-50 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                              src={item.img}
                              alt="d"
                            />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                              <h5 className="font-abc mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {item.name}

                              </h5>
                              <button className="mt-5 px-3 text-4xl font-abc bg-transparent  hover:bg-blue-500 text-white font-semibold hover:text-white  border border-white hover:border-transparent rounded">
                                <a href={`${item.link}`}>Play Now</a>
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateMap;
