import { FindNftsByOwnerOutput, Metadata, Metaplex, Nft, Sft, keypairIdentity } from "@metaplex-foundation/js";
import { AnchorWallet } from "@solana/wallet-adapter-react";
import { Connection, clusterApiUrl, Keypair, PublicKey } from "@solana/web3.js";

type NFTAccess = {
    address: string,
    access: string,
}

const accessNFTS: Array<NFTAccess> = [
    {
        address: "41GgC1qWFSVJJgn1M7K34X4bY2bd9WTyy6J4iYpa3YCE",
        access: "full",
    },
]

const checkNFTaccess = async (connection: any, wallet: AnchorWallet | undefined) => {
    const metaplex = new Metaplex(connection);
    const keypair = Keypair.generate();
    metaplex.use(keypairIdentity(keypair));

    if (!connection || !wallet?.publicKey) return [];
    const owner = { owner: wallet?.publicKey }
    try {
        const allNFTs = await metaplex.nfts().findAllByOwner(owner)

        return allNFTs.reduce(
          (acc, NFT) =>{
            const accessnft = accessNFTS.find((accessNFT) => accessNFT.address === NFT.creators[0].address.toString())
            return accessnft ? [...acc, {NFT, access: accessnft.access}] : acc
          }
          ,[]
          )
    } catch (error) {
        console.log(error)
        return []
    }
}
export default checkNFTaccess