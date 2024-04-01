import React, { useState , useEffect } from 'react'
import ArcadeBoard from "./ArcadeBoard";
import Link from "next/link";

export default function ArcadeMachine() {

    return (
        <>
            <div className="">
                <div style={{borderWidth:7}} className="h-44 flex justify-center bg-gray-900 w-max items-center border-white rounded-md">
                    <ArcadeBoard />
                </div>
                <div className="relative mt-5">
                    <Link href='/Games/SkylineSkaddle'>
                        <div className='flex justify-center'>

                            <img
                                src="/gow.png"
                                alt="Image 1"
                                className="w-96 h-96 object-cover"
                            />
                        </div>
                    </Link>
                </div>

                <div class="block lg:hidden mt-2 border-t-2 border-gray-700"></div>
            </div>



        </>
    );
}