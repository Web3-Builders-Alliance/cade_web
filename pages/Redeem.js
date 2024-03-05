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
  const { createTransaction } = useUSDCPay();
  const {publicKey} = useWallet()
  const [loading, setLoading] = useState(false);

  const newTransfer = () => {
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
          "BjwKL4x9TjoBgzkgBW14bzn1ocu7HX8up63qXG9AFWE9"
        );

        // Recipient address
        const to = new PublicKey(
          "44n5CYX18L6p4VxVECE9ZNYrAGB9GKD477b78kPNq5Su"
        );

        const form = new PublicKey(
          "A7QXP9G8NE8vVSZ1s8XdwF5SmBHvg21S6wavJ7vwsr3i"
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

  const finalNewTransfer = () => {
    createTransaction(
      publicKey,
      new PublicKey("2JSg1MdNqRg9z4RP7yiE2NV86fux2BNtF3pSDjhoi767"),
      2
    );
    setTimeout(() => {
      newTransfer();
    }, [2000]);
  };
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

  const finalNewTransferh = () => {
    createTransaction(
      new PublicKey("44n5CYX18L6p4VxVECE9ZNYrAGB9GKD477b78kPNq5Su"),
      new PublicKey("2JSg1MdNqRg9z4RP7yiE2NV86fux2BNtF3pSDjhoi767"),
      9
    );
    setTimeout(() => {
      newTransferh();
    }, [2000]);
  };

  return (
    <>
      <section className="bg-[url('/kn.jpg')] text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="font-abc text-7xl font-medium mb-2 text-white">
                Redeem Cade
              </h1>
            </div>
            <p className="lg:w-1/2 w-full font-abc text-white text-5xl mt-2">
              Redeem Your Cade for Cool Prizes.
            </p>
          </div>  

          {/* CadeGameLife */}
          <h1 className="text-white text-5xl font-abc">Cade Game Life</h1>
          <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {CadeGameLife.map((item , key) => {
              return (
                <div className="bg-black p-6 rounded-lg" key={key}>
                  <img
                    height={100}
                    width={100}
                    className="h-60 rounded w-full object-cover object-center mb-6"
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
                        // onClick={() => finalNewTransferh()}
                        // onClick={() => execute("https://wd76k5vv2aka7kcyewzori53k65knga2yncczccn2xxleyurucha.arweave.net/sP_ldrXQFA-oWCWy6KO7V7qmmBrDRCyITdXusmKRoI4")}
                        className="mt-5 text-black font-abc bg-white border-0 py-2 px-6 focus:outline-none rounded text-2xl"
                      >
                        Buy for {item.price} Tickets
                      </button>
                    </>
                  )}
                </div>
              );
            })}
          </div>

          {/* GamePass */}
          <h1 className="text-white text-5xl font-abc ml-16">Cade Game Pass</h1>
          <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {GamePass.map((item , key) => {
              return (
                <div className="bg-black p-6 rounded-lg" key={key}>
                  <img
                    height={100}
                    width={100}
                    className="h-60 rounded w-full object-cover object-center mb-6"
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
                  <button
                    // onClick={() => execute("https://q75jr5p5oh2pq5wc2xsxptsdiqvmi2wjcoo7xjz47bj7qp7eizra.arweave.net/h_qY9f1x9Ph2wtXld85DRCrEaskTnfunPPhT-D_kRmI")}
                    className="mt-5 text-black font-abc bg-white border-0 py-2 px-6 focus:outline-none rounded text-2xl"
                  >
                    Buy for {item.price} Tickets
                  </button>
                </div>
              );
            })}
          </div>

          {/* BlindChest */}
          <h1 className="text-white text-5xl font-abc ml-16">
            Cade Blind Chest
          </h1>
          <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {BlindChest.map((item) => {
              return (
                <div className="bg-black p-6 rounded-lg" key={item.name}>
                  <img
                    height={100}
                    width={100}
                    className="h-60 rounded w-full object-cover object-center mb-6"
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
                        // onClick={() => finalNewTransfer()}
                        className="mt-5 text-black font-abc bg-white border-0 py-2 px-6 focus:outline-none rounded text-2xl"
                      >
                        Buy for {item.price} Tickets
                      </button>
                    </>
                  )}
                </div>
              );
            })}
          </div>

          {/* LotteryTicket */}
          <h1 className="text-white text-5xl font-abc ml-16">LotteryTicket</h1>
          <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {LotteryTicket.map((item) => {
              return (
                <div className="bg-black p-6 rounded-lg" key={item.name}>
                  <img
                    height={100}
                    width={100}
                    className="h-60 rounded w-full object-cover object-center mb-6"
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
                  <button
                    // onClick={() => execute()}
                    className="mt-5 text-black font-abc bg-white border-0 py-2 px-6 focus:outline-none rounded text-2xl"
                  >
                    Buy for {item.price} Tickets
                  </button>
                </div>
              );
            })}
          </div>

          {/* Blindbag */}
          <h1 className="text-white text-5xl font-abc ml-16">Cade BlindBag</h1>
          <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {BlindBag.map((item , key) => {
              return (
                <>
                  <div className="bg-black p-6 rounded-lg" key={key.name}>
                    <img
                      height={100}
                      width={100}
                      className="h-60 rounded w-full object-cover object-center mb-6"
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
                    <button
                      // onClick={() => execute(
                      //     "https://7nfbqbmned7bnmyijjymjhnmekgf47ojqzhn7r64gypqox7ymaka.arweave.net/-0oYBY0g_hazCEpwxJ2sIoxefcmGTt_H3DYfB1_4YBQ"
                      // )}
                      className="mt-5 text-black font-abc bg-white border-0 py-2 px-6 focus:outline-none rounded text-2xl"
                    >
                      Buy for {item.price} Tickets
                    </button>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Redeem;
