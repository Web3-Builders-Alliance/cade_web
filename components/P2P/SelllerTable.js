import React from "react";

const SelllerTable = () => {
  return (
    <>
      <div className="p-3">
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead className="text-xs font-semibold uppercase text-gray-400 bg-black">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-abc text-2xl text-white text-left">
                    Name
                  </div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-abc text-2xl text-white text-left">
                    XP
                  </div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-abc text-2xl text-white text-left">
                    Game Life
                  </div>
                </th>
                <th className="p-2 ml-10 whitespace-nowrap">
                  <div className="font-abc text-2xl text-white text-left">
                    Game Pass
                  </div>
                </th>
                <th className="p-2 ml-10 whitespace-nowrap">
                  <div className="font-abc text-2xl text-white text-left">
                    Trophies Count
                  </div>
                </th>
                <th className="p-2 ml-10 whitespace-nowrap">
                  <div className="font-abc text-2xl text-white text-left">
                    Price
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100">
              <tr>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                      <img
                        className="rounded-full"
                        src="https://gravatar.com/avatar/d91678274429b1035676e5a4471a87f9?s=400&d=robohash&r=x"
                        width="40"
                        height="40"
                        alt="Alex Shatov"
                      />
                    </div>
                    <div className="font-abc text-3xl text-white">
                      Alex
                    </div>
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left font-abc text-3xl text-white">
                    1200
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left font-abc text-3xl text-white">
                    66
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left font-abc text-3xl text-white">
                    30
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left font-abc text-3xl text-white">
                    12K
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left font-abc text-3xl text-white">
                    200 Cade
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                      <img
                        className="rounded-full"
                        src="https://gravatar.com/avatar/dbb41156a46b286c1938e2543e8be560?s=400&d=robohash&r=x"
                        width="40"
                        height="40"
                        alt="Alex Shatov"
                      />
                    </div>
                    <div className="font-abc text-3xl text-white">
                      Shatov
                    </div>
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left font-abc text-3xl text-white">
                    1500
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left font-abc text-3xl text-white">
                    35
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left font-abc text-3xl text-white">
                    23
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left font-abc text-3xl text-white">
                    66K
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left font-abc text-3xl text-white">
                    120 Cade
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                      <img
                        className="rounded-full"
                        src="https://gravatar.com/avatar/d7a68a116fc11a78dfe7aebcd28a07ed?s=400&d=retro&r=x"
                        width="40"
                        height="40"
                        alt="Alex Shatov"
                      />
                    </div>
                    <div className="font-abc text-3xl text-white">
                      Flix
                    </div>
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left font-abc text-3xl text-white">
                    300
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left font-abc text-3xl text-white">
                    70
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left font-abc text-3xl text-white">
                    80
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left font-abc text-3xl text-white">
                    6K
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left font-abc text-3xl text-white">
                    80 Cade
                  </div>

                </td>

              </tr>



            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SelllerTable;
