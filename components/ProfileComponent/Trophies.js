import React from "react";

const Trophies = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <h1 className="text-6xl font-abc ml-16 mt-16 text-white">
          Achievments
        </h1>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <div className="flex justify-center">
                  <img
                    height={150}
                    width={150}
                    src="/trophy 2.png"
                    alt="gggg"
                  />
                </div>
                <h2 className="title-font font-medium text-5xl font-abc text-white mt-3">
                  2.7K Points
                </h2>
                <p className="mt-2 text-3xl font-abc leading-relaxed text-white ">
                  Silver Trophies
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <div className="flex justify-center">
                  <img height={150} width={150} src="/trophy.png" alt="gggg" />
                </div>
                <h2 className="title-font font-medium text-5xl font-abc text-white mt-3">
                  1.3K Points
                </h2>
                <p className="mt-2 text-3xl font-abc leading-relaxed text-white">
                  Gold Trophies
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <div className="flex justify-center">
                  <img
                    height={150}
                    width={150}
                    src="/trophy 4.png"
                    alt="gggg"
                  />
                </div>
                <h2 className="title-font font-medium text-5xl font-abc text-white mt-3">
                  74 Points
                </h2>
                <p className="mt-2 text-3xl font-abc leading-relaxed text-white">
                  Rare Trophies
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <div className="flex justify-center">
                  <img
                    height={150}
                    width={150}
                    src="/trophy 3.png"
                    alt="gggg"
                  />
                </div>
                <h2 className="title-font font-medium text-5xl font-abc text-white mt-3">
                  46 Points
                </h2>
                <p className="mt-2 text-3xl font-abc leading-relaxed text-white">
                  Legendary Trophies
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trophies;
