import React, { use } from "react";
import { useEffect, useState } from "react";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import * as web3 from "@solana/web3.js";
import { useConnection } from "@solana/wallet-adapter-react";
import { Board, useFourInLine } from "../../connector/useFourInLine";
import { useRouter } from "next/router";
import Link from "next/link";

const FourInLine = () => {
  const wallet = useAnchorWallet();
  const { program } = useFourInLine();
  const [name, setName] = useState("");
  const [created, setCreated] = useState(false);
  const [mode, setMode] = useState("Solo");
  const router = useRouter();

  const handleClick = async (e) => {
    e.preventDefault()
    const [gamePublicKey] = web3.PublicKey.findProgramAddressSync(
      [Buffer.from("game"), Buffer.from(name)],
      program.programId
    );
    try {
      const tx = await program.methods
        .createGame(name, [wallet.publicKey], mode)
        .accounts({
          game: gamePublicKey,
          payer: wallet?.publicKey,
          systemProgram: web3.SystemProgram.programId,
        })
        .rpc();
      setCreated(true);
    } catch (err) {
    }
  };
  useEffect(() => {
    if (!program) return;
    const listener = program.addEventListener(
      "GameCreated",
      async (event, _slot, _sig) => {
        router.push(`/${name}`);
      }
    );

    return () => {
      program.removeEventListener(listener);
    };
  }, [program]);
  return (
    <>
      <>
        <div className=" p-16 bg-black">
          <div className="flex justify-center">
            <h1 className="text-white font-abc text-5xl mt-5">
              Four In Line Game
            </h1>
          </div>
          <div className="mt-20">
            <div className="flex items-center">
              <label htmlFor="voice-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
                <input
                  autoComplete="off"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="voice-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Game Name"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                ></button>
              </div>
              <button
                onClick={handleClick}
                className="inline-flex items-center py-2.5 px-5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Create
              </button>
            </div>
            {created && (
              <div className="text-white text-center mt-5">
                <div>
                  <button className="py-3 text-black font-abc bg-white border-0  px-6 m-2 focus:outline-none rounded text-2xl">
                    <a href={`/FourInLineGame/${name}`}>Launch Your Game Now</a>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    </>
  );
};

export default FourInLine;
