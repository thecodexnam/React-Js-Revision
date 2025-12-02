import React, { useState } from 'react'

const State = () => {
    const[fruit,setFruit] = useState("Banana")
    
    const handleFruit = ()=>{
        setFruit("Apple")
    }

  return (
    <>
    <h1>State in Js</h1>
    <h1>{fruit}</h1>
    <button onClick={handleFruit}>Chanage fruit Name</button>
    </>
  )
}

export default State