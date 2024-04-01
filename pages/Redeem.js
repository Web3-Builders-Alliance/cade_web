import { useState } from "react";
import {
  clusterApiUrl,
  Keypair,
  Transaction,
  Connection,
  Commitment,
  PublicKey,
} from "@solana/web3.js";
import { useUSDCPay } from "../hooks/transfer";
import * as bs58 from "bs58";
import { getOrCreateAssociatedTokenAccount, transfer } from "@solana/spl-token";
import {
  BlindChest,
  GamePass,
  BlindBag,
  LotteryTicket,
  CadeGameLife,
} from "../components/Data/data";
import { useWallet } from "@solana/wallet-adapter-react";

const Redeem = () => {
  const { publicKey } = useWallet();
  const [cade, setCade] = useState(100);
  const [redeemingCadeAmount, setRedeemingCadeAmount] = useState(0);
  const [recievingUSDCAmount, setRecievingAmount] = useState(0);
  const gamerPublickey = new PublicKey("96bnZMDpCHWfUTRAfrjYLGXGmFYNDUqEqPWEGK78mK7K")
  const getUSDCForCade = (percentage) => {
    if (publicKey.toBase58() == gamerPublickey.toBase58()) {
      let usdcAmount = ((percentage / 100) * cade) / 10;
      let cadeAmount = (percentage / 100) * cade;
      setRedeemingCadeAmount(cadeAmount);
      setRecievingAmount(usdcAmount);
    } else {
      alert("You Have 0 Published Games on Cade , try usig another wallet")
      console.log(publicKey)
      console.log(gamerPublickey)
    }
  };
  return (
    <>
      <div style={{ backgroundColor: 'black' }} className="min-h-screen xl:px-36 py-10">
        <div className="flex justify-center gap-x-5 flex-row">
          <h1
            style={{
              fontFamily: 'VT323',
              fontSize: 36,
              color: 'white',
              textDecorationLine: 'underline',
            }}>
            Publish.
          </h1>
          <h1
            style={{
              fontFamily: 'VT323',
              fontSize: 36,
              color: 'yellow',
              textDecorationLine: 'underline',
            }}>
            Distribute.
          </h1>
          <h1
            style={{
              fontFamily: 'VT323',
              fontSize: 36,
              color: 'white',
              textDecorationLine: 'underline',
            }}>
            Earn.
          </h1>
        </div>
        <div className="flex flex-row justify-between gap-x-3.5 mt-8 p-6 xl:px-20">
          <div className="">
            <img
              className="h-36 w-36 xl:w-80 xl:h-80 rounded-full"
              src='/drip5.gif'
            />
          </div>
          <div className="flex justify-center flex-col items-start">
            <h1 className="text-2xl xl:text-5xl" style={{ fontFamily: 'VT323' }}>
              Name - GameDevName
            </h1>
            <h1 className="text-2xl xl:text-5xl" style={{ fontFamily: 'VT323' }}>
              Games Published - 1
            </h1>
            <h1 className="text-2xl xl:text-5xl" style={{ fontFamily: 'VT323' }}>
              Cade Balance - 100
            </h1>
          </div>
        </div>
        <div className="flex flex-row gap-x-5 justify-center items-center">
          <h1 style={{ fontFamily: 'VT323', fontSize: 44 }}>
            Redeem
          </h1>
          <h1
            style={{
              fontFamily: 'VT323',
              fontSize: 90,
              color: 'yellow',
            }}>
            {redeemingCadeAmount}
          </h1>
          <h1 style={{ fontFamily: 'VT323', fontSize: 44 }}>Cade</h1>
        </div>
        <div className="flex flex-row justify-center gap-x-3 items-center">
          <div className="cursor-pointer" onClick={() => getUSDCForCade(10)}>
            <div className="px-2 py-1.5 font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-900 dark:text-gray-100 dark:border-gray-500">
              <h1 style={{ fontFamily: 'VT323', fontSize: 25 }}>
                10%
              </h1>
            </div>
          </div>
          <div className="cursor-pointer" onClick={() => getUSDCForCade(30)}>
            <div className="px-2 py-1.5 font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-900 dark:text-gray-100 dark:border-gray-500">
              <h1 style={{ fontFamily: 'VT323', fontSize: 25 }}>
                30%
              </h1>
            </div>
          </div>
          <div className="cursor-pointer" onClick={() => getUSDCForCade(60)}>
            <div className="px-2 py-1.5 font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-900 dark:text-gray-100 dark:border-gray-500">
              <h1 style={{ fontFamily: 'VT323', fontSize: 25 }}>
                60%
              </h1>
            </div>
          </div>
          <div className="cursor-pointer" onClick={() => getUSDCForCade(90)}>
            <div className="px-2 py-1.5 font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-900 dark:text-gray-100 dark:border-gray-500">
              <h1 style={{ fontFamily: 'VT323', fontSize: 25 }}>
                90%
              </h1>
            </div>
          </div>
          <div className="cursor-pointer" onClick={() => getUSDCForCade(100)}>
            <div className="px-2 py-1.5 font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-900 dark:text-gray-100 dark:border-gray-500">
              <h1 style={{ fontFamily: 'VT323', fontSize: 25 }}>
                100%
              </h1>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-5">
          <h1 style={{ fontFamily: 'VT323', fontSize: 30 }}>
            Recieve 👇
          </h1>
        </div>
        <div className="flex flex-row gap-x-5 justify-center items-center">
          <h1 style={{ fontFamily: 'VT323', fontSize: 100 }}>
            {recievingUSDCAmount}
          </h1>
          <h1 style={{ fontFamily: 'VT323', fontSize: 100 }}>USDC</h1>
        </div>
        <div className="flex justify-center">
          <button className="mt-5 px-16 text-4xl font-abc bg-transparent  hover:bg-blue-500 text-white font-semibold hover:text-white  border border-white hover:border-transparent rounded">
            Redeem
          </button>
        </div>
      </div>
    </>
  );
};

export default Redeem;
