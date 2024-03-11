import React from 'react'

const RandomGame = () => {
    return (
        <>
            <div className='flex justify-center items-center'>
                <h1 className="text-white text-5xl font-abc ml-8 mt-5 font-bold">
                    Play Random Game🔥
                </h1>
            </div>
            <div style={{ backgroundColor: "#191414", borderColor: "yellow", borderWidth: 3, borderRadius: 5 }} className='rounded-md'>

                <div class="grid grid-cols-2 mt-10">
                    <div className='flex flex-row'>
                        <div style={{ width: 100, height: 100, alignItems: "center" }} className='flex justify-center bg-red-500'>
                            <h1 className='font-abc text-white text-6xl'>1</h1>
                        </div>
                        <img src='/ca11.png' height={300} width={300} alt='' />
                    </div>
                    <div className='-rotate-12'>
                        <img src='/ca22.png' height={300} width={300} alt='' />
                        <div style={{ width: 100, height: 100, alignItems: "center" }} className='flex justify-center bg-yellow-500'>
                            <h1 className='font-abc text-white text-6xl'>2</h1>
                        </div>
                    </div>
                    <div className='-rotate-12'>
                    <div style={{ width: 100, height: 100, alignItems: "center" }} className='flex justify-center bg-green-500'>
                            <h1 className='font-abc text-white text-6xl'>3</h1>
                        </div>
                        <img src='/ca33.png' height={300} width={300} alt='' />
                    </div>
                    <div>
                    
                        <img src='/ca44.png' height={300} width={300} alt='' />
                        <div style={{ width: 100, height: 100 , alignItems: "center" }} className='flex justify-center bg-orange-500'>
                            <h1 className='font-abc text-white text-6xl'>4</h1>
                        </div>
                    </div>
                </div>
                <div id="bottom" className='flex justify-center mt-14'>
                    <div style={{ width: '100%', maxWidth: '500px' }} className='flex flex-row h-24 bg-black items-center rounded-lg border-2 border-white'>
                        <div className='items-center m-1'>
                            <button type="button" class="py-5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border-2 border-white hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Choose</button>
                        </div>
                        <div id="red" style={{ width: "25%", height: "70%", margin: 5 }} className='bg-red-500 items-center flex justify-center border-4 border-white'>
                            <h1 className='font-abc text-white text-6xl'>?</h1>

                        </div>
                        <div style={{ width: "25%", height: "70%", margin: 5 }} className='bg-orange-500 items-center flex justify-center border-4 border-white'>
                            <h1 className='font-abc text-white text-6xl'>?</h1>

                        </div>
                        <div style={{ width: "25%", height: "70%", margin: 5 }} className='bg-green-500 items-center flex justify-center border-4 border-white'>
                            <h1 className='font-abc text-white text-6xl'>?</h1>
                        </div>
                        <div style={{ width: "25%", height: "70%", margin: 5 }} className='bg-yellow-400 items-center flex justify-center border-4 border-white'>
                            <h1 className='font-abc text-white text-6xl'>?</h1>
                        </div>
                        <div className='items-center m-1'>
                            <button type="button" class="py-5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">PlayNow</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default RandomGame
