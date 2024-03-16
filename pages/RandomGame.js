import Link from 'next/link'
import React, { useRef, useState } from 'react'
const RandomGame = () => {
    const [gameLink, setLink] = useState("")
    const refOne = useRef()
    const refTwo = useRef()
    const refThree = useRef()
    const refFour = useRef()
    const refButton = useRef()

    const handleRandom = () => {
        const randomNumber = Math.floor(Math.random() * 5);
        switch (randomNumber) {
            case 1:
                refOne.current.style.backgroundColor = "red"
                refTwo.current.style.backgroundColor = "#374151"
                refThree.current.style.backgroundColor = "#374151"
                refFour.current.style.backgroundColor = "#374151"
                refButton.current.style.backgroundColor = "red"
                setLink("/Games/TowerDefence")
                break;
            case 2:
                refTwo.current.style.backgroundColor = "yellow"
                refOne.current.style.backgroundColor = "#374151"
                refThree.current.style.backgroundColor = "#374151"
                refFour.current.style.backgroundColor = "#374151"
                refButton.current.style.backgroundColor = "yellow"
                setLink("/Games/MoleSmash")
                break;
            case 3:
                refThree.current.style.backgroundColor = "green"
                refOne.current.style.backgroundColor = "#374151"
                refTwo.current.style.backgroundColor = "#374151"
                refFour.current.style.backgroundColor = "#374151"
                refButton.current.style.backgroundColor = "green"
                setLink("/Games/SkylineSkaddle")
                break;
            case 4:
                refFour.current.style.backgroundColor = "orange"
                refOne.current.style.backgroundColor = "#374151"
                refTwo.current.style.backgroundColor = "#374151"
                refThree.current.style.backgroundColor = "#374151"
                refButton.current.style.backgroundColor = "orange"
                setLink("/Games/CoinFlip")
                break;
        }
    }

    return (
        <>
            <div className='flex justify-center items-center'>
                <h1 className="text-white text-5xl font-abc ml-8 mt-5 font-bold">
                    Play Random Game🔥
                </h1>
            </div>
            <div style={{ backgroundColor: "#191414", borderColor: "yellow", borderWidth: 3, borderRadius: 5 }} className='rounded-md'>

                <div class="grid grid-cols-2 mt-10">
                    <div className='flex flex-row rotate-6'>
                        <div style={{ width: 100, height: 100, alignItems: "center" }} className='flex justify-center bg-red-500 border-4 border-white'>
                            <h1 className='font-abc text-white text-6xl'>1</h1>
                        </div>
                        <div className='flex justify-center items-center bg-red-500 border-4 border-white'>
                            <img src='/ca11.png' height={300} width={300} alt='' />
                        </div>
                    </div>
                    <div className='-rotate-12'>
                        <div className='bg-yellow-400 flex justify-center border-4 border-white'>
                            <img src='/ca22.png' height={300} width={300} alt='' />
                        </div>
                        <div style={{ width: 100, height: 100, alignItems: "center" }} className='flex justify-center bg-yellow-500 border-4 border-white'>
                            <h1 className='font-abc text-white text-6xl'>2</h1>
                        </div>
                    </div>
                    <div className='-rotate-12'>
                        <div style={{ width: 100, height: 100, alignItems: "center" }} className='flex justify-center bg-green-500 border-4 border-white'>
                            <h1 className='font-abc text-white text-6xl'>3</h1>
                        </div>
                        <div className='bg-green-500 flex justify-center border-4 border-white'>
                            <img src='/ca33.png' height={300} width={300} alt='' />
                        </div>
                    </div>
                    <div>
                        <div className='bg-orange-500 flex justify-center border-4 border-white'>
                            <img src='/ca44.png' height={300} width={300} alt='' />
                        </div>
                        <div style={{ width: 100, height: 100, alignItems: "center" }} className='flex justify-center bg-orange-500 border-4 border-white'>
                            <h1 className='font-abc text-white text-6xl'>4</h1>
                        </div>
                    </div>
                </div>
                <div id="bottom" className='flex justify-center mt-14'>
                    <div style={{ width: '100%', maxWidth: '500px' }} className='flex flex-row h-24 bg-black items-center rounded-lg border-2 border-white'>
                        <div className='items-center m-1'>
                            <button onClick={handleRandom} type="button" class="py-5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border-2 border-white hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Choose</button>
                        </div>
                        <div ref={refOne} id="red" style={{ width: "25%", height: "70%", margin: 5 }} className='bg-gray-700 items-center flex justify-center border-4 border-white'>
                            <h1 className='font-abc text-gray-700 text-6xl'>1</h1>

                        </div>
                        <div ref={refTwo} style={{ width: "25%", height: "70%", margin: 5 }} className='bg-gray-700 items-center flex justify-center border-4 border-white'>
                            <h1 className='font-abc text-gray-700 text-6xl'>2</h1>

                        </div>
                        <div ref={refThree} style={{ width: "25%", height: "70%", margin: 5 }} className='bg-gray-700 items-center flex justify-center border-4 border-white'>
                            <h1 className='font-abc text-gray-700 text-6xl'>3</h1>
                        </div>
                        <div ref={refFour} style={{ width: "25%", height: "70%", margin: 5 }} className='bg-gray-700 items-center flex justify-center border-4 border-white'>
                            <h1 className='font-abc text-gray-700 text-6xl'>4</h1>
                        </div>
                        <div className='items-center m-1'>
                            <Link href={gameLink}>
                                <button ref={refButton} type="button" class="py-5 px-5 me-2 mb-2 font-medium font-abc text-lg focus:outline-none bg-gray-600 rounded-lg border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-100 text-black">PlayNow</button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default RandomGame
