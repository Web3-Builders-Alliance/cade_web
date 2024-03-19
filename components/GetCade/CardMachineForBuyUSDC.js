import React, { useEffect, useState } from 'react'
import { FaWifi } from "react-icons/fa6";
import { TiBatteryFull } from "react-icons/ti";
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const CardMachineForBuyUSDC = ({ showNext, showPrevItem, img, heading, blinkingLightColor, doTransactionWithUSDC, doTheTransactionWithBONK, paymentMethod, network }) => {
    const [onMainnet, setOnMainnet] = useState(true)

    useEffect(() => {
        if (network == "Mainnet") {
            setOnMainnet(true)
        } else {
            setOnMainnet(false)
        }
    }, [network])
    return (
        <>
            <div className='flex flex-col h-max relative overflow-x-hidden'>
                <div id='first' style={{ height: "36rem", borderWidth: "10px", width: "320px" }} className={`z-10 relative flex flex-col justify-center  bg-orange-500 items-center rounded-3xl border-gray-300 m-10`}>
                    <div className='w-72 h-80 bg-transparent rounded-xl'>
                        <div className='rounded-2xl absolute top-0 left-1/2 -translate-x-1/2 w-64 mt-5 h-8 bg-black'>
                            <div className='flex flex-row justify-center gap-x-10 mt-1.5'>
                                <div className={`rounded-full w-4 h-4 bg-${blinkingLightColor} animate-blink`}></div>
                                <div className={`rounded-full w-4 h-4 bg-${blinkingLightColor} animate-blink`}></div>
                                <div className={`rounded-full w-4 h-4 bg-${blinkingLightColor} animate-blink`}></div>
                                <div className={`rounded-full w-4 h-4 bg-${blinkingLightColor} animate-blink`}></div>
                            </div>
                        </div>

                        <div className='absolute top-1/4 -translate-y-1/3'>
                            <div style={{ height: "14rem" }} className='relative border-4 border-blue-950  rounded-xl  w-72 bg-blue-800'>

                                <div className='flex flex-row'>
                                    <div className='w-3/4 flex justify-center'>
                                        <h1 className='font-abc text-2xl text-white'>
                                            Cade Card Machine
                                        </h1>
                                    </div>
                                    <div className='gap-x-4 mt-2 flex flex-row w-1/4'>
                                        <FaWifi className='text-white   text-lg' />
                                        <TiBatteryFull className='text-white text-lg' />
                                    </div>
                                </div>
                                <div className='mt-10 ml-5 w-full flex flex-row justify-center items-center absolute top-1/2 -translate-y-1/2 gap-x-2'>
                                    <div className='w-1/3 h-24'>
                                        <img className='' src={img} alt='' />
                                    </div>
                                    <div className='w-2/3'>
                                        <h1 className='text-2xl text-white font-abc underline'>{onMainnet ? heading : "18x Cade Coin"}</h1>
                                        {/* <span className='flex justify-end text-white font-abc text-xl mr-5 underline'>{onMainnet ? `= 2 USDC/2300 BONK` : "---"}</span> */}
                                    </div>
                                </div>
                                <div className='w-full flex justify-center items-center absolute top-1/3 mt-3'>
                                    <h1 className='text-xl text-yellow-300 font-abc'>Network : <span className='underline bg-black p-1'>{network}</span></h1>
                                </div>
                                <div className='w-full flex justify-center items-center absolute top-1/3 -translate-y-6'>
                                    <h1 className='text-xl text-yellow-300 font-abc'>Payment Method : <span className='underline bg-black p-1'>{onMainnet ? paymentMethod : "--"}</span></h1>
                                </div>
                                <div className='w-full flex justify-center items-center absolute bottom-0 mb-2'>
                                    <h1 className='text-2xl text-white font-abc'>No Transaction <span className='animate-blink'>...</span></h1>
                                </div>
                            </div>
                        </div>



                        <div style={{ height: "12rem" }} className='absolute top-1/2 -translate-y-1/4 mt-16 border-4 border-gray-500 rounded-xl w-72 bg-slate-800 flex justify-center items-center'>
                            {!onMainnet ? (
                                <>
                                    <button onClick={doTransactionWithUSDC} className="px-2 py-4 text-3xl font-abc bg-transparent  hover:bg-blue-500 text-white font-semibold hover:text-white  border border-white hover:border-transparent rounded">
                                        Get Devnet Cade ✔
                                    </button>
                                </>
                            ) : (
                                <>
                                    <div>
                                        <div className='flex flex-col'>
                                            <div className='h-1/2 flex flex-row gap-x-5 mt-1'>
                                                <div onClick={showPrevItem} className='flex flex-col items-center w-1/2 cursor-pointer'>
                                                    <div className='border-4 border-white flex justify-center items-center w-14 h-10 mt-2 rounded-lg bg-gray-900'>
                                                        <MdOutlineKeyboardDoubleArrowLeft className='text-white' />
                                                    </div>
                                                    <div className='flex justify-center w-max'>
                                                        <h1 className='text-white font-abc text-xl'>Select Prev</h1>
                                                    </div>
                                                </div>


                                                <div onClick={showNext} className='flex flex-col items-center w-1/2 cursor-pointer'>
                                                    <div className='border-4 border-white flex justify-center items-center w-14 h-10 mt-2 rounded-lg bg-gray-900'>
                                                        <MdOutlineKeyboardDoubleArrowRight className='text-white' />
                                                    </div>
                                                    <div className='flex justify-center w-max'>
                                                        <h1 className='text-white font-abc text-xl'>Select Next </h1>
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="mt-2 border-t-2 border-gray-700"></div>
                                            <div className='h-1/2 flex flex-row mt-3 mb-1'>
                                                <div className='w-1/3 ml-1'>
                                                    <h1 className=' text-white font-abc text-lg'>Select Pay Method</h1>
                                                </div>
                                                <div onClick={doTransactionWithUSDC} className='flex  flex-col items-center w-1/3 cursor-pointer'>
                                                    <div className='border-4 border-blue-400 flex justify-center items-center w-14 h-10 mt-2 rounded-lg bg-gray-900'>
                                                        <img src='/usdc.png' alt='' />
                                                    </div>
                                                    <h1 className='text-white font-abc text-xl mt-1'>USDC✅</h1>
                                                </div>
                                                <div onClick={doTheTransactionWithBONK} className='flex flex-col items-center  w-1/3 cursor-pointer'>
                                                    <div className='border-4 border-yellow-400 flex justify-center items-center w-14 h-10 mt-2 rounded-lg bg-gray-900'>
                                                        <img className='h-7 w-7 rounded-xl' src='/bonk.jpg' alt='' />
                                                    </div>
                                                    <h1 className='text-white font-abc text-xl mt-1'>BONK</h1>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </>
                            )}
                        </div>
                        <div className='flex justify-center'>
                            <button style={{width : '90%'}} className="absolute bottom-0 -translate-y-5 text-3xl font-abc bg-slate-800 hover:bg-blue-500 text-white border-4 border-gray-500 rounded-lg">
                               Buy Now
                            </button>
                        </div>
                        <div className='rounded-t-xl absolute bottom-0 w-72 h-3 bg-gray-900 border-2 border-gray-300 overflow-y-hidden'></div>
                    </div>
                </div>
                <div className='flex justify-center' style={{ marginTop: '-220px' }}>
                    <div id='second' className='relative overflow-y-hidden bg-center bg-[url("/ig.png")] object-center bg-no-repeat border-2 border-gray-600 flex flex-col justify-center items-center bg-slate-800 w-72 h-96 rounded-xl'>
                        <div className='absolute top-0 left-0 m-3'>
                            <img class="w-10 h-10 p-1 rounded-full ring-1 ring-gray-300 dark:ring-gray-500" src="/cadenew.png" alt="Bordered avatar" />
                        </div>
                        <div className='absolute top-0 right-0 m-3'>
                            <h1 className='text-white font-abc text-3xl'>----</h1>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default CardMachineForBuyUSDC