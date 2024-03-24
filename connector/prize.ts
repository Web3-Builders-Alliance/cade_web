import * as anchor from "@project-serum/anchor";
import { useEffect, useMemo, useState } from "react";
import { PRIZE_MANAGER_PROGRAM_ID } from "../constant/index";
import { IDL } from "../constant/prize_idl";
import { PublicKey, SystemProgram, Keypair, Commitment } from "@solana/web3.js";
import * as bs58 from "bs58";
import { BN } from "@coral-xyz/anchor";
import { randomBytes } from "crypto";
import { utf8 } from "@project-serum/anchor/dist/cjs/utils/bytes";
import { findProgramAddressSync } from "@project-serum/anchor/dist/cjs/utils/pubkey";
import {
  useAnchorWallet,
  useConnection,
  useWallet,
} from "@solana/wallet-adapter-react";
import { faker, tr } from "@faker-js/faker";
import { wallet, wallet_two, wallet_three } from "../wallet/wallet";
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  TOKEN_PROGRAM_ID,
  getAssociatedTokenAddress,
  getOrCreateAssociatedTokenAccount,
} from "@solana/spl-token";
import { ASSOCIATED_PROGRAM_ID } from "@coral-xyz/anchor/dist/cjs/utils/token";

export function CadePrizeManager() {
  const commitment: Commitment = "confirmed";
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
      return new anchor.Program(IDL, PRIZE_MANAGER_PROGRAM_ID, provider);
    }
  }, [connection, anchorWallet]);

  const confirmTx = async (signature: string) => {
    const latestBlockhash = await anchor
      .getProvider()
      .connection.getLatestBlockhash();
    await anchor.getProvider().connection.confirmTransaction(
      {
        signature,
        ...latestBlockhash,
      },
      commitment
    );
  };

  const seed = new BN(randomBytes(8));

  const put_prize_on_its_vault = async () => {
    if (program && publicKey) {
      try {
        const cade_chest_mint = new PublicKey(
          "BjwKL4x9TjoBgzkgBW14bzn1ocu7HX8up63qXG9AFWE9"
        );
        const prize_auth = PublicKey.findProgramAddressSync(
          [Buffer.from("prize_auth")],
          program.programId
        )[0];
        // const prize_config = PublicKey.findProgramAddressSync(
        //   [Buffer.from("prize"), seed.toBuffer().reverse()],
        //   program.programId
        // )[0];
        const prize_config = new PublicKey(
          "5AkpQzxXfzFeTCNQZ4s1NaP2GyewTC81QQxbUtzrEn1w"
        );
        const particular_prize_vault = await getAssociatedTokenAddress(
          cade_chest_mint,
          prize_auth,
          true,
          TOKEN_PROGRAM_ID
        );
        const admin_prize_vault = await getAssociatedTokenAddress(
          cade_chest_mint,
          publicKey,
          false,
          TOKEN_PROGRAM_ID
        );
        const tx = await program.methods
          .putPrizeOnVault()
          .accounts({
            user: publicKey,
            prizeAuth: prize_auth,
            prizeMint: cade_chest_mint,
            particularPrizeVault: particular_prize_vault,
            adminPrizeVault: admin_prize_vault,
            prizeConfig: prize_config,
            tokenProgram: TOKEN_PROGRAM_ID,
            associatedTokenProgram: ASSOCIATED_PROGRAM_ID,
            systemProgram: SystemProgram.programId,
          })
          .rpc({ skipPreflight: true });
        await confirmTx(tx);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const claim_specific_prize = async () => {
    if (program && publicKey) {
      try {
        const cade_chest_mint = new PublicKey(
          "BjwKL4x9TjoBgzkgBW14bzn1ocu7HX8up63qXG9AFWE9"
        );
        const prize_auth = PublicKey.findProgramAddressSync(
          [Buffer.from("prize_auth")],
          program.programId
        )[0];
        // const prize_config = PublicKey.findProgramAddressSync(
        //   [Buffer.from("prize"), seed.toBuffer().reverse()],
        //   program.programId
        // )[0];
        const prize_config = new PublicKey(
          "5AkpQzxXfzFeTCNQZ4s1NaP2GyewTC81QQxbUtzrEn1w"
        );
        const particular_prize_vault = await getAssociatedTokenAddress(
          cade_chest_mint,
          prize_auth,
          true,
          TOKEN_PROGRAM_ID
        );
        const claimer_ata = await getAssociatedTokenAddress(
          cade_chest_mint,
          publicKey,
          false,
          TOKEN_PROGRAM_ID
        );
        
        const tx = await program.methods
          .claimPrize(new BN(1))
          .accounts({
            userClaim: publicKey,
            prizeMint: cade_chest_mint,
            particularPrizeVault: particular_prize_vault,
            claimerAta: claimer_ata,
            prizeAuth: prize_auth,
            prizeConfig: prize_config,
            tokenProgram: TOKEN_PROGRAM_ID,
            associatedTokenProgram: ASSOCIATED_PROGRAM_ID,
            systemProgram: SystemProgram.programId,
          })
          .rpc({ skipPreflight: true });
        await confirmTx(tx);
      } catch (e) {
        console.log(e);
      }
    }
  };
  return {
    put_prize_on_its_vault,
    claim_specific_prize,
  };
}
