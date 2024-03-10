import React from 'react'
import GameLeaderBoard from '../components/GamePageComponents/GameLeaderBoard'

const LeaderBoard = () => {
    return (
        <>
            <div className='min-h-screen relative overflow-y-auto bg-[url("/brickwall.jpg")]'>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-x-4'>
                    <div className='absolute left-0'>
                        <img className='h-40 w-28 ml-5' src='/pipe.png' alt='pipe' />
                        <div className="left-0 translate-x-10 top-1/4 -translate-y-24 rounded-xl" style={{ height: 350, width: 280, backgroundColor: "white", borderWidth: 10, borderColor: "white ", background: "#191414" }}>
                            <GameLeaderBoard />
                        </div>
                    </div>
                    <div className='absolute left-1/4'>
                        <img className='h-40 w-28 ml-5' src='/pipe.png' alt='pipe' />
                        <div className="left-0 translate-x-10 top-1/4 -translate-y-24 rounded-xl" style={{ height: 350, width: 280, backgroundColor: "white", borderWidth: 10, borderColor: "white ", background: "#191414" }}>
                            <GameLeaderBoard />
                        </div>
                    </div>
                    <div className='absolute left-1/2'>
                        <img className='h-40 w-28 ml-5' src='/pipe.png' alt='pipe' />
                        <div className="left-0 translate-x-10 top-1/4 -translate-y-24 rounded-xl" style={{ height: 350, width: 280, backgroundColor: "white", borderWidth: 10, borderColor: "white ", background: "#191414" }}>
                            <GameLeaderBoard />
                        </div>
                    </div>
                    <div className='absolute right-0 -translate-x-1/2'>
                        <img className='h-40 w-28 ml-20' src='/pipe.png' alt='pipe' />
                        <div className="translate-x-1/3 top-1/4 -translate-y-24 rounded-xl" style={{ height: 350, width: 280, backgroundColor: "white", borderWidth: 10, borderColor: "white ", background: "#191414" }}>
                            <GameLeaderBoard />
                        </div>
                    </div>
                </div>
                {/* //bottom Part */}
                <div style={{ height: 350, width: 300, backgroundColor: "white", borderWidth: 10, borderColor: "white ", background: "#191414" }} className='z-10 absolute top-1/2 translate-x-10 translate-y-1/4'>
                    <GameLeaderBoard />
                </div>
                <div className='absolute top-1/2 left-1/4 -translate-x-1/2 translate-y-1/2 rotate-90'>
                    <img style={{height:350}} className='w-28 ml-5' src='/pipe.png' alt='pipe' />
                </div>
                <div style={{ height: 300, width: '40%', backgroundColor: "white", borderWidth: 10, borderColor: "white ", background: "#191414" }} className='z-10 absolute top-1/2 left-1/4 translate-x-10 translate-y-1/4 mt-12 ml-10'>
                    <div className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-row gap-x-5'>
                        <div>
                            <h1 className='font-abc text-4xl text-white items-center underline'>
                                कैड
                            </h1>
                        </div>
                        <div>
                            <h1 className='font-abc text-4xl text-yellow-500 items-center underline'>
                                CADE
                            </h1>
                        </div>
                        <div>
                            <h1 className='font-abc text-4xl text-white items-center underline'>
                                ケイド
                            </h1>
                        </div>
                    </div>
                    <div className='absolute left-1/2 -translate-x-1/2 bottom-0 mb-2'>
                        <h1 className='font-abc text-3xl text-yellow-500 items-center underline'>
                            Space For Advertisment
                        </h1>
                    </div>
                </div>
                <div className='absolute top-1/2 right-1/4 translate-x-1/2 translate-y-1/2 rotate-90'>
                    <img style={{height:350}} className='w-28 ml-5' src='/pipe.png' alt='pipe' />
                </div>
                <div style={{ height: 350, width: 300, backgroundColor: "white", borderWidth: 10, borderColor: "white ", background: "#191414" }} className='z-10 absolute right-0 top-1/2 -translate-x-10 translate-y-1/4'>
                    <GameLeaderBoard />
                </div>
                {/* //bottom Part */}
            </div>
        </>
    )
}

export default LeaderBoard
