import { FC, useEffect, useState } from "react";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import Head from "next/head";
import { useProgram as diceProgram } from "../../connector/bonk-or-death/useProgram";
import { useProgram } from "../../connector/cumulative_leaderboard.ts/useProgram";
import { useRouter } from "next/router";
import { Keypair, PublicKey } from "@solana/web3.js";
import * as web3 from "@solana/web3.js";
import placeBet from "../../connector/bonk-or-death/place_bet";
import resolveBet from "../../connector/bonk-or-death/resolve_bet";
import { BN } from "@coral-xyz/anchor";
import { randomBytes } from "crypto"
import Dice from "../../components/Dice";
import Leaderboard from "../../components/Dice/leaderboard";
import ConfettiExplosion from 'react-confetti-explosion';

const ChooseUnits = (props) => {
  const [winning, setWinning] = useState(false);

  const wallet = useAnchorWallet();
  const { connection } = useConnection();
  const { program } = useProgram({ connection, wallet });
  const { program: dice } = diceProgram({ connection, wallet });
  let seed = new BN(randomBytes(16));

  useEffect(() => {
    if(winning){
    const interval = setInterval(() => {
      setWinning(false)
    }, 3000);

    //Clearing the interval
    return () => clearInterval(interval);
    }
}, [winning]);
  
  return (
    <>
      <Head>
        <title>{`'Cade BONK or DEATH`}</title>
        <meta name="description" content="BONK or DEATH" />
      </Head>
      <section className="body-font relative bg-[url('/kn.jpg')] min-h-screen">
        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <h1 className="text-center w-full">DETH is temporary, Solana is inevitable</h1>
        </div>
        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className=" w-full rounded-lg overflow-hidden">
            <div className="flex justify-center items-center min-h-[400]px space-x-8">
              {/*<button
                onClick={() => {placeBet(dice, seed, wallet)}}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                place
              </button>
              <button
                onClick={() => resolveBet(dice, seed, wallet)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                resolve
  </button>*/}
              <Dice

                onRoll={(value) => {
                  (async()=>{ if (program) {
                    try {
                      const [global] = web3.PublicKey.findProgramAddressSync(
                        [Buffer.from("leaderboard")],
                        program.programId,
                      )
                      const [user] = web3.PublicKey.findProgramAddressSync(
                        [Buffer.from("user"), global.toBuffer(), wallet.publicKey.toBuffer()],
                        program.programId,
                      )
                      const tx = await program.methods
                        .play()
                        .accounts({ user, global, payer: wallet.publicKey })
                        .rpc({
                          skipPreflight:true
                        })  ;
                  
                      console.log("Your transaction signature is: ", tx);
                      } catch (e) {
                        console.log(e);
                      }
                  }})()
                  if (value < 2) {
                    setWinning(true);
                  }
                }}
                faces={["bonk.jpg", "bonk.jpeg", "death.jpeg", "death.jpeg", "death.jpeg", "death.jpeg"]}
              />

             {winning ? <ConfettiExplosion /> : null}
            </div>
            <Leaderboard/>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseUnits;
