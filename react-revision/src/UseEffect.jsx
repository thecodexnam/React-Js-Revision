import React, { useEffect, useState } from 'react'
import Counter from './Counter'

const UseEffect = () => {
    const[count,setCount] = useState(0)
    const[data,setData] = useState(0)

//     useEffect(()=>{
//         //callOnce();
//         counterFunction();
//     },[count])

//     useEffect(()=>{
//         callOnce()
//     },[data])

//     function counterFunction(){
//     console.log("counterFunction:", count);
//    }

//    function callOnce(){
//     console.log("callOnce Function is Called")
//    } 
 

  return (
    <div>
      <h1>React UseState and useEffect Interview question</h1>
      <button onClick={()=>setCount(count+1)}>Counter: {count}</button>
      <button onClick={()=>setData(data+1)}>Data: {data}</button>
      <Counter count={count} data={data}/>
    </div>
  )
}

export default UseEffect
