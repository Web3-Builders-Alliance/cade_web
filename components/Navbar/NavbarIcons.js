import { IoTrophyOutline } from "react-icons/io5";
import { IoGameControllerOutline } from "react-icons/io5";
import { IoGiftOutline } from "react-icons/io5";
import { TbBrandDiscord } from "react-icons/tb";
import { PiHandshakeLight } from "react-icons/pi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { PiTelegramLogo } from "react-icons/pi";
export const NavbarIcons = () => {

    const LeaderIcon = () => {
        return (
            <>
                <div className='flex flex-col'>
                    <div className='flex justify-center'>
                        <IoTrophyOutline className='text-2xl text-yellow-400 mt-1' />
                    </div>
                    <li>
                        <a href="https://gg-cade.vercel.app/bonk-or-death/leaderboard" class="font-abc text-xl mt-3 block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Leaderboard</a>
                    </li>
                </div>
            </>
        )
    }

    const GameIcon = () => {
        return (
            <>
                <div className='flex flex-col'>
                    <div className='flex justify-center'>
                        <IoGameControllerOutline className='text-2xl text-green-400 mt-1' />
                    </div>
                    <li>
                        <a href="#" class="block font-abc text-xl mt-3 py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Games</a>
                    </li>
                </div>
            </>
        )
    }

    const PrizesIcon = () => {
        return (
            <>
                <div className='flex flex-col'>
                    <div className='flex justify-center'>
                        <IoGiftOutline className='text-2xl text-red-500 mt-1' />
                    </div>
                    <li>
                        <a href="#" class="block font-abc text-xl mt-3 py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Prizes</a>
                    </li>
                </div>
            </>
        )
    }

    const DiscordIcon = () => {
        return (
            <>
                <div className='flex flex-col'>
                    <div className='flex justify-center'>
                        <TbBrandDiscord className='text-3xl text-purple-700 mt-3' />
                    </div>
                    {/* <li>
                        <a href="#" class="block font-abc text-xl mt-3 py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Discord</a>
                    </li> */}
                </div>
            </>
        )
    }


    const P2P = () => {
        return (
            <>
                <div className='flex flex-col'>
                    <div className='flex justify-center'>
                        <PiHandshakeLight className='text-2xl text-yellow-400  mt-1' />
                    </div>
                    <li>
                        <a href="#" class="block font-abc text-xl mt-3 py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">P2P</a>
                    </li>
                </div>
            </>
        )
    }

    const Notifications = () => {
        return (
            <>
                <div className='flex flex-col'>
                    <div className='flex justify-center'>
                        <IoIosNotificationsOutline className='text-3xl text-yellow-400 mt-3' />
                    </div>
                   
                </div>
            </>
        )
    }

    const Telegram = () => {
        return (
            <>
                <div className='flex flex-col'>
                    <div className='flex justify-center'>
                        <PiTelegramLogo className='text-3xl text-blue-600 mt-3' />
                    </div>
                   
                </div>
            </>
        )
    }

    const UserProfile = () => {
        return (
            <>
                <div className='flex flex-col'>
                    <div className='flex justify-center'>
                        <FiUser className='text-2xl mt-1' />
                    </div>
                    <li>
                        <a href="#" class="block font-abc text-xl mt-3 py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Profile</a>
                    </li>
                </div>
            </>
        )
    }

    return {
        LeaderIcon,
        GameIcon,
        PrizesIcon,
        P2P,
        DiscordIcon,
        Notifications,
        UserProfile,
        Telegram
    }
}

