import React, { useEffect, useState } from "react";
import CardMachineForBuyUSDC from "../../components/GetCade/CardMachineForBuyUSDC";
import { useTicket } from '../../connector/ticket'
import { useWallet } from '@solana/wallet-adapter-react';
import { truncateWalletAddress } from "../../hooks/Truncate";
import Link from "next/link";
import { useCadeEconomy } from '../../connector/economy'
import { BN } from "@coral-xyz/anchor";
import { it } from "@faker-js/faker";

const GetCade = () => {
    const { swap, pay_for_game, claim_usdc } = useCadeEconomy()
    const { publicKey } = useWallet()
    const { mintCade } = useTicket()
    const [blinkingLight, setBlinkingLight] = useState("red-500")
    const [paymentMethod, setPaymentMethod] = useState("USDC")
    const [transactionHeading, setTransactionHeading] = useState("No Tranaction")
    const [userPublicKey, setUserPublicKey] = useState("")

    useEffect(() => {
        if (publicKey) {
            setUserPublicKey(truncateWalletAddress(publicKey.toBase58()))
        }
        else {
            setUserPublicKey("---")
        }

    }, [publicKey, userPublicKey])

    const buyCadeData = [
        {
            name: "10x Cade Coins",
            img: "/cadenew.png",
            price: 1_000_000,
            priceUSDC: 1
        },
        {
            name: "20x Cade Coins",
            img: "/cadenew.png",
            price: 2_000_000,
            priceUSDC: 2
        },
        {
            name: "30x Cade Coins",
            img: "/cadenew.png",
            price: 3_000_000,
            priceUSDC: 3
        },
        {
            name: "40x Cade Coins",
            img: "/cade.png",
            price: 4_000_000,
            priceUSDC: 4
        },
        {
            name: "50x Cade Coins",
            img: "/cade.png",
            price: 5_000_000,
            priceUSDC: 5
        },
        {
            name: "60x Cade Coins",
            img: "/cade.png",
            price: 6_000_000,
            priceUSDC: 6
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
            setTransactionHeading(`Transacting -${buyCadeData[currentIndex].priceUSDC}USDC`)
            try {
                await swap(buyCadeData[currentIndex].price)
            } catch (e) {
                console.log(e)
            } finally {
                setBlinkingLight("red-500")
                setTransactionHeading("No Transactions")
            }

        }, 100)
    }

    const doTheTransactionWithBONK = () => {
        setBlinkingLight("green-500")
        setPaymentMethod("BONK")
        setTimeout(async () => {
            setTransactionHeading(`Transacting -${buyCadeData[currentIndex].priceUSDC}USDC`)
            try {
                await swap(buyCadeData[currentIndex].price)
            } catch (e) {
                console.log(e)
            } finally {
                setBlinkingLight("red-500")
                setTransactionHeading("No Transactions")
            }
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
                                <button onClick={() => swap(2_000_000)}>Swap</button>
                                <button onClick={claim_usdc}>Claim</button>
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
                            </div>
                            <div className="h-full flex flex-col  justify-center items-center">
                                {buyCadeData.map((item, index) => {
                                    if (currentIndex == index) {
                                        return (
                                            <>
                                                <div className="absolute top-1/4 lg:translate-y-0">
                                                    <CardMachineForBuyUSDC img={item.img} heading={item.name} showNext={showNextItem} showPrevItem={showPrevItem} blinkingLightColor={blinkingLight} doTransactionWithUSDC={doTheTransactionWithUSDC} doTheTransactionWithBONK={doTheTransactionWithBONK} paymentMethod={paymentMethod} price={item.price} priceUSDC={item.priceUSDC} transactionHeading={transactionHeading} />
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

export default GetCade;