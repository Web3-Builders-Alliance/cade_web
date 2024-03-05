import React from "react";
import { GiTwoCoins } from "react-icons/gi";
import { BsTrophyFill } from "react-icons/bs";
import Trophies from "../../components/ProfileComponent/Trophies";
import { useTicket } from "../../connector/ticket";
import GameHistory from "../../components/ProfileComponent/GameHistory";
const Profile = ({ slug }) => {
  const { mintCade } = useTicket()
  return (
    <>
      <div className="bg-[url('/kn.jpg')]">
        <div className="flex flex-row bg-">
          <section className="text-gray-600 body-font lg:px-28">
            <div className="container px-5 py-5 mx-auto flex flex-wrap">
              <div className="flex flex-wrap -m-4">
                <div className="flex flex-row">
                  <div className="p-4 lg:w-1/2 md:w-full">
                    <div className="flex rounded-lg  border-opacity-50 p-8 sm:flex-row flex-col">
                      <div className="ml-6 w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-inherit text-indigo-500 flex-shrink-0">
                        <img
                          className="w-18 h-18  rounded-full ring-2 ring-yellow-400"
                          src="https://gravatar.com/avatar/638960e628fe9c4f77c140715cd7c513?s=400&d=retro&r=x"
                          alt="Bordered avatar"
                        />
                      </div>
                      <div className="ml-6 flex-grow">
                        <h2 className="text-white text-6xl font-abc title-font font-medium mb-3">
                          {slug}
                        </h2>

                        <div className="flex flex-col">

                        </div>

                        <button
                          // onClick={() => mintCade()}
                          type="button"
                          className="w-full font-abc text-2xl focus:outline-none mt-5 text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg px-2 py-2.5 mr-2 mb-2"
                        >
                          Redeem Tickets
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden xl:block ml-20 mt-16">
                    <input
                      type="search"
                      id="default-search"
                      value={" https://gg-cade.vercel.app/Profile/Joey"}
                      className="font-abc text-2xl block  p-4 pl-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search Mockups, Logos..."
                      required
                    />

                    <button
                      type="button"
                      className="font-abc text-2xl focus:outline-none mt-5 text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2"
                    >
                      Share Profile
                    </button>
                  </div>
                </div>

                <div className="lg:w-1/3 md:w-full">
                  <div className="flex rounded-lg  border-opacity-50 p-8 sm:flex-row flex-col">
                    <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full  flex-shrink-0">
                      {/* <BsTrophyFill className='text-7xl mt-5 text-red-500' /> */}
                      <img
                        height={100}
                        width={100}
                        className="mt-10"
                        src="/trophy.png"
                        alt="alt"
                      />
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-white text-5xl font-abc font-medium mb-3">
                        Your Summary
                      </h2>
                      <p className="text-white leading-relaxed text-3xl font-abc">
                        Blue bottle crucifix vinyl post-ironic.
                      </p>
                      <div className="flex flex-row">
                        <div className="py-4 sm:w-1/2 lg:w-1/4 w-1/2 ">
                          <h2 className="title-font font-medium text-5xl font-abc text-yellow-400">
                            27
                          </h2>
                          <p className="leading-relaxed text-white text-3xl m-3 font-abc">
                            Match
                          </p>
                        </div>
                        <div className="py-4 sm:w-1/2 lg:w-1/4 w-1/2">
                          <h2 className="title-font font-medium text-5xl font-abc text-green-400">
                            18
                          </h2>
                          <p className="leading-relaxed text-white text-3xl m-3 font-abc">
                            Wins
                          </p>
                        </div>
                        <div className="py-4 sm:w-1/2 lg:w-1/4 w-1/2">
                          <h2 className="title-font font-medium text-5xl font-abc text-red-500">
                            9
                          </h2>
                          <p className="leading-relaxed text-white text-3xl m-3 font-abc">
                            Loses
                          </p>
                        </div>
                        <div className="py-4 sm:w-1/2 lg:w-1/4 w-1/2">
                          <h2 className="title-font font-medium text-5xl font-abc text-green-400">
                            60%
                          </h2>
                          <p className="leading-relaxed text-white text-3xl m-3 font-abc">
                            Win Rate
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="flex justify-center h-px w-full bg-gray-400"></div>
        <Trophies />
        <div className="h-px w-full bg-gray-400"></div>
        <GameHistory />
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.query;
  console.log(`slug is my ${slug}`);
  return {
    props: { slug },
  };
}

export default Profile;
