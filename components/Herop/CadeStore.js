import React, { useState } from 'react'
import { FaGift } from "react-icons/fa6";
import WelcomeBoard from '../Common/WelcomeBoard';
import { MiniStore } from '../Data/data'
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import Swipe from 'react-easy-swipe';
const CadeStore = () => {
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
            <div className='flex justify-center items-center'>
                <h1 className="text-white text-5xl font-abc ml-8 mt-5 font-bold">
                    Cade Store🔥
                </h1>
            </div>
            <div style={{ height: "32rem" }} className="border-4 border-yellow-500 relative rounded-lg bg-[url('/brickwall.jpg')] w-full flex justify-center items-end mt-5 mb-5">

                <div class="absolute left-0 top-0 ml-5 hidden xl:block z-10">
                    <div class="relative">
                        <div class="flex justify-end flex-row">

                            <img class="h-40 w-28" src='pipe.png' alt='pole' />
                        </div>
                        <div class="absolute top-1/2 left-0">
                            <WelcomeBoard message={"Redeem Your"} width={"60"} />
                        </div>
                    </div>
                </div>

                <div class="absolute right-0 top-0 mr-5 hidden xl:block z-10">
                    <div class="relative">
                        <div class="flex justify-end flex-row">

                            <img class="h-40 w-28" src='pipe.png' alt='pole' />
                        </div>
                        <div class="absolute top-1/2 right-0">
                            <WelcomeBoard message={"Tickets here"} width={"60"} />
                        </div>
                    </div>
                </div>

                <div className='absolute top-0 left-0 xl:translate-x-16  ml-1 lg:ml-10 flex flex-row'>
                    <img className='w-20 h-20' src='/spotlight.png' alt='' />
                </div>

                <div className='absolute top-0 right-0 xl:-translate-x-24 mr-1 lg:ml-10 flex flex-row'>
                    <img className='w-20 h-20' src='/spotlight.png' alt='' />
                </div>

                <div id='item' className="absolute border-4 border-white w-max top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 lg:-translate-y-1/3 rounded-lg shadow bg-gray-800 ">

                    {MiniStore.map((item, index) => {
                        if (index == currentIndex) {
                            return (
                                <>
                                    <div>
                                        <div className='flex justify-center'>
                                            <img className="rounded-t-lg w-48 h-48" src={item.img} alt="" />
                                        </div>
                                        <div className="flex justify-start items-center ml-3 mt-2">
                                            <h5 className="mb-2 w-32 text-3xl font-abc font-bold tracking-tight text-white">{item.name}</h5>
                                            <span className='font-abc mb-2 text-lg mr-3 text-yellow-400'>{item.price} Tickets</span>
                                        </div>
                                        <button className="mt-2 ml-3 mb-2 px-2 text-3xl font-abc bg-transparent  hover:bg-blue-500 text-white font-semibold hover:text-white  border border-white hover:border-transparent rounded">
                                            Redeem
                                        </button>
                                    </div>
                                </>
                            )
                        }
                    })}

                </div>

                <div class="hidden xl:block absolute top-2/3 left-0 translate-x-3 w-1/5 flex justify-center">
                    <button type="button" class="cursor-default font-abc text-4xl bg-orange-500 text-white border-2 border-yellow-400 focus:outline-none rounded-lg px-12 py-4 me-2 mb-2"><span>Prize<span> <FaGift className='flex justify-center ml-3' /></span></span></button>
                </div>

                <div class="absolute hidden xl:block top-2/3 right-0 -translate-x-3 w-1/5 flex justify-center">
                    <button type="button" class="cursor-default font-abc text-4xl bg-green-600 text-white border-2 border-yellow-400 focus:outline-none rounded-lg px-12 py-4 me-2 mb-2"><span>Center<span> <FaGift className='flex justify-center ml-6' /></span></span></button>
                </div>

                <div className='relative'>
                    <div className='relative w-72 lg:w-80 h-32 bg-blue-900 rounded-b-lg'>
                        <div className='mb-10 flex flex-col justify-center items-center h-full'>
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