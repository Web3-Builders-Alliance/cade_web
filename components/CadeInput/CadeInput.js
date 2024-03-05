import React from 'react'
import { IoSend } from "react-icons/io5";
const CadeInput = () => {
    return (
        <>

            <form>
                <label for="default-search" class="mt-5 mb-2 text-sm font-medium sr-only text-white">Search</label>
                <div class="relative">
                    <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm border-2 rounded-lg  bg-gray-900 border-gray-500 placeholder-gray-400 text-white" placeholder="Enter your thoughts ..." required />
                    <button type="submit" class="text-white absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 bg-white"><IoSend className='text-blue-600'/></button>
                </div>
            </form>

        </>
    )
}

export default CadeInput