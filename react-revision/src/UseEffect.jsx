import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const[count,setCount] = useState(0)
    const[data,setData] = useState(0)

    useEffect(()=>{
        //callOnce();
        counterFunction();
    },[count,data])

    function counterFunction(){
    console.log("counterFunction:", count);
   }

   function callOnce(){
    console.log("callOnce Function is Called")
   } 
 

  return (
    <div>
      <h1>Use Effect Hook</h1>
      <button onClick={()=>setCount(count+1)}>Counter: {count}</button>
      <button onClick={()=>setData(data+1)}>Data: {data}</button>
    </div>
  )
}

export default UseEffect
