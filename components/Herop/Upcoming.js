import React from 'react'
import { MdUpcoming } from "react-icons/md";
const Upcoming = () => {
    return (
        <>
            <div className='mt-10 gap-2 flex flex-row justify-center '>
                <h1 className='text-4xl font-bold font-abc text-white'>Upcomings</h1>
                <MdUpcoming className='mt-1 text-yellow-300 text-4xl' />
            </div>
            <div class="p-2 mt-10 rounded-lg shadow bg-gray-950 border border-gray-600">

                <a href="#">
                    <img class="w-16 h-16 rounded-t-lg" src="https://firebasestorage.googleapis.com/v0/b/shrine-76128.appspot.com/o/cadenew.png?alt=media&token=3bf0a4a4-cb44-4f23-b7ef-ff45e243031c" alt="" />
                </a>
                <div class="p-2">
                    <a href="#">
                        <h5 class="mb-2 text-4xl font-abc tracking-tight text-white">Cade Alpha vserions coming out soon 😉</h5>
                    </a>
                    <p class="text-xl mb-3 font-abc text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <button type="button" class="mt-5 font-abc text-2xl bg-gray-950 text-white border-2 border-yellow-400 focus:outline-none rounded-lg px-3 py-3 me-2 mb-2 ">More Details</button>
                </div>
            </div>
        </>
    )
}

export default Upcoming