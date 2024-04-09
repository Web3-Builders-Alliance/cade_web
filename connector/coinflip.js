import * as anchor from "@project-serum/anchor";
import { useEffect, useMemo, useState } from "react";
import { COIN_FLIP_PROGRAM_ID } from "../constant";
import { IDL } from "../constant/coinflip_idl";
import { utf8 } from "@coral-xyz/anchor/dist/cjs/utils/bytes";
import {
  useAnchorWallet,
  useConnection,
  useWallet,
} from "@solana/wallet-adapter-react";
import { TOKEN_PROGRAM_ID } from "@coral-xyz/anchor/dist/cjs/utils/token";
import {
  PublicKey,
  SYSVAR_RENT_PUBKEY,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";

export function useCoinFlip() {
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
      return new anchor.Program(IDL, COIN_FLIP_PROGRAM_ID, provider);
    }
  }, [connection, anchorWallet]);

  function programForUser(user) {
    return anchor.Program(IDL, COIN_FLIP_PROGRAM_ID, user.provider);
  }

  async function play(provider, program, coinFlip, playerOne, playerTwo) {
    const playerChoice = 1;
    const randomSeed = new anchor.BN(Math.floor(Math.random() * 100000));

    const tx = await program.rpc.play(playerChoice, randomSeed, {
      accounts: {
        vendor: playerOne.publicKey,
        player: playerTwo.publicKey,
        coinFlip,
        systemProgram: anchor.web3.SystemProgram.programId,
      },
      // signers: playerTwo instanceof anchor.Wallet ? [] : [playerTwo],
    });
    const gameState = await program.accounts.coinFlip.fetch(coinFlip);

    // await provider.connection.confirmTransaction(tx);
  }

  const setup = async () => {
    const provider = anchor.AnchorProvider.local("http://127.0.0.1:8899");
    anchor.setProvider(provider);
    try {
      const vendor = anchor.web3.Keypair.generate();
      const player = anchor.web3.Keypair.generate();

      // let sig = await anchor.connection.requestAirdrop(
      //   player.publicKey,
      //   1000000000000
      // );
      // await provider.connection.confirmTransaction(sig);

      // let sig2 = await provider.connection.requestAirdrop(
      //   vendor.publicKey,
      //   1000000000000
      // );
      // await provider.connection.confirmTransaction(sig2);
      const vendorProgram = programForUser(vendor);

      const [coinFlipPDA, _] =
        await anchor.web3.PublicKey.findProgramAddressSync(
          [
            utf8.encode("coin-flip"),
            vendor.publicKey.toBuffer(),
            player.publicKey.toBuffer(),
          ],
          program.programId
        );

      const betAmount = new anchor.BN(100000000000);
      const randomSeed = new anchor.BN(Math.floor(Math.random() * 100000));
      await vendorProgram.rpc.setup(player.publicKey, betAmount, randomSeed, {
        accounts: {
          coinFlip: coinFlipPDA,
          vendor: vendor.publicKey,
          systemProgram: anchor.web3.SystemProgram.programId,
        },
        signers: [vendor],
      });
    } catch (error) {}
  };
  return {
    setup,
  };
}
