import React, { useEffect } from "react";
import { truncateWalletAddress } from '../../hooks/Truncate'
import { useUserData, useIsUserExist, fetchUserData, initializeUser } from '../../hooks/handleData'
import { useWallet } from "@solana/wallet-adapter-react";

const CadeCard = () => {
    const {publicKey} = useWallet()
    const userData = useUserData()
    const isUserExist = useIsUserExist()
    const fetUserData = fetchUserData()
    const initUser = initializeUser()

    useEffect(() => {
        fetUserData()
    }, [publicKey , isUserExist ])

    return (
        <>
            <div>
                <h1 className='flex justify-center text-6xl text-orange-400 font-abc'>Arcade Card</h1>
                <div className='flex justify-center'>
                    <div style={{ height: "220px" }} class="w-96 border-2 border-gray-200 relative bg-center bg-[url('/ig.png')] object-center bg-no-repeat lg:h-1/2 p-6 mt-5 from-gray-300 to-purple-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className='flex justify-center flex-row'>
                            <div className='w-4/5'>
                                <img class="w-12 h-12 p-1 rounded-full ring-1 ring-gray-300 dark:ring-gray-500" src={isUserExist ? userData.userData.userPfpUrl : "/cadenew.png"} alt="Bordered avatar" />
                            </div>
                            <div className='flex justify-end w-2/5'>
                                <h1 className='text-white text-2xl font-abc'>{isUserExist ? truncateWalletAddress(userData.userData.walletAddress) : "--"}</h1>
                            </div>
                        </div>
                        <div class="m-3 absolute bottom-0 left-0">
                            <h1 className='text-3xl font-abc text-white'>
                                {isUserExist ? userData.userData.userName : "----"}
                            </h1>
                        </div>
                    </div>
                </div>
                <div>
                    {isUserExist ? (
                        <>
                            <div>
                                <div className='ml-5 mt-5 flex flex-row'>
                                    <div className='w-3/4'>
                                        <h1 className='text-2xl text-white font-abc'>
                                            Card Type
                                        </h1>
                                    </div>
                                    <div className='w-1/4'>
                                        <h1 className='text-2xl text-white font-abc'>
                                            Premium
                                        </h1>
                                    </div>
                                </div>
                                <div class="mt-2 border-t-2 border-gray-700"></div>
                                <div className='ml-5 mt-5 flex flex-row'>
                                    <div className='w-3/5'>
                                        <h1 className='text-2xl text-white font-abc'>
                                            Preloaded Cade
                                        </h1>
                                    </div>
                                    <div className='w-2/5'>
                                        <div className='flex flex-row'>
                                            <h1 className='m-2 text-2xl text-white font-abc'>
                                                500
                                            </h1>
                                            <button type="button" class="focus:outline-none text-black font-abc bg-white hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-xl px-5 py-1 me-2 mb-2 dark:focus:ring-yellow-900">Claim</button>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </>
                    ) : (
                        <>
                            <div className='flex justify-center mt-5'>
                                <button onClick={initUser} type="button" class="focus:outline-none text-black font-abc bg-white hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-2xl px-8 py-4 me-2 mb-2 dark:focus:ring-yellow-900">Join Cade Now ⚡</button>
                            </div>
                            <div class="mt-4 border-t-2 border-gray-700"></div>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default CadeCard