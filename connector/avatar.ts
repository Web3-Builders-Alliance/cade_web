import * as anchor from "@project-serum/anchor";
import { useEffect, useMemo, useState } from "react";
import { AVATAR_PROGRAM_PROGRAM_ID } from "../constant/index";
import { IDL } from "../constant/avatar_idl";
import { PublicKey, SystemProgram } from "@solana/web3.js";
import { utf8 } from "@project-serum/anchor/dist/cjs/utils/bytes";
import { findProgramAddressSync } from "@project-serum/anchor/dist/cjs/utils/pubkey";
import {
  useAnchorWallet,
  useConnection,
  useWallet,
} from "@solana/wallet-adapter-react";
import { faker } from "@faker-js/faker";

export function useAvatarProgram() {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const anchorWallet = useAnchorWallet();
  const [isInitialized , setIsInitialized] = useState(false)

  const program = useMemo(() => {
    if (anchorWallet) {
      const provider = new anchor.AnchorProvider(
        connection,
        anchorWallet,
        anchor.AnchorProvider.defaultOptions()
      );
      return new anchor.Program(IDL, AVATAR_PROGRAM_PROGRAM_ID, provider);
    }
  }, [connection, anchorWallet]);

  const getUser = async () => {
    if (program && publicKey) {
      try {
        const [profilePda] = await findProgramAddressSync(
          [utf8.encode("USER_STATE"), publicKey.toBuffer()],
          program.programId
        );
        const userAcount = await program.account.userProfile.fetch(profilePda);
        if (userAcount) {
          return {
            userData: {
              userName: userAcount.name,
              userPfpUrl: userAcount.pfpUrl,
              walletAddress : userAcount.walletAddress.toString()
            },
          };
        }
      } catch (error) {
      }
    }
  };

  const initializeUser = async () => {
    if (program && publicKey) {
      setIsInitialized(false)
      const name = faker.person.firstName('male') 
      const pfp_url = faker.image.urlLoremFlickr({category : 'nature' , width : 200 , height : 200})
      try {
        const [profilePda] = findProgramAddressSync(
          [utf8.encode("USER_STATE"), publicKey.toBuffer()],
          program.programId
        );
        if (name && pfp_url) {
          const tx = await program.methods
            .initializeUser(name, pfp_url)
            .accounts({
              userProfile: profilePda,
              authority: publicKey,
              systemProgram: SystemProgram.programId,
            })
            .rpc();
        }
        setIsInitialized(true)

      } catch (error) {
        setIsInitialized(false)
      }
    }
  };
  return {
    getUser,
    initializeUser,
    isInitialized
  };
}
