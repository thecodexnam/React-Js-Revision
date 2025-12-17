import React, { useEffect, useState } from 'react'

const InterviewPrep = () => {
    const[name,setName] = useState('')
    const[count,setCount] = useState(0)
    const[data,setData] = useState(0)

    // useEffect(()=>{
    //     console.log("Block: 1")
    // },[])

    useEffect(()=>{
        console.log("Block: 2")
    },[count])

    useEffect(()=>{
        console.log("Block: 3")
    },[data])

  return (
    <div>
        {/* <h1>Interview Prep</h1>
        <input type='text'
         placeholder='Enter Your Name'
         onChange={(e)=>setName(e.target.value)}
         value={name}
        />
        <button onClick={()=>setName('')}>Clear</button>
        <h1>Your Write :{name}</h1> */}
        <h1>Hooks interview Question in React JS</h1>
        <button onClick={()=>setCount(count+1)}>Count: {count}</button>
        <button onClick={()=>setData(data+1)}>Data: {data}</button>
    </div>
  )
}

export default InterviewPrep