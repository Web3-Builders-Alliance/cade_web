import React, { useEffect, useState } from "react";
import CardMachineForBuyUSDC from "../components/GetCade/CardMachineForBuyUSDC";
import { useTicket } from '../connector/ticket'
import { useWallet } from '@solana/wallet-adapter-react';
import { truncateWalletAddress } from "../hooks/Truncate";
import Link from "next/link";
import { useCadeEconomy } from '../connector/economy'
import CadeStore from "../components/CadeStore";

const GetCade = ({ network }) => {
    const { swap, pay_for_game, claim_usdc } = useCadeEconomy()
    const { publicKey } = useWallet()
    const { mintCade } = useTicket()
    const [blinkingLight, setBlinkingLight] = useState("red-500")
    const [paymentMethod, setPaymentMethod] = useState("USDC")
    const [networkHeading, setNetworkHeading] = useState("Switch To Devnet")
    const [networkPageLink, setNetworkPageLink] = useState("http://localhost:3000/GetCade/Mainnet")
    const [userPublicKey, setUserPublicKey] = useState("")

    useEffect(() => {
        if (publicKey) {
            setUserPublicKey(truncateWalletAddress(publicKey.toBase58()))
        }
        else {
            setUserPublicKey("---")
        }
        if (network == "Mainnet") {
            setNetworkHeading("Switch To Devnet")
            setNetworkPageLink("http://localhost:3000/GetCade/Devnet")
        }
        else {
            setNetworkHeading("Switch To Mainnet")
            setNetworkPageLink("http://localhost:3000/GetCade/Mainnet")
        }

    }, [publicKey, userPublicKey, network])

    const buyCadeData = [
        {
            name: "20x Cade Coins",
            img: "/cadenew.png",
            price: 0
        },
        {
            name: "40x Cade Coins",
            img: "/cadenew.png",
            price: 0
        },
        {
            name: "60x Cade Coins",
            img: "/cadenew.png",
            price: 0
        },
        {
            name: "20x Cade Coins",
            img: "/cade.png",
            price: 0
        },
        {
            name: "40x Cade Coins",
            img: "/cade.png",
            price: 0
        },
        {
            name: "60x Cade Coins",
            img: "/cade.png",
            price: 0
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0)
    const showNextItem = () => {
        if (currentIndex <= buyCadeData.length - 2) {
            setCurrentIndex(currentIndex + 1)
            console.log(currentIndex, buyCadeData.length)
        }
        else {
            setCurrentIndex(0)
        }
    }

    const showPrevItem = () => {
        if (currentIndex != 0) {
            setCurrentIndex(currentIndex - 1)
        }
    }

    const doTheTransactionWithUSDC = () => {
        setBlinkingLight("green-500")
        setPaymentMethod("USDC")
        setTimeout(async () => {
            await mintCade()
            setBlinkingLight("red-500")

        }, 100)
    }

    const doTheTransactionWithBONK = () => {
        setBlinkingLight("green-500")
        setPaymentMethod("BONK")
        setTimeout(async () => {
            await mintCade()
            setBlinkingLight("red-500")
        }, 100)
    }

    return (
        <>
            <section className="min-h-screen flex justify-center text-gray-600 body-font overflow-x-hidden bg-gradient-to-bl from-blue-950 via-black to-black">
                <div className="p-10 flex justify-center">
                    <div className="rounded-xl  xl:p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-5 w-screen">
                        <div id="first" className="border-4 border-white rounded-xl bg-[url('/brickwall.jpg')]  flex flex-col md:ml-auto w-full h-max">
                            <CadeStore />

                        </div>
                     
                        <div id="second" className=" items-center border-4 rounded-xl border-white bg-gradient-to-bl from-blue-950 via-black to-black  flex flex-col md:ml-auto w-full  overflow-x-hidden overflow-y-hidden">
                        <div className="">
                        <h1 className="text-white font-abc text-5xl mt-5 underline">More Options</h1>
                        </div>
                            <div style={{ width: '80%', height: 160 }} className="mt-5 bg-gray-700 border-4 border-white rounded-md">
                                <div className="flex items-center justify-center mt-5">
                                <div className="m-2 rounded-full w-4 h-4 bg-green-500 animate-blink"></div>
                                    <h1 className="text-yellow-300 text-4xl font-abc">
                                        Selected Item Name - Cade Game Pass
                                    </h1>
                                </div>
                                <div className="flex items-center justify-center mt-5 ml-2">
                                    <h1 className="text-white text-2xl font-abc">
                                        Description : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                    </h1>
                                </div>
                            </div>

                            <div className="p-10 text-gray-400 body-font">
                                <div className="container px-5 py-2 mx-auto">
                                    <div className="flex flex-wrap -m-4">
                                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                                            <div className="h-full text-center">
                                                <div className="flex justify-center">
                                                    <img src="/cadenew.png" alt="CadeImage" />
                                                </div>
                                                <p className="text-white  font-abc text-2xl">20x Cade Coins</p>
                                            </div>
                                            
                                        </div>
                                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                                            <div className="h-full text-center">
                                                <div className="flex justify-center">
                                                    <img src="/cadenew.png" alt="CadeImage" />
                                                </div>
                                                <p className="text-white  font-abc text-2xl">40x Cade Coins</p>
                                            </div>
                                            
                                        </div>
                                        <div className="lg:w-1/3 lg:mb-0 p-4">
                                            <div className="h-full text-center">
                                                <div className="flex justify-center">
                                                    <img src="/cadenew.png" alt="CadeImage" />
                                                </div>
                                                <p className="text-white  font-abc text-2xl">60x Cade Coins</p>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>

                                <div className="container px-5 py-10 mx-auto">
                                    <div className="flex flex-wrap -m-4">
                                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                                            <div className="h-full text-center">
                                                <div className="flex justify-center">
                                                    <div className="bg-black sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full  flex-shrink-0">
                                                        <img
                                                            height={100}
                                                            width={100}
                                                            className="mt-10 rounded-full"
                                                            src="/heartr.png"
                                                            alt="alt"
                                                        />
                                                    </div>
                                                </div>
                                                <p className="text-white  font-abc text-2xl">20x CadeLife</p>
                                            </div>
                                    
                                        </div>
                                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                                            <div className="h-full text-center">
                                                <div className="flex justify-center">
                                                    <div className="ng-black sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full  flex-shrink-0">
                                                        <img
                                                            height={100}
                                                            width={100}
                                                            className="mt-10 rounded-full"
                                                            src="/heartr.png"
                                                            alt="alt"
                                                        />
                                                    </div>
                                                </div>
                                                <p className="text-white  font-abc text-2xl">40x CadeLife</p>
                                            </div>
                                            
                                        </div>
                                        <div className="lg:w-1/3 lg:mb-0 p-4">
                                            <div className="h-full text-center">
                                                <div className="flex justify-center">
                                                    <div className="ng-black sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full  flex-shrink-0">
                                                        <img
                                                            height={100}
                                                            width={100}
                                                            className="mt-10 rounded-full"
                                                            src="/heartr.png"
                                                            alt="alt"
                                                        />
                                                    </div>
                                                </div>
                                                <p className="text-white  font-abc text-2xl">60x CadeLife</p>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export async function getServerSideProps(context) {
    let network;
    const { slug } = context.query;

    if (slug == "Devnet") {
        network = "Devnet"
    }
    else {
        network = "Mainnet"
    }

    return {
        props: {
            network
        },
    };
}

export default GetCade;