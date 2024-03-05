import { BN } from "@project-serum/anchor";
import { PublicKey, LAMPORTS_PER_SOL, SystemProgram } from "@solana/web3.js";

const resolveBet = async (program, seed, player) => {

  let house = new PublicKey("F4KkpqfJJTfqn8sZhCkaXA7pS2KikQcN1CLnP2UFGfV8")
  let vault = PublicKey.findProgramAddressSync([Buffer.from("vault"), house.toBuffer()], program.programId)[0];
  let bet = PublicKey.findProgramAddressSync([Buffer.from("bet"), vault.toBuffer(), seed.toArrayLike(Buffer,"le", 16)], program.programId)[0];
const result = program.methods.placeBet(seed, 15, new BN(LAMPORTS_PER_SOL/100))
    .accounts({
      player: player.publicKey,
      house: house,
      vault,
      bet,
      systemProgram:SystemProgram.programId 
    })
    .rpc().then(async (result) => {

    const pdas = await program.account.bet.all()
    console.log({pdas})
    console.log({result})
    })
  }

export default resolveBet;