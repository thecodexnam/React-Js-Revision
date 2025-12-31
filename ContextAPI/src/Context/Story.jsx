import React, { createContext } from 'react'

export let store = createContext() 

const Story = ({children}) => {
    let kahani = {
        name:"Atomic Habit",
        storyLine:"Selfimprovement"
    }

  return (
    <div>
        <store.Provider value={kahani}>
                {children}
        </store.Provider>
    </div>
  )
}

export default Story