import { web3 } from "@project-serum/anchor";

export const createGame = (program, map, game, user, systemProgram,) => {
  if (program) {
    (async () => {
      try {
        const tx = await program.methods
          .createGame()
          .accounts({
            map,
            game,
            user,
            systemProgram,
          })
          .rpc();
      } catch (error) { console.log(error) }
    })();
  }
};
