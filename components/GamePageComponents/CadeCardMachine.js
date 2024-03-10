import React, { useEffect, useState } from 'react'
import { FaWifi } from "react-icons/fa6";
import { TiBatteryFull } from "react-icons/ti";
import { PublicKey } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import { useUSDCPay } from "../../hooks/transfer";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useUserData, useIsUserExist, fetchUserData, initializeUser } from '../../hooks/handleData'
import { IoGameController } from "react-icons/io5";
const CadeCardMachine = ({ color, margin, heading, blinkingLightColor, insertCadeCard, takeOutCard, ableToPlay, playFunction }) => {
    const { publicKey } = useWallet();
    const userData = useUserData()
    const isUserExist = useIsUserExist()
    const fetUserData = fetchUserData()

    useEffect(() => {
        fetUserData()
    }, [publicKey, isUserExist])

    return (
        <>
            <div className='flex flex-col h-max relative'>

                <div id='first' style={{ height: "30rem", borderWidth: "11px" }} className={`z-10 relative flex flex-col justify-center items-center bg-${color} w-80 rounded-3xl border-white`}>
                    <div className='w-72 h-80 bg-transparent rounded-xl'>
                        <div className='rounded-2xl absolute top-0 w-64 m-4 mt-5 h-7 bg-black'>
                            <div className='flex flex-row justify-center gap-x-10 mt-1.5'>
                                <div className={`rounded-full w-4 h-4 bg-${blinkingLightColor} animate-blink`}></div>
                                <div className={`rounded-full w-4 h-4 bg-${blinkingLightColor} animate-blink`}></div>
                                <div className={`rounded-full w-4 h-4 bg-${blinkingLightColor} animate-blink`}></div>
                                <div className={`rounded-full w-4 h-4 bg-${blinkingLightColor} animate-blink`}></div>
                            </div>
                        </div>

                        <div style={{ height: "12rem" }} className='relative border-4 border-blue-950  rounded-xl  w-72 bg-blue-800'>

                            <div className='flex flex-row'>
                                <div className='w-3/4 flex justify-center'>
                                    <h1 className='font-abc text-2xl text-white'>
                                        Cade Card Machine
                                    </h1>
                                </div>
                                <div className='gap-x-4 mt-2 flex flex-row w-1/4'>
                                    <FaWifi className='text-white   text-lg' />
                                    <TiBatteryFull className='text-white    text-lg' />
                                </div>
                            </div>
                            <div className='m-2  w-full flex justify-center items-center absolute top-1/3'>
                                <h1 className='text-3xl text-white font-abc'>{heading}<span className='animate-blink'>..</span> </h1>
                            </div>
                            {/* <div className='mt-1 w-full flex justify-center items-center absolute top-1/2 mt-3'>
                                <h1 className=' text-white font-abc'>(Click on ✔ button to insert your card)</h1>
                            </div> */}
                            <div className='w-full mb-2 flex justify-center items-center absolute bottom-0'>
                                <h1 className='text-2xl text-white font-abc'>Accepted - CADE|BONK|USDC</h1>
                            </div>
                        </div>

                        <div style={{ height: "10rem" }} className='mt-5 border-4 border-gray-500 rounded-xl w-72 bg-slate-800 '>

                            <div className=' flex flex-row h-1/2'>
                                {ableToPlay ? (
                                    <>
                                        <div className='w-full flex flex-col justify-center items-center'>
                                            <button onClick={playFunction} className='flex justify-center w-40 border-4 border-gray-400 items-center h-20 mt-2 rounded-lg bg-gray-900 text-green-400'>
                                                <h1 className='text-green-400 font-abc text-xl'><IoGameController className='text-green-400 text-2xl' />Play</h1>
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className='flex  flex-col items-center w-1/2 cursor-pointer' onClick={insertCadeCard}>
                                            <button className='border-4 border-gray-400 flex justify-center items-center w-14 h-20 mt-2 rounded-lg bg-gray-900 text-green-400'>
                                                <h1 className='text-green-400 font-abc text-xl'><FaCheck className='text-green-400 text-2xl' /></h1>
                                            </button>
                                            <h1 className='text-white font-abc text-3xl'>Insert</h1>
                                        </div>

                                        <div className='flex flex-col items-center  w-1/2 cursor-pointer' onClick={takeOutCard}>
                                            <button className='border-4 border-gray-400 flex justify-center items-center w-14 h-20 mt-2 rounded-lg bg-gray-900'>
                                                <ImCross className='text-red-500 text-xl' />
                                            </button>
                                            <h1 className='text-white font-abc text-3xl'>Decline</h1>

                                        </div>
                                    </>
                                )}

                            </div>
                            <div className='flex flex-row h-1/2 mt-3'>
                                <div className='flex justify-center items-center ml-3 w-1/3'>

                                    <h1 className='text-white font-abc text-xl'>or Use</h1>

                                </div>
                                <div className='flex justify-center w-1/3 '>
                                    <div className='border-4 border-blue-400 flex justify-center items-center w-14 h-10 mt-2 rounded-lg bg-gray-900'>
                                        <img src='/usdc.png' alt='' />
                                    </div>
                                </div>
                                <div className='flex justify-center w-1/3'>
                                    <div className='border-4 border-yellow-400 flex justify-center items-center w-14 h-10 mt-2 rounded-lg bg-gray-900'>
                                        <img className='h-7 w-7 rounded-xl' src='/bonk.jpg' alt='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='rounded-t-xl absolute bottom-0 w-64 h-3 bg-gray-900 border-2 border-gray-300 overflow-y-hidden'></div>
                </div>

                <div className='flex justify-center order-2' style={{ marginTop: `${margin}` }}>
                    <div id='second' className='relative overflow-y-hidden bg-center bg-[url("/ig.png")] object-center bg-no-repeat border-2 border-gray-600 flex flex-col justify-center items-center bg-slate-800 w-72 h-96 rounded-xl'>
                        <div className='absolute top-0 left-0 m-3'>
                            <img class="w-10 h-10 p-1 rounded-full ring-1 ring-gray-300 dark:ring-gray-500" src={isUserExist ? userData.userData.userPfpUrl : "/cadenew.png"} alt="Bordered avatar" />
                        </div>
                        <div className='absolute top-0 right-0 m-3'>
                            <h1 className='text-white font-abc text-3xl'>{isUserExist ? userData.userData.userName : "----"}</h1>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CadeCardMachine