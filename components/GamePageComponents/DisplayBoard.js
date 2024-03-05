import React from 'react'

const DisplayBoard = ({slug , machineNumber , color}) => {
    return (
        <div style={{backgroundColor : "black"}} className="relative h-36 w-80 lg:w-96 mb-3 bg-transparent flex items-center justify-center rounded-xl border-4 border-white">
            {/* Rectangle */}
            <div className="flex flex-row justify-center items-center absolute top-0 left-0 right-0 bottom-0">
                <div className={`ml-2 w-1/3 h-24 flex justify-center items-center bg-${color} rounded-lg`}>
                    <h1 className='text-6xl font-abc text-yellow-300'>{machineNumber}</h1>
                </div>
                <div className='w-2/3 h-max flex justify-center items-center'>
                    <h1 className='text-5xl font-abc text-yellow-300 break-words min-w-0 ml-2'>{slug}</h1>
                </div>



                {/* Blinking lights at corners */}
                <div className="rounded-full absolute top-0 left-0 w-4 h-4 bg-red-500 animate-blink"></div>
                <div className="rounded-full absolute top-0 left-1/4 w-4 h-4 bg-purple-500 animate-blink"></div>
                <div className="rounded-full absolute top-0 left-2/4 w-4 h-4 bg-cyan-400 animate-blink"></div>
                <div className="rounded-full absolute top-0 left-3/4 w-4 h-4 bg-yellow-300 animate-blink"></div>

                <div className="rounded-full absolute top-0 right-0 w-4 h-4 bg-teal-400 animate-blink"></div>
                <div className="rounded-full absolute top-1/2 right-0 w-4 h-4 bg-orange-400 animate-blink"></div>
                <div className="rounded-full absolute top-1/4 right-0 w-4 h-4 bg-blue-500 animate-blink"></div>
                {/* <div className="rounded-full absolute bottom-1 right-0 w-4 h-4 bg-blue-500 animate-blink"></div> */}

                <div className="rounded-full absolute top-1/4 left-0 w-4 h-4 bg-fuchsia-500 animate-blink"></div>
                <div className="rounded-full absolute top-2/4 left-0 w-4 h-4 bg-pink-600 animate-blink"></div>
                <div className="rounded-full absolute bottom-0 left-0 w-4 h-4 bg-green-500 animate-blink"></div>
                {/* <div className="rounded-full absolute top-3/4 left-0 w-4 h-4 bg-green-500 animate-blink"></div> */}


                <div className="rounded-full absolute bottom-0 left-1/4 transform -translate-x-1/2 w-4 h-4 bg-red-800 animate-blink"></div>
                <div className="rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-300 animate-blink"></div>
                <div className="rounded-full absolute bottom-0 right-1/2 transform translate-x-1/2 w-4 h-4 bg-green-400 animate-blink"></div>
                <div className="rounded-full absolute bottom-0 right-1/4 transform translate-x-1/2 w-4 h-4 bg-yellow-200 animate-blink"></div>
                <div className="rounded-full absolute bottom-0 right-0 w-4 h-4 bg-yellow-500 animate-blink"></div>
            </div>
        </div>
    )
}

export default DisplayBoard