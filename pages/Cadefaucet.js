import React from 'react'
import { useTicket } from '../connector/ticket'
const Cadefaucet = () => {
    const { mintCade } = useTicket()
    return (
        <>

            <div class="flex h-screen items-center justify-center flex-col">
                <h1 class="text-4xl font-bold mb-4">Get Devnet Cade</h1>
                <button onClick={()=> mintCade()} class="bg-yellow-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Claim</button>
            </div>

        </>
    )
}

export default Cadefaucet