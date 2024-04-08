import React, { useState } from 'react'
import { FaGift } from "react-icons/fa6";
import WelcomeBoard from '../Common/WelcomeBoard';
import { MiniStore } from '../Data/data'
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import Swipe from 'react-easy-swipe';

const DifferentGameSection = ({ sectionName, UnityGameData, spotlight }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [translate, setTranslate] = useState(false)
    const [translate2, setTranslate2] = useState(false)

    const showNextGame = () => {
        if (currentIndex <= MiniStore.length - 2) {
            setCurrentIndex(currentIndex + 1)
        }
        else {
            setCurrentIndex(0)
        }
    }

    const showPrevGame = () => {
        if (currentIndex != 0) {
            setCurrentIndex(currentIndex - 1)
        }
    }

    const showAnimatePrev = () => {
        setTranslate(true)

        setTimeout(() => {
            setTranslate(false)
            showPrevGame()
        }, 200)
    }

    const showAnimateNext = () => {
        setTranslate2(true)

        setTimeout(() => {
            setTranslate2(false)
            showNextGame()
        }, 200)
    }

    return (
        <>
            <div className='flex justify-center items-center'>
                <h1 className="text-white text-5xl font-abc ml-8 mt-5 font-bold">
                    {sectionName}
                </h1>
            </div>
            <div style={{ height: "32rem" }} className="border-4 border-yellow-500 relative rounded-lg bg-[url('/brickwall.jpg')] w-full flex justify-center items-end mt-5 mb-5">

                <div className='absolute top-0 left-0 xl:translate-x-16  ml-1 lg:ml-10 flex flex-row'>
                    <img className='w-20 h-20' src={`/${spotlight}.png`} alt='' />
                </div>

                <div className='absolute top-0 right-0 xl:-translate-x-24 mr-1 lg:ml-10 flex flex-row'>
                    <img className='w-20 h-20' src={`/${spotlight}.png`} alt='' />
                </div>

                <div class="rotate-90 lg:rotate-0 xl:block absolute top-1/2 lg:top-2/3 -translate-y-10 lg:translate-y-0 left-0 -translate-x-1/4 lg:translate-x-3 flex justify-center">

                    <div class="cursor-default flex justify-center items-center w-52 lg:w-48 xl:w-60 h-24 font-abc text-4xl bg-gray-800 text-white border-2 border-yellow-400 focus:outline-none rounded-lg">
                        <div className='relative w-36 h-4 bg-black rounded-md'>
                            <div className={`absolute w-4 h-4 left-1/2 -translate-x-1/2 rounded-full bg-red-500 transition delay-100 ease-linear transform ${translate ? '-translate-x-28' : 'translate-x-0'}`}></div>
                        </div>
                        <div className='absolute top-0 left-0 translate-x-5'>
                            <p className='text-2xl'>Prev</p>
                        </div>
                        <div className='absolute bottom-0 right-0 -translate-x-8 mb-1'>
                            <button onClick={showAnimatePrev} className="px-1 lg:px-0 mt-5 text-xl font-abc bg-transparent  hover:bg-blue-500 text-white font-semibold hover:text-white  border border-white hover:border-transparent rounded">
                                Show Prev
                            </button>
                        </div>
                    </div>
                </div>



                <div class="-rotate-90 lg:rotate-0 xl:block absolute top-1/2 lg:top-2/3 right-0 -translate-y-10 lg:translate-y-0 translate-x-1/4 lg:-translate-x-3 flex justify-center">

                    <div class="cursor-default flex justify-center items-center w-52 lg:w-48 xl:w-60 h-24 font-abc text-4xl bg-gray-800 text-white border-2 border-yellow-400 focus:outline-none rounded-lg">
                        <div className='relative w-36 h-4 bg-black rounded-md'>
                            <div className={`absolute w-4 h-4 left-1/2 -translate-x-1/2 rounded-full bg-red-500 transition delay-100 ease-linear transform ${translate2 ? 'translate-x-24' : 'translate-x-0'}`}></div>
                        </div>
                        <div className='absolute top-0 right-0 -translate-x-5 mt-1'>
                            <p className='text-2xl'>Next</p>
                        </div>
                        <div className='absolute bottom-0 translate-x-5 left-0 mb-1'>
                            <button onClick={showAnimateNext} className="px-1 lg:px-0 mt-5 text-xl font-abc bg-transparent  hover:bg-blue-500 text-white font-semibold hover:text-white  border border-white hover:border-transparent rounded">
                                Show Next
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    {UnityGameData.map((item, index) => {
                        if (index == currentIndex) {
                            return (
                                <>
                                    <div class="absolute left-0 top-0 ml-5 hidden xl:block z-10">
                                        <div class="relative">
                                            <div class="flex justify-end flex-row">
                                                <img class="h-40 w-28" src='/pipe.png' alt='pole' />
                                            </div>
                                            <div class="absolute top-1/2 -translate-y-2 left-0">
                                                <WelcomeBoard message={item.name} width={"64"} showArrow={false} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='absolute top-0 left-1/2 -translate-x-1/2'>
                                        <div className='relative'>
                                            <img className='h-32 w-28' src='/pipe.png' alt='' />
                                            <div style={{ borderWidth: "6px" }} className={`absolute top-1/2 border-black w-40 left-1/2 -translate-x-1/2 h-24 flex justify-center items-center bg-${item.color} rounded-lg`}>
                                                <h1 className='text-7xl font-extrabold font-abc text-white'>{item.machineNumber}</h1>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="absolute right-0 top-0 mr-5 hidden xl:block z-10">
                                        <div class="relative">
                                            <div class="flex justify-end flex-row">

                                                <img class="h-40 w-28" src='/pipe.png' alt='pole' />
                                            </div>
                                            <div class="absolute top-1/2 -translate-y-2 right-0">
                                                <WelcomeBoard message={`By ${item.maker}`} width={"64"} showArrow={true} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='absolute w-max bottom-0 left-1/2 transform -translate-x-1/2 rounded-lg shadow'>
                                        <img className="rounded-t-lg w-72 h-72" src={item.img} alt="" />
                                    </div>
                                </>
                            )
                        }
                    })}
                </div>
            </div>
        </>
    )
}

export default DifferentGameSection