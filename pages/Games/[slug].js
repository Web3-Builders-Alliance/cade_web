import React, { useState, useEffect } from "react";
import Coinflip from "../../components/games/Coinflip";
import { useUSDCPay } from "../../hooks/transfer";
import TowerDefence from "../../components/games/TowerDefence";
import FourInLine from "../../components/games/FourInLine";
import { useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import GameDetails from "../../components/GamePageComponents/GameDetails";
import MoleSmash from "../../components/games/MoleSmash";
import TileSurive from "../../components/games/TileSurive";
import SkylineSkaddle from "../../components/games/SkylineSkaddle";
import GamesAdditionalDetails from "../../components/GamePageComponents/GamesAdditionalDetails";
import CadeCardMachine from "../../components/GamePageComponents/CadeCardMachine";
import { FaArrowDown } from "react-icons/fa"
import DisplayBoard from '../../components/GamePageComponents/DisplayBoard'
import DifferentGameSection from "../../components/DifferentGameSection/DifferentGameSection";
import { PlayMoreData } from "../../components/Data/data";
import { IoGameController } from "react-icons/io5";
import Sheet from 'react-modal-sheet';
import GameLeaderBoard from "../../components/GamePageComponents/GameLeaderBoard";
const Games = ({
  slug,
  data
}) => {
  const { createTransaction } = useUSDCPay();
  const { publicKey } = useWallet();
  const [show, setshow] = useState(true);
  const [margin, setMargin] = useState("40px")
  const [heading, setHeading] = useState("No Transaction")
  const [blinkingLightColor, setBlinkingLightColor] = useState("red-500")
  const [ableToPlay, setAbleToPlay] = useState(false)
  const [isOpen, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false)

  const insertCadeCard = () => {
    setTimeout(() => {
      setMargin("-200px")
      setBlinkingLightColor("green-400")
      setHeading("In Progress (-1CDX)")
    }, 200)
    setTimeout(async () => {
      await createTransaction(
        publicKey,
        new PublicKey("2JSg1MdNqRg9z4RP7yiE2NV86fux2BNtF3pSDjhoi767"),
        1
      )
      setAbleToPlay(true)
    }, 500)
  }

  const takeOutCard = () => {
    setMargin("40px")
    setBlinkingLightColor("red-500")
    setHeading("No Transaction")
  }


  function toggleFullscreen() {
    let elem = document.querySelector("#myIframe");

    if (elem) {
      if (document.fullscreenEnabled) {
        if (!document.fullscreenElement) {
          elem.requestFullscreen().catch((err) => {
            alert(
              `Error attempting to enable fullscreen mode: ${err.message} (${err.name})`,
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
    setshow(!show)
    setTimeout(() => {
      toggleFullscreen()
    }, 100)
  }

  const playGameForLargeScreen = () => {
    setshow(!show)
  }

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
      <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
        <Sheet.Container style={{ backgroundColor: "#191414" }}>
          <Sheet.Header />
          <Sheet.Content>
            <div className="flex justify-center items-center overflow-x-auto">
              <div className='mt-72 flex justify-center items-center'>
                <CadeCardMachine color={data.responce.color} margin={margin} heading={heading} blinkingLightColor={blinkingLightColor} insertCadeCard={insertCadeCard} takeOutCard={takeOutCard} ableToPlay={ableToPlay} playFunction={playGameForLargeScreen} />
              </div>
            </div>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
      <section className="text-gray-600 body-font lg:px-32 px-2 py-10 bg-gradient-to-l from-blue-950 via-black to-gray-900">

        {data.responce.isGameExist ? (
          <>
            <div style={{ height: "1460px" }} className="block lg:hidden border-2 rounded-xl border-gray-400 overflow-y-hidden">
              <GameDetails maker={data.responce.maker} timePlayed={data.responce.timePlayed} />
              {show ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5 bg-[url('/brickwall.jpg')]">
                    <div className="flex flex-col items-center justify-center bg-transparent  rounded-b-xl h-max mt-2">
                      <DisplayBoard slug={slug} machineNumber={data.responce.machineNumber} color={data.responce.color} />
                      <img className="w-96 h-96" src={data.responce.arcadeMachineImage} alt="" />
                      <div className="flex justify-center mt-5 block lg:hidden xl:hidden">
                        <div
                          className="mt-5 py-4 text-black flex justify-center font-abc bg-white px-6 focus:outline-none rounded text-2xl border-4 border-black"
                          onClick={() => playGameForMobile()}
                        >
                          Insert Your Card To Play
                          <span className="flex justify-center ml-2 mt-1"><FaArrowDown /></span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 flex justify-center items-center overflow-x-auto">
                      <div>
                        <div className='mt-5 flex justify-center'>
                          <CadeCardMachine color={data.responce.color} margin={margin} heading={heading} blinkingLightColor={blinkingLightColor} insertCadeCard={insertCadeCard} takeOutCard={takeOutCard} ableToPlay={ableToPlay} playFunction={playGameForMobile} />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {renderGame()}
                </>
              )}

            </div>
            <div style={{ height: "800px" }} className="hidden lg:block rounded-xl bg-gray-950 border-2 border-gray-500 overflow-y-hidden">
              <GameDetails maker={data.responce.maker} timePlayed={data.responce.timePlayed} />
              {show ? (
                <>
                  <div className="relative grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 bg-[url('/brickwall.jpg')]">
                    <div className="bg-black flex flex-col items-center justify-center bg-transparent p-6 rounded-b-xl h-max">
                      <DisplayBoard slug={slug} machineNumber={data.responce.machineNumber} color={data.responce.color} />
                      <div className="flex justify-center mt-2 hidden lg:block xl:block">
                        <div
                          className="cursor-pointer text-white font-abc bg-gray-950 px-16 focus:outline-none rounded text-3xl border-2 rounded-lg border-white"
                          onClick={() => setOpen(true)}
                        >
                          Play Now
                          <span className="flex justify-center mt-2 "><IoGameController className="text-green-400 text-3xl" /></span>
                        </div>
                      </div>
                      <img className="w-96 h-96 rounded-xl mt-2" src={data.responce.arcadeMachineImage} alt="" />
                      
                    </div>
                    <div className="">
                      <div className="absolute left-1/2 translate-x-20">
                        <img className="h-40 w-28 items-center flex" src="/pipe.png" alt="pipe" />
                      </div>
                      <div className="absolute left-1/2 translate-x-1/4 top-1/4 -translate-y-16 rounded-xl" style={{ height: 500, width: 350, backgroundColor: "white", borderWidth: 10, borderColor: "white ", background: "#191414" }}>
                        <GameLeaderBoard />
                      </div>
                    </div>
                  </div>

                </>
              ) : (
                <>
                  {renderGame()}
                </>
              )}

            </div>

            <GamesAdditionalDetails />
            <section className="text-gray-600 body-font relative ">
              <div className=" justify-center gap-x-5 container px-2 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
              </div>
              <DifferentGameSection sectionName={"Play More"} UnityGameData={PlayMoreData} spotlight={"bluespotlight"} />
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
  let ENV = process.env.NODE_ENV
  if (ENV == "development") {
    apiURL = process.env.DEV_API_URL
  }
  else {
    apiURL = process.env.PROD_API_URL
  }
  const res = await fetch(`${apiURL}/api/games/${slug}`)
  const data = await res.json()
  return {
    props: {
      slug,
      data
    },
  };
}

export default Games;
