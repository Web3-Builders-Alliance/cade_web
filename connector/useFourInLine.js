import * as anchor from "@coral-xyz/anchor";
import { useEffect, useMemo, useState } from "react";
import { FOUR_IN_LINE_PROGRAM_ID } from "../constant/index";
import { IDL } from "../constant/fourinline";

import {
  PublicKey,
  SYSVAR_RENT_PUBKEY,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import { utf8 } from "@coral-xyz/anchor/dist/cjs/utils/bytes";
import {
  useAnchorWallet,
  useConnection,
  useWallet,
} from "@solana/wallet-adapter-react";

export function useFourInLine() {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const anchorWallet = useAnchorWallet();

  const program = useMemo(() => {
    if (anchorWallet) {
      const provider = new anchor.AnchorProvider(
        connection,
        anchorWallet,
        anchor.AnchorProvider.defaultOptions()
      );
      return new anchor.Program(IDL, FOUR_IN_LINE_PROGRAM_ID, provider);
    }
  }, [connection, anchorWallet]);
  return {
    program,
  };
}

export const playGame = (program, gamePublicKey, cell, payer, setError) => {
  if (program) {
    (async () => {
      try {
        const tx = await program.methods
          .playGame(cell)
          .accounts({
            game: gamePublicKey,
            payer,
            systemProgram: anchor.web3.SystemProgram.programId,
          })
          .rpc();
      } catch (error) {
        console.log(error);
      }
    })();
  }
};

export const Board = ({ board, gamePublicKey, program, payer, playable }) => {
  const [error, setError] = useState();
  return (
    <>
      <div className="grid gap-4 grid-cols-7 p-2 m-2 mx-auto border border-blue-600 w-80">
        {board?.map((item, index) => (
          <button
            key={index}
            className="h-8 bg-blue-600 text-white text-center font-extrabold"
            onClick={() => {
              !!item.empty &&
                playable &&
                playGame(program, gamePublicKey, index, payer, setError);
            }}
          >
            {`${item.empty ? " " : Object.keys(item)[0]}`}
          </button>
        ))}
      </div>
    </>
  );
};
