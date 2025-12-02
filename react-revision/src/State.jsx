import React from 'react'

const State = () => {
    let fruit = "Banana";
    
    const handleName = () =>{
       fruit ="Apple"
    }


  return (
    <>
    <h1>State in Js</h1>
    <h2>{fruit}</h2>
    <button onClick={handleName}>Change the fruit name</button>
    </>
  )
}

export default State