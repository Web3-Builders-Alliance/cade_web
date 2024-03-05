import React from 'react'
import Link from 'next/link';

const PlayMore = () => {
    const Data = [
        {
            name: "Tower Defence",
            img: "/tower.jpg",
            link: "/Games/TowerDefence",
            desc: "Games where the goal is to defend your base by enemy.",
            arcadeMachineImage: "/a6.png"
        },
        {
            name: "Mole Smash",
            img: "/molegame.jpeg",
            link: "/Games/MoleSmash",
            desc: "Control a spaceship and defend Earth from waves of alien.",
            arcadeMachineImage: "/a2.png"
        },
        {
            name: "Skyline Skaddle",
            img: "/skygame.jpg",
            link: "/Games/SkylineSkaddle",
            desc: "Ready to race against the best in this high-speed car game!",
            arcadeMachineImage: "/a3.png"
        },
        {
            name: "Four In Line",
            img: "/fourinline.png",
            link: "/Games/FourInLine",
            desc: "A classic strategy game of aligning four tokens in a row.",
            arcadeMachineImage: "/a4.png"
        },
        {
            name: "Tile Survive",
            img: "/tile.jpg",
            link: "/Games/TileSurvive",
            desc: "Checkmate your way to victory in this classic chess game!",
            arcadeMachineImage: "/a5.png"
        },
        {
            name: "Coin Flip",
            img: "/coinflip.jpg",
            link: "/Games/CoinFlip",
            desc: "A retro coin flip game of digital twist on a classic 50/50 chance.",
            arcadeMachineImage: "/a8.png"
        },
    ];
    return (
        <>
            <div className="p-12 bg-gray-950 rounded-lg flex flex-col w-max md:py-8 mt-8 md:mt-0 border-2 border-gray-500">
                <div class="flex flex-row items-center justify-between">
                    <h5 class="text-4xl font-abc font-bold leading-none text-white underline">PlayMore</h5>
                    <div className="rounded-full w-4 h-4 bg-green-500 animate-blink"></div>

                </div>
                <div className="container px-5 py-5 mx-auto">
                    <div className="flex flex-col">
                        <div className="p-2">
                            <div className="flex flex-col">
                                {Data.map((item) => {
                                    return (
                                        <>
                                            <Link href={item.link}>
                                                <div className="mt-10" key={item.name}>
                                                    <div
                                                        href="#"
                                                        className="flex flex-col items-center rounded-lg shadow md:flex-row md:max-w-xl border border-gray-700 bg-gray-950 hover:bg-gray-700"
                                                    >
                                                        <img
                                                            className="object-cover rounded-t-lg h-36 w-36 md:rounded-none md:rounded-l-lg"
                                                            src={item.img}
                                                            alt="d"
                                                        />
                                                        <div className="flex flex-col justify-between p-4 leading-normal overflow-x-auto overflow-y-hidden">
                                                            <h5 className="font-abc mb-2 text-3xl font-bold tracking-tight text-white">
                                                                {item.name}
                                                            </h5>

                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlayMore