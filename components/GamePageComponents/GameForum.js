import React from 'react'
import CadeInput from '../CadeInput/CadeInput';
const GameForum = () => {
    const Data = [
        {
            name: "Space Invaders",
            img: "fourinline.png",
            link: "/Games/SpaceInvaders",
            desc: "ddReady to race against the best in this high-speed car game!",
            no: "1"
        },
        {
            name: "Chess",
            img: "/chess.avif",
            link: "/Games/Chess",
            desc: "Ready to race against the best in this high-speed car game! ",
            no: "2"
        },
        

    ];
    return (
        <>
            <section class="text-gray-600 body-font mx-5">
                <div className="flex justify-start">

                </div>
                <div className="container">
                    <div class="flex justify-start mt-1 flex-wrap -m-5  sm:px-2 ">
                        <>
                            <div class="mt-2 w-full max-w-lg rounded-lg shadow p-8 bg-gray-900 border-2 border-white">
                                <div class="flex flex-row items-center justify-between mb-4">
                                    <h5 class="text-4xl font-abc font-bold leading-none text-white underline">GameForum</h5>
                                    <div className="rounded-full w-4 h-4 bg-blue-300 animate-blink"></div>

                                </div>
                                <div class="flow-root">
                                    <ul role="list" class="divide-y-2 divide-white">
                                        {Data.map((item) => {

                                            return (
                                                <>
                                                    <li class="py-3 sm:py-4">
                                                        <div class="flex items-center space-x-4">
                                                            <div class="flex-shrink-0">
                                                                <img class="w-12 h-12 rounded-full" src={`https://picsum.photos/20${item.no}`} alt="Neil image" />
                                                            </div>
                                                            <div class="flex-1 min-w-0">
                                                                <p class="font-abc text-2xl font-medium text-white">
                                                                    Username
                                                                </p>
                                                                <p class="font-abc text-lg  truncate text-gray-400">
                                                                    In publishing and graphic design, Lorem ipsum is a placeholder
                                                                </p>

                                                            </div>

                                                        </div>
                                                    </li>
                                                </>
                                            )
                                        })}

                                    </ul>
                                </div>

                                <CadeInput />

                            </div>
                        </>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GameForum