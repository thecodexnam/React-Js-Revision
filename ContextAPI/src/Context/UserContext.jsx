import React from 'react'
import { createContext } from 'react'


export const data = createContext()

function UserContext({children}){
    
    const username = "CodeXnam"
  return (
    <div>
        <data.Provider value={username}>
        {children}
        </data.Provider>

    </div>
  )
}

export default UserContext
