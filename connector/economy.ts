import * as anchor from "@project-serum/anchor";
import { useEffect, useMemo, useState } from "react";
import { ECONOMY_PROGRAM_ID } from "../constant/index";
import { IDL } from "../constant/economy";
import { PublicKey, SystemProgram, Keypair, Commitment } from "@solana/web3.js";
import * as bs58 from "bs58";
import { BN } from "@coral-xyz/anchor";
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

export function useCadeEconomy() {
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
      return new anchor.Program(IDL, ECONOMY_PROGRAM_ID, provider);
    }
  }, [connection, anchorWallet]);

  const gamer_vault = Keypair.fromSecretKey(bs58.decode(wallet_three));

  let initializer_x_ata: PublicKey;
  let initializer_lp_ata: PublicKey;
  let vault_x_ata: PublicKey;
  let vault_y_ata: PublicKey;
  let vault_lp_ata: PublicKey;
  let indie_gamer_x_ata: PublicKey;
  let indie_gamer_vault: PublicKey;

  const auth = new PublicKey("F1k4KWvxvAATajNNjRjgr6iKafyiE2nguiqWgQQMRx7F");
  const new_auth = new PublicKey(
    "3BdgDss9nYNpDdtkquXxdFBtMzLMAWyJgEP5gqCQdUUT"
  );
  const config = new PublicKey("FJqdDWDbkiR82GgQGUpHJsR7poXNC4M3Yp2aYmSXVJsq");
  const lp_config = new PublicKey(
    "AnjcKCJqacNLzaZjjkrjqgUFCXW2fedgGB4zfRNFreCg"
  );

  const mint_x = new PublicKey("Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr");
  const mint_lp = PublicKey.findProgramAddressSync(
    [Buffer.from("lp"), config.toBuffer()],
    new PublicKey("FtrbVfeTkte7b9KTHYzpaRzJZT1t1SHaR1QuhyAusNTW")
  )[0];

  const createATA = async () => {
    try {
      initializer_x_ata = await getAssociatedTokenAddress(
        mint_x,
        publicKey,
        false,
        TOKEN_PROGRAM_ID
      );
      initializer_lp_ata = await getAssociatedTokenAddress(
        mint_lp,
        publicKey,
        false,
        TOKEN_PROGRAM_ID
      );
      vault_x_ata = await getAssociatedTokenAddress(
        mint_x,
        auth,
        true,
        TOKEN_PROGRAM_ID
      );
      vault_y_ata = await getAssociatedTokenAddress(
        mint_x,
        new_auth,
        true,
        TOKEN_PROGRAM_ID
      );
      vault_lp_ata = await getAssociatedTokenAddress(
        mint_lp,
        auth,
        true,
        TOKEN_PROGRAM_ID
      );
      indie_gamer_vault = await getAssociatedTokenAddress(
        mint_lp,
        gamer_vault.publicKey,
        false,
        TOKEN_PROGRAM_ID
      );
      indie_gamer_x_ata = await getAssociatedTokenAddress(
        mint_x,
        gamer_vault.publicKey,
        false,
        TOKEN_PROGRAM_ID
      );

      console.log(initializer_x_ata.toBase58());
      console.log(initializer_lp_ata.toBase58());
      console.log(vault_x_ata.toBase58());
      console.log(vault_y_ata.toBase58());
      console.log(vault_lp_ata.toBase58());
      console.log(indie_gamer_vault.toBase58());
      console.log(mint_lp.toBase58());
    } catch (error) {
      console.log(error);
    }
  };

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

  const swap = async () => {
    if (program && publicKey) {
      try {
        await createATA();
        const tx = await program.methods
          .swap(
            new BN(5_000_000),
            new BN(Math.floor(new Date().getTime() / 1000) + 600)
          )
          .accounts({
            auth,
            newAuth: new_auth,
            user: publicKey,
            user2: publicKey,
            mintX: mint_x,
            mintLp: mint_lp,
            userVaultX: initializer_x_ata,
            userVaultLp: initializer_lp_ata,
            vaultX: vault_x_ata,
            vaultY: vault_y_ata,
            vaultLp: vault_lp_ata,
            config,
            lpConfig: lp_config,
            tokenProgram: TOKEN_PROGRAM_ID,
            associatedTokenProgram: ASSOCIATED_PROGRAM_ID,
            systemProgram: SystemProgram.programId,
          })
          .rpc({ skipPreflight: true });
        await confirmTx(tx);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const pay_for_game = async () => {
    if (program && publicKey) {
      try {
        await createATA();
        const tx = await program.methods
          .pay(new BN(1_000_000))
          .accounts({
            auth,
            gamer: gamer_vault.publicKey,
            user: publicKey,
            mintLp: mint_lp,
            gamerVaultLp: indie_gamer_vault,
            userVaultLp: initializer_lp_ata,
            config,
            lpConfig: lp_config,
            tokenProgram: TOKEN_PROGRAM_ID,
            associatedTokenProgram: ASSOCIATED_PROGRAM_ID,
            systemProgram: SystemProgram.programId,
          })
          .signers([gamer_vault])
          .rpc({
            skipPreflight: true,
          });
        await confirmTx(tx);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const claim_usdc = async () => {
    try {
      if (program && publicKey) {
        await createATA()
        const tx = await program.methods
          .claimUsdcForCade()
          .accounts({
            auth,
            newAuth: new_auth,
            user: publicKey,
            user2: publicKey,
            gamer: gamer_vault.publicKey,
            mintX: mint_x,
            mintLp: mint_lp,
            vaultLp: vault_lp_ata,
            vaultY: vault_y_ata,
            gamerVaultLp: indie_gamer_vault,
            gamerVaultX: indie_gamer_x_ata,
            lpConfig: lp_config,
            config,
            tokenProgram: TOKEN_PROGRAM_ID,
            associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
            systemProgram: SystemProgram.programId,
          })
          .signers([gamer_vault])
          .rpc({ skipPreflight: true });
          await confirmTx(tx)
      }
    } catch (error) {
      console.log(error);
    }
  };
  return {
    swap,
    pay_for_game,
    claim_usdc
  };
}
