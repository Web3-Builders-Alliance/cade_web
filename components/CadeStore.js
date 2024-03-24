import React, { useState } from 'react'
import { FaGift } from "react-icons/fa6";
import WelcomeBoard from './Common/WelcomeBoard';
import { MiniStore } from './Data/data'
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import Swipe from 'react-easy-swipe';
const CadeStore = ({ openBottomSheet, currentPrizeData }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const showNextItem = () => {
        if (currentIndex <= MiniStore.length - 2) {
            setCurrentIndex(currentIndex + 1)
            console.log(currentIndex, MiniStore.length)

        }
        else {
            setCurrentIndex(0)
        }
    }

    const showPrevItem = () => {
        if (currentIndex != 0) {
            setCurrentIndex(currentIndex - 1)
        }
    }

    return (
        <>

            <div style={{ height: "32rem" }} className=" border-yellow-500 relative rounded-lg w-full flex justify-center items-end">

                <div class="absolute left-0 top-0 ml-5 hidden xl:block z-10">
                    <div class="relative">
                        <div class="flex justify-end flex-row">

                            <img class="h-40 w-28" src='pipe.png' alt='pole' />
                        </div>
                        <div class="absolute top-1/2 left-0">
                            <WelcomeBoard message={"Prizes"} width={"60"} />
                        </div>
                    </div>
                </div>

                {/* <div class="absolute right-0 top-0 mr-5 hidden xl:block z-10">
                    <div class="relative">
                        <div class="flex justify-end flex-row">

                            <img class="h-40 w-28" src='pipe.png' alt='pole' />
                        </div>
                        <div class="absolute top-1/2 right-0">
                            <WelcomeBoard message={"Tickets here"} width={"60"} />
                        </div>
                    </div>
                </div> */}
                {/* 
                <div className='absolute top-0 left-0 xl:translate-x-16  ml-1 lg:ml-10 flex flex-row'>
                    <img className='w-20 h-20' src='/spotlight.png' alt='' />
                </div>

                <div className='absolute top-0 right-0 xl:-translate-x-24 mr-1 lg:ml-10 flex flex-row'>
                    <img className='w-20 h-20' src='/spotlight.png' alt='' />
                </div> */}

                <div id='item' className="lg:ml-10 absolute border-4 border-white w-max top-1/4 left-1/2 transform -translate-x-1/2 lg:-translate-x-1/3 -translate-y-1/4 lg:-translate-y-1/3 rounded-lg shadow bg-gray-800 ">

                    <>
                        <div>
                            <div className='flex justify-center'>
                                <img className="rounded-t-lg w-48 h-48" src={currentPrizeData.img} alt="" />
                            </div>
                            <div className="flex justify-start items-center ml-3 mt-2">
                                <h5 className="mb-2 w-32 text-3xl font-abc font-bold tracking-tight text-white">{currentPrizeData.name}</h5>
                                <span className='font-abc mb-2 text-lg mr-3 text-yellow-400'>{currentPrizeData.price} Tickets</span>
                            </div>
                            <button onClick={openBottomSheet} className="mt-2 ml-3 mb-2 px-2 text-3xl font-abc bg-transparent  hover:bg-blue-500 text-white font-semibold hover:text-white  border border-white hover:border-transparent rounded">
                                Preview
                            </button>
                        </div>
                    </>



                </div>

                <div className='absolute ml-0 lg:ml-16 lg:left-1/4'>
                    <div className='relative w-72 lg:w-80 h-32 bg-blue-900 rounded-b-lg'>
                        <div className='mb-10 flex flex-col items-center bg-red-500 w-full absolute top-1/2'>
                            <h1 className='font-abc text-white text-5xl'>
                                Prize Center
                            </h1>
                        </div>

                        <div className='border-4 border-black absolute w-80 lg:w-96 h-10 mb-10 bg-blue-200 top-0 left-2/4 -translate-x-1/2'>

                        </div>

                    </div>
                    <div className='absolute top-0 -translate-y-12'>
                        <FaGift className='text-yellow-300 text-5xl' />
                    </div>
                    <div className='absolute top-0 right-0 -translate-y-12'>
                        <FaGift className='text-blue-300 text-5xl' />
                    </div>
                    <div onClick={showPrevItem} className='absolute cursor-pointer top-0 left-0 translate-y-1'>
                        <div className='flex justify-center items-center flex-row'>
                            <span className='text-2xl font-abc text-red-500'><MdOutlineKeyboardDoubleArrowLeft /></span>
                            <h1 className='text-2xl font-abc text-red-500'>Show Prev</h1>
                        </div>
                    </div>
                    <div onClick={showNextItem} className='absolute cursor-pointer top-0 right-0 translate-y-1'>
                        <div className='flex justify-center items-center flex-row'>
                            <h1 className='text-2xl font-abc text-red-500'>Show Next</h1>
                            <span className='text-2xl font-abc text-red-500'><MdOutlineKeyboardDoubleArrowRight />
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CadeStore