import React from "react";

export const renderDefender = (kind) => {
  switch (kind) {
    case "tree":
      return <img src="/tree.svg" className="h-full w-full" />;
    case "bull":
      return <img src="/bull.svg" className="h-full w-full" />;
    case "bear":
      return <img src="/bear.svg" className="h-full w-full" />;
    case "soldier":
      return <img src="/soldier.svg" className="h-16 w-16" />;
    case "tank":
      return <img src="/tank.svg" className="h-16 w-16" />;
    case "plane":
      return <img src="/plane.svg" className="h-16 w-16" />;
    default:
      return "";
  }
};

export const Board = ({ map, active, handleClick }) =>  (
    <>
      <div className="h-[34px] w-[320px] bg-red-600 text-center align-middle items-center">
        BASE
      </div>
      <div className="h-[500px] w-[320px]">
        <div className="grid grid-cols-6">
          {[...Array(60)?.keys()]?.map((index) => {
            const kind = map?.board?.find((e) => e?.position === index)?.kind;
            return (
              <div
                key={index}
                className={`max-h-[50px] max-w-[53px] ${
                  (index + Math.floor(index / 6)) % 2
                    ? "bg-green-900"
                    : "bg-green-600"
                }`}
                custom={index}
              >
                <div className={`h-[50px] w-[53px]`}>
                  {kind ? renderDefender(kind) : ""}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="h-[34px] w-[320px]">
        <div className="grid grid-cols-6">
          {[...Array(6)?.keys()]?.map((n, index) => {
            return (
              <div
                key={index}
                className={`max-h-[34px] max-w-[53px] relative ${
                  active == index
                    ? "bg-yellow-300"
                    : index % 2
                    ? "bg-blue-900"
                    : "bg-blue-600"
                }`}
                onClick={()=>{handleClick(index)}}
              >
                <div className={`h-[50px] w-[53px]`} />
                {active == index ? (
                  <svg
                    className="absolute -bottom-20 left-1/2 transform -translate-x-1/2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="62"
                    viewBox="0 0 30 62"
                    fill="none"
                  >
                    <path
                      d="M13.5858 60.569C14.3668 61.35 15.6332 61.35 16.4142 60.569L29.1421 47.841C29.9232 47.06 29.9232 45.7936 29.1421 45.0126C28.3611 44.2316 27.0948 44.2316 26.3137 45.0126L15 56.3263L3.68629 45.0126C2.90524 44.2316 1.63891 44.2316 0.857864 45.0126C0.0768156 45.7936 0.0768156 47.06 0.857864 47.841L13.5858 60.569ZM13 0.845215L13 59.1547H17V0.845215H13Z"
                      fill="#D9FB08"
                    />
                  </svg>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );

