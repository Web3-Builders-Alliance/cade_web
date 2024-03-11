import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
const GameLeaderBoard = ({ showPlayerRank }) => {
    return (
        <>


            <div class="flow-root p-5">
                <h1 className='font-abc text-white text-4xl underline'>LeaderBoard</h1>
                <ul role="list" class="divide-y-2 divide-white mt-1">
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

                        </div>
                    </li>
                    <li class="py-3 sm:py-4">
                        <div class="flex items-center ">
                            <div class="flex-shrink-0">
                                <img class="w-12 h-12 rounded-full" src="/smedal.png" alt="Bonnie image" />
                            </div>
                            <div class="flex-1 min-w-0 ms-4">
                                <p class="text-2xl font-abc text-white">
                                    Bonnie Green
                                </p>

                            </div>

                        </div>
                    </li>
                    <li class="py-3 sm:py-4">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <img class="w-12 h-12 rounded-full" src="/bmedal.png" alt="Michael image" />
                            </div>
                            <div class="flex-1 min-w-0 ms-4">
                                <p class="text-2xl font-abc text-white">
                                    Michael Gough
                                </p>

                            </div>

                        </div>
                    </li>
                    {showPlayerRank ? (
                        <>
                            <li class="pt-3 pb-0 mt-5">
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
                            </li>

                        </>
                    ) : (
                        <></>
                    )}

                </ul>
            </div>

        </>
    )
}

export default GameLeaderBoard