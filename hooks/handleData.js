import React, { useEffect, useState, useContext } from "react";
import { useAvatarProgram } from '../connector/avatar'
import { useWallet } from "@solana/wallet-adapter-react";

const UserDataContext = React.createContext()
const IsUserExistContext = React.createContext()

const FetchUserDataContext = React.createContext()
const InitializeUserContext = React.createContext()

export function useUserData() {
    return useContext(UserDataContext)
}

export function useIsUserExist() {
    return useContext(IsUserExistContext)
}

export function fetchUserData() {
    return useContext(FetchUserDataContext)
}

export function initializeUser() {
    return useContext(InitializeUserContext)
}

export function UserDataProvider({ children }) {

    const { publicKey } = useWallet()
    const { getUser, initializeUser } = useAvatarProgram()

    const [isUserExist, setIsUserExist] = useState(false)
    const [userData, setUserData] = useState([])
    const [initialized, setInitialized] = useState(false)

    async function fetUserData() {
        const data = await getUser()
        if (data) {
            setIsUserExist(true)
            setUserData(data)
        }
    }

    async function initializeUserFunction() {
        await initializeUser()
        const data = await fetUserData()
        if (data) {
            setUserData(data)
            setInitialized(true)
        }
        if (initialized) {
            setTimeout(() => {
                setIsUserExist(true)
            }, 200)
        }
    }

    return (
        <UserDataContext.Provider value={userData}>
            <IsUserExistContext.Provider value={isUserExist}>
                <InitializeUserContext.Provider value={initializeUserFunction}>
                    <FetchUserDataContext.Provider value={fetUserData}>
                        {children}
                    </FetchUserDataContext.Provider>
                </InitializeUserContext.Provider>
            </IsUserExistContext.Provider>
        </UserDataContext.Provider>
    )
}
