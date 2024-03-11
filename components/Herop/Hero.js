import React, { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import ArcadeMachine from "./ArcadeMachine";
import CadeSocial from "./CadeSocial";
import Badges from "./Badges";
import MiniLeaderBoard from "./MiniLeaderBoard";
import Announcement from "./Announcement";
import Upcoming from "./Upcoming";
import Games from "../micro/Games";
import UpcomingGames from "./UpcomingGames";
import Footer from "../Footer/Footer";
import CadeStore from "./CadeStore";
import CadeCard from "./CadeCard";
import { UnityGameData, OnChainGameData } from "../Data/data";
import { useAvatarProgram } from '../../connector/avatar'
import DifferentGameSection from "../DifferentGameSection/DifferentGameSection";
import RandomGame from "../RandomGame";

const Hero = () => {
  const { publicKey } = useWallet()

  return (
    <>
      {/* <Navbar isUserExist={isUserExist} initializeUserFunction={initializeUserFunction} userData={userData}/> */}
      <section className="text-gray-600 body-font relative bg-gradient-to-bl from-blue-950 via-black to-black">
        <div className="gap-x-5 container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="mt-2">
            <div className="rounded-xl p-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5 bg-transparent">
              <div>
                <ArcadeMachine />
              </div>
              <div className="bg-transparent p-4 rounded-2xl">
                <CadeCard />
              </div>
            </div>

            <div class="mt-2 border-t-2 border-gray-700"></div>
            <section className="text-gray-400 rounded-xl body-font mt-5 ">
              <div className="container px-5 py-5">
                <div className="flex flex-col justify-center -m-5 lg:gap-10 ">
                  <DifferentGameSection sectionName={"Unity Games"} UnityGameData={UnityGameData} spotlight={"bluespotlight"} />
                  <DifferentGameSection sectionName={"Onchain Games"} UnityGameData={OnChainGameData} spotlight={"redspotlight"} />
                  <Games />
                  <RandomGame />
                  <CadeStore />
                  <UpcomingGames />
                </div>
              </div>
            </section>
          </div>
          <div className="p-8 lg:w-1/3 md:w-1/2 bg-transparent flex flex-col md:ml-auto w-full rounded-2xl mr-2">
            <h1 className="flex justify-center text-5xl font-abc text-white ml-10 m-4 font-bold">
              Cade Social🔥
            </h1>
            <MiniLeaderBoard />
            <Badges />
            <CadeSocial />
            <Announcement />
            <Upcoming />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
