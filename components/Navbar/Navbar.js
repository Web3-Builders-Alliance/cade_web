import dynamic from "next/dynamic";
import React, { useState, useEffect } from 'react'
import { IoGameController } from "react-icons/io5";
import { NavbarIcons } from "./NavbarIcons";
import { useWallet } from "@solana/wallet-adapter-react";
import { useUserData, useIsUserExist, initializeUser, fetchUserData } from '../../hooks/handleData'
import Link from "next/link";

const Navbarm = () => {
  const {publicKey} = useWallet()
  const userData = useUserData()
  const isUserExist = useIsUserExist()
  const fetUserData = fetchUserData()
  const initUser = initializeUser()
  const { LeaderIcon, GameIcon, PrizesIcon, DiscordIcon, P2P, Notifications, UserProfile, Telegram } = NavbarIcons()

  const WalletMultiButton = dynamic(
    async () =>
      (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
    { ssr: false }
  );

  useEffect(() => {
    fetUserData()
  }, [publicKey, isUserExist])

  return (
    <>
      <nav class="border-gray-200 bg-black">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/">
            <span className="self-center text-5xl font-abc font-semibold whitespace-nowrap text-white">
              `Cade
            </span>
          </Link>
          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-x-5">
            <div className="hidden lg:block">
              {isUserExist ? (
                <>
                  <img class="w-12 h-12 p-1 rounded-full ring-1 ring-gray-300 dark:ring-gray-500" src={userData.userData.userPfpUrl} alt="Bordered avatar" />
                </>
              ) : (
                <>
                  <button onClick={initUser} type="button" class="flex items-center focus:outline-none text-black font-abc bg-white hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-2xl px-8 py-2 me-2 mb-2 dark:focus:ring-yellow-900">
                    <span>Join</span>
                    <span class="ms-2"><IoGameController className="text-green-600" /></span>
                  </button>
                </>
              )}
            </div>
            <WalletMultiButton
              style={{
                background: "black",
                borderStyle: "solid",
                borderBlockColor: "white",
              }}
            />
            <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-900 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-transparent dark:border-gray-700">
              <GameIcon />
              <PrizesIcon />
              <LeaderIcon />
              <P2P />
              <UserProfile />
              <Notifications className="ml-20" />
              <Telegram className="ml-2" />
              <DiscordIcon className="ml-2" />
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbarm