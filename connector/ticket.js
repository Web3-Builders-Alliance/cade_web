import * as anchor from "@coral-xyz/anchor";
import { useEffect, useMemo, useState } from "react";
import { TICKET_PROGRAM_ID } from "../constant";
import { IDL } from "../constant/idl";
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
import { TOKEN_PROGRAM_ID } from "@coral-xyz/anchor/dist/cjs/utils/token";

export function useTicket() {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const anchorWallet = useAnchorWallet();

  const [loading, setLoading] = useState(false);

  const program = useMemo(() => {
    if (anchorWallet) {
      const provider = new anchor.AnchorProvider(
        connection,
        anchorWallet,
        anchor.AnchorProvider.defaultOptions()
      );
      return new anchor.Program(IDL, TICKET_PROGRAM_ID, provider);
    }
  }, [connection, anchorWallet]);

  const initCade = async () => {
    try {
      setLoading(true);
      const METADATA_SEED = "metadata";
      const TOKEN_METADATA_PROGRAM_ID = new PublicKey(
        "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
      );

      const MINT_SEED = "mint";

      const metadata = {
        name: "Cade",
        symbol: "CDX",
        uri: "https://pan5exjah3p3wqjeujj4kylo4vgt5znvwrt77lnf5gcmm6tadsea.arweave.net/eBvSXSA-37tBJKJTxWFu5U0-5bW0Z_-tpemExnpgHIg",
        decimals: 9,
      };
      const mintAmount = 10;

      const [mint] = await anchor.web3.PublicKey.findProgramAddressSync(
        [utf8.encode(MINT_SEED)],
        new PublicKey("eM4ySstVQUBgfyUCVtPWAYoh6MwzoHiqGYbYVREFaTu")
      );

      const [metadataAddress] =
        await anchor.web3.PublicKey.findProgramAddressSync(
          [
            utf8.encode(METADATA_SEED),
            TOKEN_METADATA_PROGRAM_ID.toBuffer(),
            mint.toBuffer(),
          ],
          TOKEN_METADATA_PROGRAM_ID
        );

      const context = {
        metadata: metadataAddress,
        mint: mint,
        payer: publicKey,
        rent: SYSVAR_RENT_PUBKEY,
        systemProgram: SystemProgram.programId,
        tokenProgram: TOKEN_PROGRAM_ID,
        tokenMetadataProgram: TOKEN_METADATA_PROGRAM_ID,
      };

      const transaction = new Transaction();

      const cadeInit = await program.methods
        .initCade(metadata)
        .accounts(context)
        .instruction();

      transaction.add(cadeInit);

      transaction.recentBlockhash = (
        await connection.getLatestBlockhash()
      ).blockhash;

      transaction.feePayer = anchorWallet.publicKey;

      const tx = await anchorWallet
        .signTransaction(transaction)
        .catch((err) => {
          console.log(err);
          throw new Error("User rejected the request.");
        });

      const buffer = tx.serialize().toString("base64");

      let txid = await connection
        .sendEncodedTransaction(buffer)
        .catch((err) => {
          throw new Error(`Unexpected Error Occurred: ${err}`);
        });

      console.log(`Done! Transaction Hash: ${txid}`);
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const mintCade = async () => {
    const metadata = {
      name: "Cade",
      symbol: "CDX",
      uri: "https://pan5exjah3p3wqjeujj4kylo4vgt5znvwrt77lnf5gcmm6tadsea.arweave.net/eBvSXSA-37tBJKJTxWFu5U0-5bW0Z_-tpemExnpgHIg",
      decimals: 9,
    };
    const mintAmount = 1000;
    // const mint = new PublicKey("ByQ3buPaDN8Z1BMxCgCrpxEUCnwvN8p4dSe8VHhJ9apr")

    const [mint] = await anchor.web3.PublicKey.findProgramAddressSync(
      [utf8.encode("mint")],
      new PublicKey("eM4ySstVQUBgfyUCVtPWAYoh6MwzoHiqGYbYVREFaTu")
    );

    const destination = await anchor.utils.token.associatedAddress({
      mint: mint,
      owner: publicKey,
    });
    console.log(`destination:${destination}`);

    const context = {
      mint,
      destination,
      publicKey,
      rent: SYSVAR_RENT_PUBKEY,
      systemProgram: SystemProgram.programId,
      tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
      associatedTokenProgram: anchor.utils.token.ASSOCIATED_PROGRAM_ID,
    };

    const transaction = new Transaction();
    const mintCade = await program.methods
      .mintCade(new anchor.BN(mintAmount * 1000000 * metadata.decimals*2))
      .accounts(context)
      .instruction();

    transaction.add(mintCade);

    transaction.recentBlockhash = (
      await connection.getLatestBlockhash()
    ).blockhash;

    transaction.feePayer = anchorWallet.publicKey;

    const tx = await anchorWallet.signTransaction(transaction).catch((err) => {
      console.log(err);
      throw new Error("User rejected the request.");
    });

    const buffer = tx.serialize().toString("base64");

    console.log(buffer);

    let txid = await connection.sendEncodedTransaction(buffer).catch((err) => {
      throw new Error(`Unexpected Error Occurred: ${err}`);
    });

    console.log(`Done! Transaction Hash: ${txid}`);
  };

  return {
    initCade,
    mintCade,
  };
}
