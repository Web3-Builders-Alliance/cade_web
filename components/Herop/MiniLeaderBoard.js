import React from 'react'
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
const MiniLeaderBoard = () => {
    return (
        <>
            <div class="mt-5 w-full max-w-md border border-gray-600  shadow lg:p-12 p-5 rounded-lg bg-gray-950">
                <div class="flex flex-row items-center justify-between mb-4">
                    <h5 class="text-4xl font-abc font-bold leading-none text-white">LeaderBoard</h5>
                    <div className="rounded-full w-4 h-4 bg-yellow-300 animate-blink"></div>
                </div>
                <div class="flow-root">
                    <ul role="list" class="divide-y divide-gray-700">
                        <li class="py-3 sm:py-4">
                            <div class="flex items-center">
                                <div class="flex-shrink-0">
                                    <img class="w-12 h-12 rounded-full" src="/gmedal.png" alt="Neil image" />
                                </div>
                                <div class="flex-1 min-w-0 ms-4">
                                    <p class="text-2xl font-abc truncate text-white">
                                        Neil Sims
                                    </p>

                                </div>
                                <div class="gap-2 flex flex-row items-center text-base font-semibold text-white">
                                    <BiSolidUpArrow className="text-green-400 text-2xl" />
                                    320 XP
                                </div>
                            </div>
                        </li>
                        <li class="py-3 sm:py-4">
                            <div class="flex items-center ">
                                <div class="flex-shrink-0">
                                    <img class="w-12 h-12 rounded-full" src="/smedal.png" alt="Bonnie image" />
                                </div>
                                <div class="flex-1 min-w-0 ms-4">
                                    <p class="text-2xl font-abc truncate text-white">
                                        Bonnie Green
                                    </p>

                                </div>
                                <div class="gap-2 flex flex-row items-center text-base font-semibold text-white">
                                    <BiSolidUpArrow className="text-green-400 text-2xl" />
                                    280 XP
                                </div>
                            </div>
                        </li>
                        <li class="py-3 sm:py-4">
                            <div class="flex items-center">
                                <div class="flex-shrink-0">
                                    <img class="w-12 h-12 rounded-full" src="/bmedal.png" alt="Michael image" />
                                </div>
                                <div class="flex-1 min-w-0 ms-4">
                                    <p class="text-2xl font-abc truncate text-white">
                                        Michael Gough
                                    </p>

                                </div>
                                <div class="gap-2 flex flex-row items-center text-base font-semibold text-white">
                                    <BiSolidUpArrow className="text-green-400 text-2xl" />
                                    180 XP
                                </div>
                            </div>
                        </li>

                        <li class="pt-3 pb-0 sm:pt-4">
                            <h1 className='text-3xl text-white font-abc'>Your Ranking</h1>
                            <div class="flex items-center mt-2">
                                <FaUserCircle className='text-3xl text-yellow-300' />
                                <div class="flex-1 min-w-0 ms-4">
                                    <p class="text-2xl font-abc  truncate text-white">
                                        Thomes Lean
                                    </p>
                                    <p class="font-abc text-xl truncate text-gray-400">
                                        Position - 23
                                    </p>
                                </div>
                                <div class="gap-2 flex flex-row items-center text-base font-semibold text-white">
                                    <BiSolidDownArrow className="text-red-400 text-2xl" />
                                    9 XP
                                </div>
                            </div>
                            <a href="#" class="text-2xl font-abc mt-10 inline-flex items-center text-yellow-300 hover:underline">
                                View More
                                <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default MiniLeaderBoard