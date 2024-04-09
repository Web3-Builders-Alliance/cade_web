import React, { useState, useEffect } from "react";
import Coinflip from "../../components/games/Coinflip";
import { useTicket } from "../../connector/ticket";
import { useUSDCPay } from "../../hooks/transfer";
import TowerDefence from "../../components/games/TowerDefence";
import FourInLine from "../../components/games/FourInLine";
import { useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import GameDetails from "../../components/GamePageComponents/GameDetails";
import PlayMore from "../../components/GamePageComponents/PlayMore";
import GameLeaderBoard from "../../components/GamePageComponents/GameLeaderBoard";
import GameForum from "../../components/GamePageComponents/GameForum";
import MoleSmash from "../../components/games/MoleSmash";
import TileSurive from "../../components/games/TileSurive";
import SkylineSkaddle from "../../components/games/SkylineSkaddle";
import GamesAdditionalDetails from "../../components/GamePageComponents/GamesAdditionalDetails";
import CadeCardMachine from "../../components/GamePageComponents/CadeCardMachine";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import DisplayBoard from "../../components/GamePageComponents/DisplayBoard";
import DifferentGameSection from "../../components/DifferentGameSection/DifferentGameSection";
import { PlayMoreData } from "../../components/Data/data";
import checkNFTaccess from "../../helpers/checkNFTAccess";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";

const Games = ({ slug, data }) => {
  const { connection } = useConnection();
  const wallet = useAnchorWallet();
  const { createTransaction } = useUSDCPay();
  const { publicKey } = useWallet();
  const [show, setshow] = useState(true);
  const [margin, setMargin] = useState("40px");
  const [heading, setHeading] = useState("No Transaction");
  const [blinkingLightColor, setBlinkingLightColor] = useState("red-500");
  const [ableToPlay, setAbleToPlay] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [accessNFTs, setAccessNFTs] = useState();

  useEffect(() => {
    (async () => {
      const newAccessNFTs = await checkNFTaccess(connection, wallet);
      setAccessNFTs(newAccessNFTs);
    })();
  }, [connection, wallet]);

  const insertCadeCard = () => {
    if (accessNFTs.length == 0) {
      setTimeout(() => {
        setMargin("-200px");
        setBlinkingLightColor("green-400");
        setHeading("In Progress (-1CDX)");
      }, 200);
      setTimeout(async () => {
        await createTransaction(
          publicKey,
          new PublicKey("2JSg1MdNqRg9z4RP7yiE2NV86fux2BNtF3pSDjhoi767"),
          1
        );
        setAbleToPlay(true);
      }, 500);
    } else {
      setAbleToPlay(true);
    }
  };
  const takeOutCard = () => {
    setMargin("40px");
    setBlinkingLightColor("red-500");
    setHeading("No Transaction");
  };

  function toggleFullscreen() {
    let elem = document.querySelector("#myIframe");

    if (elem) {
      if (document.fullscreenEnabled) {
        if (!document.fullscreenElement) {
          elem.requestFullscreen().catch((err) => {
            alert(
              `Error attempting to enable fullscreen mode: ${err.message} (${err.name})`
            );
          });
        } else {
          document.exitFullscreen();
        }
      } else {
        alert("Fullscreen is not supported in this browser.");
      }
    } else {
      alert("Video element not found.");
    }
  }

  // //choose the screen size
  // const handleResize = () => {
  //   if (window.innerWidth < 835) {
  //     setIsMobile(true)
  //     console.log("Mobile")
  //     console.log(window.innerWidth)
  //   } else {
  //     setIsMobile(false)
  //     console.log("Not Mobile")
  //   }
  // }

  // // create an event listener
  // useEffect(() => {
  //   window.addEventListener("resize", handleResize)
  // }, [])

  const playGameForMobile = () => {
    setshow(!show);
    setTimeout(() => {
      toggleFullscreen();
    }, 100);
  };

  const playGameForLargeScreen = () => {
    setshow(!show);
  };

  const renderGame = () => {
    if (slug == "CoinFlip") {
      return (
        <div className="mt-10">
          <Coinflip />
        </div>
      );
    }
    if (slug == "TowerDefence") {
      return (
        <div className="mt-10">
          <TowerDefence />
        </div>
      );
    }

    if (slug == "FourInLine") {
      return (
        <div className="mt-10">
          <FourInLine />
        </div>
      );
    }
    if (slug == "MoleSmash") {
      return (
        <div className="mt-10">
          <MoleSmash />
        </div>
      );
    }
    if (slug == "TileSurvive") {
      return (
        <div className="mt-10">
          <TileSurive />
        </div>
      );
    }
    if (slug == "SkylineSkaddle") {
      return (
        <div className="mt-10">
          <SkylineSkaddle />
        </div>
      );
    }
  };

  return (
    <>
      <section className="text-gray-600 body-font lg:px-32 px-2 py-10 bg-gradient-to-l from-blue-950 via-black to-gray-900">
        {data.responce.isGameExist ? (
          <>
            <div
              style={{ height: "1460px" }}
              className="block lg:hidden border-2 rounded-xl border-gray-400 overflow-y-hidden"
            >
              <GameDetails
                maker={data.responce.maker}
                timePlayed={data.responce.timePlayed}
              />
              {show ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5 bg-[url('/brickwall.jpg')]">
                    <div className="flex flex-col items-center justify-center bg-transparent  rounded-b-xl h-max mt-2">
                      <DisplayBoard
                        slug={slug}
                        machineNumber={data.responce.machineNumber}
                        color={data.responce.color}
                      />
                      <img
                        className="w-96 h-96"
                        src={data.responce.arcadeMachineImage}
                        alt=""
                      />
                      <div className="flex justify-center mt-5 block lg:hidden xl:hidden">
                        <div
                          className="mt-5 py-4 text-black flex justify-center font-abc bg-white px-6 focus:outline-none rounded text-2xl border-4 border-black"
                          // onClick={() => playGameForMobile()}
                        >
                          Insert Your Card To Play
                          <span className="flex justify-center ml-2 mt-1">
                            <FaArrowDown />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 flex justify-center items-center overflow-x-auto">
                      <div>
                        <div className="mt-5 flex justify-center">
                          <CadeCardMachine
                            color={data.responce.color}
                            margin={margin}
                            heading={heading}
                            blinkingLightColor={blinkingLightColor}
                            insertCadeCard={insertCadeCard}
                            takeOutCard={takeOutCard}
                            ableToPlay={ableToPlay}
                            playFunction={playGameForMobile}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>{renderGame()}</>
              )}
            </div>
            <div
              style={{ height: "800px" }}
              className="hidden lg:block rounded-xl bg-gray-950 border-2 border-gray-500 overflow-y-hidden"
            >
              <GameDetails
                maker={data.responce.maker}
                timePlayed={data.responce.timePlayed}
              />
              {show ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5 bg-[url('/brickwall.jpg')]">
                    <div className="flex flex-col items-center justify-center bg-transparent p-6 rounded-b-xl h-max">
                      <DisplayBoard
                        slug={slug}
                        machineNumber={data.responce.machineNumber}
                        color={data.responce.color}
                      />
                      <img
                        className="w-96 h-96 rounded-xl"
                        src={data.responce.arcadeMachineImage}
                        alt=""
                      />
                      <div className="flex justify-center mt-2 hidden lg:block xl:block">
                        <div
                          className="text-black font-abc bg-white px-8 focus:outline-none rounded text-3xl border-4 border-black"
                          // onClick={() => playGameForLargeScreen()}
                        >
                          Insert Your Card To Play
                          <span className="flex justify-center mt-2 ">
                            <FaArrowRight />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 flex justify-center items-center overflow-x-auto">
                      <div>
                        {/* <div className='flex justify-center bg-white'>
                          <h1 className="text-3xl font-abc text-black">Insert Your Card to Play</h1>
                        </div> */}
                        <div className="mt-5 flex justify-center">
                          <CadeCardMachine
                            color={data.responce.color}
                            margin={margin}
                            heading={heading}
                            blinkingLightColor={blinkingLightColor}
                            insertCadeCard={insertCadeCard}
                            takeOutCard={takeOutCard}
                            ableToPlay={ableToPlay}
                            playFunction={playGameForLargeScreen}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>{renderGame()}</>
              )}
            </div>

            <GamesAdditionalDetails />
            <section className="text-gray-600 body-font relative ">
              <div className=" justify-center gap-x-5 container px-2 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="mt-2">
                  <div className="p-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
                    <div>
                      <GameLeaderBoard />
                    </div>
                    <div className="">
                      <GameForum />
                    </div>
                  </div>
                </div>
              </div>
              <DifferentGameSection
                sectionName={"Play More"}
                UnityGameData={PlayMoreData}
                spotlight={"bluespotlight"}
              />
            </section>
          </>
        ) : (
          <>
            <div className="flex justify-center">
              <h1 className="text-5xl font-abc text-white">Comming Soon</h1>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.query;
  let apiURL;
  let ENV = process.env.NODE_ENV;
  if (ENV == "development") {
    apiURL = process.env.DEV_API_URL ?? "http://localhost:3000/";
  } else {
    apiURL = process.env.PROD_API_URL;
  }
  console.log(apiURL);
  const res = await fetch(`${apiURL}/api/games/${slug}`);
  const data = await res.json();
  return {
    props: {
      slug,
      data,
    },
  };
}

export default Games;
