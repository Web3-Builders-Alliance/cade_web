import React, { useState } from "react";
import { OpenChest } from "../../components/Data/data";
import {
  clusterApiUrl,
  Keypair,
  Transaction,
  Connection,
  Commitment,
  PublicKey,
} from "@solana/web3.js";
import * as bs58 from "bs58";
import { useUSDCPay } from "../../hooks/transfer";
import { getOrCreateAssociatedTokenAccount, transfer } from "@solana/spl-token";
import { useWallet } from "@solana/wallet-adapter-react";
const RedeemBlindChest = ({ name, img }) => {
  const { createTransaction } = useUSDCPay();
  const {publicKey} = useWallet()
  const [redeem, setRedeem] = useState(false);
  const [loading, setLoading] = useState(false);

  const newTransferh = () => {
    (async () => {
      try {
        setLoading(true);
        const keypair = Keypair.fromSecretKey(bs58.decode(sw));
        const connection = new Connection(
          "https://api.devnet.solana.com",
          "finalized"
        );

        // Mint address
        const mint = new PublicKey(
          "JDJdgTdgomKbcq6i5XJL7KncBZWLiwS4TioMz2S4APLd"
        );

        // Recipient address
        const to = new PublicKey(
          "44n5CYX18L6p4VxVECE9ZNYrAGB9GKD477b78kPNq5Su"
        );

        const form = new PublicKey(
          "xvuabNVBH3Y4GxYc4QbXXZyKCLBpqwXA1gZZrsnKNaz"
        );

        const to_account = await getOrCreateAssociatedTokenAccount(
          connection,
          keypair,
          mint,
          publicKey
        );

        const txhash = transfer(
          connection,
          keypair,
          form,
          to_account.address,
          keypair.publicKey,
          1
        );

        console.log("Success ! Check", txhash);
        setLoading(false);
      } catch (e) {
        console.error(`Oops, something went wrong: ${e}`);
      }
    })();
  };

  const finalNewTranactionh = () => {
    // createTransaction(
    //   new PublicKey("44n5CYX18L6p4VxVECE9ZNYrAGB9GKD477b78kPNq5Su"),
    //   new PublicKey("2JSg1MdNqRg9z4RP7yiE2NV86fux2BNtF3pSDjhoi767"),
    //   9
    // );
    setTimeout(() => {
      newTransferh();
    }, 2000);
  };

  return (
    <>
      <div className="flex justify-center mt-10">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src={img} alt="hgh" />
          </a>
          <div className="flex flex-row p-5">
            <a href="#">
              <h5 className="mt-3 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {name}
              </h5>
            </a>
            <button
              onClick={() => setRedeem(!redeem)}
              className="ml-5 text-black font-abc bg-white border-0 py-2 px-6 focus:outline-none rounded text-2xl"
            >
              Redeem
            </button>
          </div>
        </div>
      </div>

      {redeem ? (
        <>
          <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            {OpenChest.map((item) => {
              return (
                <div className="bg-black p-6 rounded-lg" key={item.name}>
                  <img
                    height={20}
                    width={20}
                    className="h-80 rounded w-full object-cover object-center mb-6"
                    src={item.img}
                    alt="content"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    CADE STORE
                  </h3>
                  <h2 className="text-white text-3xl font-abc title-font mb-4">
                    {item.name}
                  </h2>
                  <p className="text-white font-abc text-2xl">{item.desc}</p>
                  {/* needs onClick execute function  */}
                  {loading ? (
                    <>Loading</>
                  ) : (
                    <>
                      <button
                        // onClick={() => finalNewTranactionh()}
                        className="mt-5 text-black font-abc bg-white border-0 py-2 px-6 focus:outline-none rounded text-2xl"
                      >
                        Get it Now
                      </button>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.query;
  let name = "";
  let img = "";
  let isExist = false;
  console.log(`slug is my ${slug}`);
  if (slug == "BlindChest") {
    (name = "Blind Chest x1"), (img = "/treasure.png");
    isExist = true;
  }
  if (slug == "BlindBag") {
    (name = "BlindBag x1"), (img = "/bag.png"), (isExist = true);
  }

  return {
    props: { slug, name, img, isExist },
  };
}

export default RedeemBlindChest;
