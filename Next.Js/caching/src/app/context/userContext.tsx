'use client'

import { createContext } from "react"

export const UserContext = createContext({})

export default function UserProvider({children}:{children: React.ReactNode}){

    return (
        <UserContext.Provider value="hi">
            {children}
        </UserContext.Provider>
    );

}