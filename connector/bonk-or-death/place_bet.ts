import {BN} from "bn.js";
import { Keypair, LAMPORTS_PER_SOL, PublicKey, SystemProgram } from "@solana/web3.js";
import { randomBytes } from "crypto"

const placeBet = async (program, seed, player) => {

  let house = new PublicKey("F4KkpqfJJTfqn8sZhCkaXA7pS2KikQcN1CLnP2UFGfV8")
  let vault = PublicKey.findProgramAddressSync([Buffer.from("vault"), house.toBuffer()], program.programId)[0];
  let bet = PublicKey.findProgramAddressSync([Buffer.from("bet"), vault.toBuffer(), seed.toArrayLike(Buffer,"le", 16)], program.programId)[0];

  let signature = await program.methods.placeBet(seed, 15, new BN(LAMPORTS_PER_SOL/100))
  .accounts({
    player: player.publicKey,
    house,
    vault,
    bet,
    systemProgram:SystemProgram.programId 
  })
  .rpc().then(async (signature) => {

  const pdas = await program.account.bet.all()
  console.log({pdas})
  console.log({signature})
  })
}

export default placeBet;