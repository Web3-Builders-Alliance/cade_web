import React, { useEffect, useState } from "react";
import CadeStore from "../components/CadeStore";
import Sheet from 'react-modal-sheet';

const GetCade = () => {
    const [isOpen, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const CadeStoreData = [

        {
            name: "Cade Life",
            img: "/heartr.png",
            desc: "Play Again If You Loose",
            price: "2",
        },
        {
            name: "Blind Chest",
            img: "/treasure.png",
            desc: "Open Chest for Exited Suprizes",
            price: "5",
        },
        {
            name: "Cade GamePass",
            img: "/freeticket.webp",
            desc: "Sol Loaded Lottery Tickets for Periodic Drawings",
            price: "3",
        }

    ]

    const showNextGame = () => {
        if (currentIndex <= CadeStoreData.length - 2) {
            setCurrentIndex(currentIndex + 1)
            console.log(currentIndex, CadeStoreData.length)
        }
        else {
            setCurrentIndex(0)
        }
    }

    const showPrevGame = () => {
        if (currentIndex != 0) {
            setCurrentIndex(currentIndex - 1)
        }
    }

    const handleBottomSheet = () => {
        setOpen(true)
    }

    return (
        <>
            <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
                <Sheet.Container style={{ backgroundColor: "#191414" }}>
                    <Sheet.Header />
                    <Sheet.Content>
                        <div className="flex justify-center items-center overflow-x-auto">
                            <div className='mt-40 flex justify-center items-center'>
                                <img src={CadeStoreData[currentIndex].img} className="h-40 w-40 lg:h-80 lg:w-80" alt="prize" />
                            </div>
                        </div>
                    </Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop />
            </Sheet>
            <section className="min-h-screen flex justify-center text-gray-600 body-font overflow-x-hidden bg-gradient-to-bl from-blue-950 via-black to-black">
                <div className="px-10 flex justify-center">
                    <div className="rounded-xl  xl:p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-10 w-screen p-10 gap-y-10">
                        <div id="first" className="border-4 border-white rounded-xl bg-[url('/brickwall.jpg')]  flex flex-col md:ml-auto w-full h-max">
                            <CadeStore openBottomSheet={handleBottomSheet} currentPrizeData={CadeStoreData[currentIndex]} />
                        </div>

                        <div id="second" className="p-3 border-4 rounded-xl h-max border-white bg-gradient-to-bl from-blue-950 via-black to-black  flex flex-col md:ml-auto w-full  overflow-x-hidden overflow-y-hidden">
                            <div className="flex justify-center">
                                <h1 className="text-white font-abc text-4xl lg:text-5xl mt-5">Prize Details</h1>
                            </div>
                            <div className="flex justify-center mt-5">

                                <div className="items-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-10">
                                    {CadeStoreData.map((item, index) => {
                                        if (index == currentIndex) {
                                            return (
                                                <>

                                                    <div className="flex flex-col">
                                                        <div className="flex flex-col bg-gray-900 w-max mt-5 rounded-lg border-2 border-white">
                                                            <img src={item.img} className="h-40 w-40 lg:h-60 lg:w-60" alt="prize" />
                                                        </div>

                                                    </div>
                                                    <div className="w-full">
                                                        <div className="flex flex-col gap-y-2">
                                                            <div>
                                                                <h1 className="font-abc text-white text-2xl lg:text-4xl ">Name - {item.name}</h1>
                                                            </div>
                                                            <div>
                                                                <h1 className="font-abc text-white text-2xl lg:text-4xl">Quantity - 1</h1>
                                                            </div>
                                                            <div>
                                                                <h1 className="font-abc text-white text-2xl lg:text-4xl">Prize - {item.price} Tickets</h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        }
                                    })}

                                </div>
                            </div>
                            <div className="flex flex-row mt-5">
                                <div className="w-1/4 flex justify-center">
                                    <button onClick={showPrevGame} className="w-full mt-2 ml-3 mb-2 px-2 text-3xl font-abc bg-white  hover:bg-blue-500 text-black font-semibold hover:text-white  border border-white hover:border-transparent rounded">
                                        {"<"}
                                    </button>
                                </div>
                                <div className="w-2/4 flex justify-center">
                                    <button className="w-full mt-2 ml-3 mb-2 px-2 text-3xl font-abc bg-white  hover:bg-blue-500 text-black  hover:text-white  border border-white hover:border-transparent rounded">
                                        Redeem Now
                                    </button>
                                </div>
                                <div className="w-1/4 flex justify-center mr-2">
                                    <button onClick={showNextGame} className="w-full mt-2 ml-3 mb-2 px-2 text-3xl font-abc bg-white  hover:bg-blue-500 text-black font-semibold hover:text-white  border border-white hover:border-transparent rounded">
                                        {">"}
                                    </button>
                                </div>
                            </div>
                            <div className="flex justify-center mt-1">
                                <h1 className="text-white font-abc text-4xl lg:text-5xl mt-5">Collection</h1>
                            </div>
                            <div>
                                <div className="flex justify-center mt-5">
                                    <div className="items-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 ">
                                        <div className="flex flex-col">
                                            <div className="flex flex-col bg-gray-900 w-max mt-5 rounded-lg border-2 border-white">
                                                <img src="/drip.jpg" className="h-40 w-40 lg:h-44 lg:w-44 rounded-lg" alt="prize" />
                                            </div>

                                        </div>
                                        <div className="w-full items-center flex justify-center">
                                            <div>
                                                <h1 className="flex font-abc text-white text-2xl lg:text-4xl ">Drip</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full bg-gray-900 mt-5 border border-white rounded-md">
                                    <h1 className="flex font-abc text-white text-2xl lg:text-3xl ml-5 underline mt-3">More Collection</h1>
                                    <div className="flex justify-center gap-x-10 mt-5 m-3">
                                        <div className="flex flex-col items-center">
                                            <div>
                                                <img src="/drip.jpg" className="h-20 w-20 lg:h-20 lg:w-20 rounded-lg border-4 border-white" alt="prize" />
                                            </div>
                                            <div>
                                                <h1 className="flex font-abc text-white text-2xl ">Drip</h1>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <div>
                                                <img src="/soda.jpg" className="h-20 w-20 lg:h-20 lg:w-20 rounded-lg border-4 border-white" alt="prize" />
                                            </div>
                                            <div>
                                                <h1 className="flex font-abc text-white text-2xl ">Soda</h1>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <div>
                                                <img src="/cade.png" className="h-20 w-20 lg:h-20 lg:w-20 rounded-lg border-4 border-white" alt="prize" />
                                            </div>
                                            <div>
                                                <h1 className="flex font-abc text-white text-2xl ">Cade</h1>
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

export default GetCade;