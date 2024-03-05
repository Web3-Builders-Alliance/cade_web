import { web3 } from "@project-serum/anchor";

export const deployUnits = (program, deploys, game, user, map, systemProgram,) => {
  if (program) {
    (async () => {
      try {
        const tx = await program.methods
          .deployUnits( deploys,)
          .accounts({
            game,
            user,
            map,
            systemProgram,
          })
          .rpc();
      } catch (error) { console.log(error) }
    })();
  }
};
