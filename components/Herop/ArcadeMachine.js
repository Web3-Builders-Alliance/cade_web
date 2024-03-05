import React, { useState , useEffect } from 'react'
import ArcadeBoard from "./ArcadeBoard";
import Link from "next/link";

export default function ArcadeMachine() {

    return (
        <>
            <div className="">
                <div className="flex justify-center">
                    <ArcadeBoard />
                </div>
                <div className="relative ">
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