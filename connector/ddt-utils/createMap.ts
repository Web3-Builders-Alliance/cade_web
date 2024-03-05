import { web3 } from "@project-serum/anchor";

export const createMap = (program, name, board, budget, map, user, systemProgram,) => {
  if (program) {
    (async () => {
      try {
        const tx = await program.methods
          .createMap( name, board, budget,)
          .accounts({
            map,
            user,
            systemProgram,
          })
          .rpc();
      } catch (error) { console.log(error) }
    })();
  }
};
