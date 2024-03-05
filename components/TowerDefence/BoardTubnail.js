import React from "react";
import Link from "next/link";

const BoardTubnail = ({ map }) => {
  const chooseUnitUrl = "ChooseUnits";
  const render = (kind) => {
    switch (kind) {
      case "tree":
        return <img src="/tree.svg" className="h-full w-full" />;
      case "bull":
        return <img src="/bull.svg" className="h-full w-full" />;
      case "bear":
        return <img src="/bear.svg" className="h-full w-full" />;
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-[200px] w-[120px] mb-5">
      <div className="text-black text-center m-2">
        <p className="">{map?.account?.name}</p>
      </div>
      <div className="h-[100px] w-[60px] grid grid-cols-6 ">
        {[...Array(60)?.keys()]?.map((index) => {
          const kind = map?.account?.board?.find(
            (e) => e?.position === index
          )?.kind;
          return (
            <div
              key={index}
              className={`max-h-[10px] max-w-[10px] ${((index + Math.floor(index / 6)) % 2) ? "bg-green-900" : "bg-green-600"
                }`}
            >
              <div className={`h-[8px] w-[8px]`}>
                {kind ? render(kind) : ""}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BoardTubnail;
