import React, { useEffect, useState } from "react";
import CardMachineForBuyUSDC from "../../components/GetCade/CardMachineForBuyUSDC";
import { useTicket } from '../../connector/ticket'
import { useWallet } from '@solana/wallet-adapter-react';
import { truncateWalletAddress } from "../../hooks/Truncate";
import Link from "next/link";

const GetCade = ({ network }) => {
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
            <section className="min-h-screen flex justify-center text-gray-600 body-font bg-[url('/brickwall.jpg')] overflow-x-hidden">
                <div className="py-10 flex justify-center">
                    <div className="rounded-xl p-3 xl:p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-20 bg-transparent">
                        <div className="border-4 border-white rounded-xl bg-black flex flex-col md:ml-auto w-full h-max md:py-8 md:mt-0">
                            <div className="flex justify-center mt-5">
                                <h1 className="text-white font-abc text-6xl lg:text-7xl px-10 mb-1 font-medium title-font">
                                    Cade Store
                                </h1>
                            </div>
                            <div className="flex justify-center flex-row overflow-x-hidden mt-10 ">
                                <img className="w-52 h-52 lg:h-72 lg:w-72" src="/c1.png" alt="arcademacine" />
                                <img className="w-52 h-52 lg:h-72 lg:w-72" src="/c9.png" alt="arcademacine" />
                                <img className="w-52 h-52 lg:h-72 lg:w-72" src="/c2.png" alt="arcademacine" />
                            </div>

                            <div className="flex flex-row">
                                <img className="lg:p-3 p-2 w-1/3 h-36 lg:h-52" src="/cadenew.png" alt="" />
                                <img className="lg:p-3 p-2 w-1/3 h-36 lg:h-52" src="/cade.png" alt="" />
                                <img className="lg:p-3 p-2 w-1/3 h-36 lg:h-52" src="/cadep.webp" alt="" />

                            </div>
                            <div className="flex flex-row mb-5">
                                <div className="flex w-1/4 justify-center">
                                    <h2 className="text-red-500 font-abc text-4xl lg:text-5xl px-10 mb-1 font-medium title-font">
                                        Buy.
                                    </h2>
                                </div>
                                <div className="flex w-1/4 justify-center">
                                    <h2 className="text-orange-400 font-abc text-4xl lg:text-5xl px-10 mb-1 font-medium title-font">
                                        Play.
                                    </h2>
                                </div>
                                <div className="flex w-1/4 justify-center">
                                    <h2 className="text-green-400 font-abc text-4xl lg:text-5xl px-10 mb-1 font-medium title-font">
                                        Win.
                                    </h2>
                                </div>
                                <div className="flex w-1/4 justify-center">
                                    <h2 className="underline text-cyan-400 font-abc text-4xl lg:text-5xl px-10 mb-1 font-medium title-font">
                                        Have FUN.
                                    </h2>
                                </div>
                            </div>

                        </div>

                        <div style={{ height: "1100px" }} className="relative border-4 rounded-xl border-white bg-black flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 overflow-x-hidden overflow-y-hidden">
                            <div className="px-6 w-full absolute top-0 left-1/2 -translate-x-1/2 translate-y-10 text-white">
                                <h1 className="text-6xl font-abc">
                                    Buy Now
                                </h1>
                                <p className="w-full text-2xl text-yellow-400 lg:text-3xl font-abc mt-5">
                                    {`Cade Token Will be delivered into your Cade Card that represent your wallet ->`}
                                    <span className="ml-5 text-white underline">{userPublicKey}</span>
                                </p>
                                <Link href={networkPageLink}>
                                    <p className="w-full text-2xl text-white lg:text-2xl font-abc mt-4 hover:text-blue-400 underline">
                                        {networkHeading}
                                    </p>
                                </Link>
                            </div>
                            <div className="h-full flex flex-col  justify-center items-center">
                                {buyCadeData.map((item, index) => {
                                    if (currentIndex == index) {
                                        return (
                                            <>
                                                <div className="absolute top-1/4 translate-y-5 lg:translate-y-0">
                                                    <CardMachineForBuyUSDC img={item.img} heading={item.name} showNext={showNextItem} showPrevItem={showPrevItem} blinkingLightColor={blinkingLight} doTransactionWithUSDC={doTheTransactionWithUSDC} doTheTransactionWithBONK={doTheTransactionWithBONK} paymentMethod={paymentMethod} network={network} />
                                                </div>
                                            </>
                                        )
                                    }
                                })}
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