import React from 'react'
import { BiSolidUpArrow } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
const 
GameDetails = ({maker , timePlayed}) => {
    return (
        <>
         
            <section class="text-gray-600 body-font rounded-t-xl bg-gray-900">
                {/* <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -m-4 text-center">
                    <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="font-abc sm:text-4xl text-3xl text-white">
                                Maker
                            </h2>
                            <p className="text-white font-abc text-3xl">Ben</p>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="font-abc sm:text-4xl text-3xl text-white">
                                XP
                            </h2>
                            <p className="text-white font-abc text-3xl">50+</p>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="font-abc sm:text-4xl text-3xl text-white">
                                Cade
                            </h2>
                            <p className="text-white font-abc text-3xl">+0.1</p>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="font-abc sm:text-4xl text-3xl text-white">
                                Played
                            </h2>
                            <p className="text-white font-abc text-3xl">500+</p>
                        </div>
                    </div>
                </div> */}
                <div className='flex flex-col'>
                <div className='flex flex-row'>
                <div className='flex justify-center p-4 w-2/5'>
                <h1 className='text-3xl font-abc text-white'>Maker</h1>  
                </div>
                <div className='flex justify-center p-4 w-1/5'>
                <h1 className='text-3xl font-abc text-white'>XP</h1>  
                </div>
                <div className='flex justify-center p-4 w-1/5'>
                <h1 className='text-3xl font-abc text-white'>Ticket</h1>  
                </div>
                <div className='flex justify-center p-4 w-1/5'>
                <h1 className='text-3xl font-abc text-white'>Play</h1>  
                </div>
                </div>

                <div className='flex flex-row justify-center'>
                  <div className='justify-center p-4  flex flex-row w-2/5 overflow-x-auto'>
                  <h1 className='text-3xl font-abc text-yellow-400'>{maker}</h1>
                  {/* <BiSolidUpArrow className='text-4xl text-green-400 p-2'/> */}
                  </div>
                  <div className='animate-none p-4 flex flex-row justify-center w-1/5'>
                  <h1 className='text-3xl font-abc text-blue-400'>+10</h1>
                  <BiSolidUpArrow className='hidden lg:block text-4xl text-blue-400 p-2'/>
                  </div>
                  <div className='animate-none p-4 flex flex-row justify-center w-1/5'>
                  <h1 className='text-3xl font-abc text-blue-400'>+1</h1>
                  <BiSolidUpArrow className='text-4xl hidden lg:block text-blue-400 p-2'/>
                  </div>
                  <div className='animate-none p-4 flex flex-row  justify-center w-1/5'>
                  <h1 className='text-3xl font-abc text-blue-400'>{timePlayed}</h1>
                  <BiSolidUpArrow className='text-4xl hidden lg:block text-blue-400 p-2'/>
                  </div>
                </div>
                </div>
                <div class="border-t-2 border-gray-700"></div>
            </section>
        </>
    )
}

export default GameDetails