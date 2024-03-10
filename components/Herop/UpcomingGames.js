import React from 'react'
import Link from 'next/link';
const UpcomingGames = () => {
  const Data = [
    {
      name: "Space Invaders",
      img: "/upca1.png",
      link: "/Games/SpaceInvaders",
      desc: "Control a spaceship and defend Earth from waves of alien.",
    },
    {
      name: "Chess",
      img: "/upca2.png",
      link: "/Games/Chess",
      desc: "Checkmate your way to victory in this classic chess game!",
    },
    {
      name: "Car Race",
      img: "/upca3.png",
      link: "/Games/Carrace",
      desc: "Ready to race against the best in this high-speed car game!",

    },
  ];
  return (
    <>
      <h1 className="flex justify-center text-5xl font-abc text-white ml-10 m-4 font-bold">
        Upcoming Games🤘
      </h1>

      <div style={{backgroundColor:"#191414",borderColor:"yellow",borderWidth:3,borderRadius:5}}>
        <div className="p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {Data.map((item, key) => {
            return (
              <div className="relative " key={key}>
                <div className="flex justify-center">
                  <div className="relative h-40 w-72 mb-3 bg-transparent flex items-center justify-center">
                    {/* Rectangle */}
                    <div className="mt-3 flex flex-row justify-center items-center absolute top-0 left-0 right-0 bottom-0 rounded-lg bg-gray-950 border-2 border-white">
                      <div className={`m-5 w-1/2 h-24 flex justify-center items-center bg-orange-500 rounded-lg`}>
                        <h1 className='text-6xl font-abc text-yellow-300'>-</h1>
                      </div>
                      <div className='w-1/2 h-max flex justify-center items-center'>
                        <h1 className='text-5xl font-abc text-yellow-300 min-w-0 break-words'>{item.name}</h1>
                      </div>


                      {/* Blinking lights at corners */}
                      <div className="rounded-full absolute top-0 left-0 w-4 h-4 bg-orange-500 animate-blink"></div>
                      <div className="rounded-full absolute top-0 left-1/4 w-4 h-4 bg-orange-500 animate-blink"></div>
                      <div className="rounded-full absolute top-0 left-2/4 w-4 h-4 bg-orange-500 animate-blink"></div>
                      <div className="rounded-full absolute top-0 left-3/4 w-4 h-4 bg-orange-500 animate-blink"></div>

                      <div className="rounded-full absolute top-0 right-0 w-4 h-4 bg-orange-500 animate-blink"></div>
                      <div className="rounded-full absolute top-1/2 right-0 w-4 h-4 bg-orange-500 animate-blink"></div>
                      <div className="rounded-full absolute top-1/4 right-0 w-4 h-4 bg-orange-500 animate-blink"></div>
                      {/* <div className="rounded-full absolute bottom-1 right-0 w-4 h-4 bg-blue-500 animate-blink"></div> */}

                      <div className="rounded-full absolute top-1/4 left-0 w-4 h-4 bg-orange-500 animate-blink"></div>
                      <div className="rounded-full absolute top-2/4 left-0 w-4 h-4 bg-orange-500 animate-blink"></div>
                      <div className="rounded-full absolute bottom-0 left-0 w-4 h-4 bg-orange-500 animate-blink"></div>
                      {/* <div className="rounded-full absolute top-3/4 left-0 w-4 h-4 bg-green-500 animate-blink"></div> */}


                      <div className="rounded-full absolute bottom-0 left-1/4 transform -translate-x-1/2 w-4 h-4 bg-orange-500 animate-blink"></div>
                      <div className="rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 animate-blink"></div>
                      <div className="rounded-full absolute bottom-0 right-1/2 transform translate-x-1/2 w-4 h-4 bg-orange-500 animate-blink"></div>
                      <div className="rounded-full absolute bottom-0 right-1/4 transform translate-x-1/2 w-4 h-4 bg-orange-500 animate-blink"></div>
                      <div className="rounded-full absolute bottom-0 right-0 w-4 h-4 bg-orange-500 animate-blink"></div>
                    </div>
                  </div>
                </div>
                <div>
                  <Link href={item.link}>
                    <div className='flex justify-center'>

                      <img
                        src={item.img}
                        alt="Image 1"
                        className="w-50 h-50 object-cover"
                      />
                    </div>
                  </Link>
                </div>
                <div className="hidden lg:block mt-5">
                  <div className="block max-w-sm p-6 rounded-lg shadow bg-gray-950 hover:bg-gray-700">
                    <p className="text-3xl font-abc text-gray-400">
                      {item.desc}
                    </p>
                    <Link href={item.link}>
                      <button className="mt-5 px-3 text-4xl font-abc bg-transparent  hover:bg-blue-500 text-white font-semibold hover:text-white  border border-white hover:border-transparent rounded">
                        Play Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default UpcomingGames