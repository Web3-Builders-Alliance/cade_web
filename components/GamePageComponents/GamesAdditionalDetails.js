import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

const GamesAdditionalDetails = () => {
    return (
        <div className="bg-gray-900 p-6 flex flex-col rounded-xl mt-5 h-max border-2 border-white">

            <div className="flex flex-row">
                <div className="flex justify-center w-3/4">
                    <h1 className="text-3xl font-abc text-white">Claim Winning Tickets</h1>
                </div>
                <div className="flex justify-center w-1/4">
                    <h1 className="text-3xl font-abc text-white ml-2">Played By</h1>
                </div>
            </div>

            <div className="flex flex-row">
                <div className='flex justify-center flex-row gap-x-5 block xl:hidden border border-gray-400 rounded-lg bg-green-950 w-full h-28 lg:h-24 flex justify-start items-center mt-3'>
                    <button className="m-2 px-2 py-2 text-2xl font-abc bg-transparent  hover:bg-blue-500 text-white font-semibold hover:text-white  border border-white hover:border-transparent rounded">
                        Claim Tickets
                    </button>
                    <button className="m-2 px-2 py-2 text-2xl font-abc bg-transparent  hover:bg-blue-500 text-white font-semibold hover:text-white  border border-white hover:border-transparent rounded">
                        Redeem Tickets
                    </button>
                </div>
                <div className="hidden xl:block w-3/4 overflow-x-auto overflow-y-hidden">
                    <div className='border-2 border-gray-400 rounded-lg bg-gray-900 w-full h-28 lg:h-24 flex justify-start items-center mt-3'>

                        <div className='flex justify-center items-center w-2/4 ml-5 bg-gray-400 h-7 rounded'>
                            <div className='w-1/3'>
                                <div className='flex items-center'>
                                    <h1 className='text-black text-2xl font-abc ml-5'>Tickets</h1>
                                    <span className='ml-1'><FaLongArrowAltRight className='text-xl text-black' /></span>
                                </div>
                            </div>
                            <div className='flex justify-center items-center w-1/3 h-5 ml-10 mr-10 bg-white rounded-sm'>
                            <div className='bg-gray-700 h-1 w-1/2 rounded-md'>

                            </div>
                            </div>

                        </div>
                        <div className='w-2/4 flex flex-row ml-10 gap-x-5'>
                            <div className='flex flex-col border-2 border-white bg-blue-400 w-1/2 h-16 rounded-lg'>
                                <div className='flex justify-center'>
                                    <h1 className='text-white h-1/2 font-abc text-xl'>Claimable Tickets: 2</h1>
                                </div>
                                <div className='flex justify-center'>
                                    <button className='border-2 border-white px-5 mt-1 rounded-md text-white bg-gray-800 font-abc'>Claim</button>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center border border-white bg-blue-400 w-1/2 h-16 mr-5 rounded-lg'>
                                <div className='flex justify-center'>
                                    <h1 className='text-white h-1/2 font-abc text-xl'>Your Tickets: 0</h1>
                                </div>
                                <div className='flex justify-center'>
                                    <button className='border-2 border-white px-5 mt-1 rounded-md text-white bg-gray-800 font-abc'>Redeem</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ml-5 flex flex-row justify-center items-center w-1/4 overflow-x-auto overflow-y-hidden">
                    <img class="flex ml-2 justify-center w-12 h-12 p-1 rounded-full ring-1 ring-gray-300 dark:ring-gray-500" src="https://picsum.photos/200" alt="Bordered avatar" />
                    <img class="flex ml-2 justify-center w-12 h-12 p-1 rounded-full ring-1 ring-gray-300 dark:ring-gray-500" src="https://picsum.photos/201" alt="Bordered avatar" />
                    <img class="flex ml-2 justify-center w-12 h-12 p-1 rounded-full ring-1 ring-gray-300 dark:ring-gray-500" src="https://picsum.photos/202" alt="Bordered avatar" />
                </div>
            </div>
        </div>

    )
}

export default GamesAdditionalDetails