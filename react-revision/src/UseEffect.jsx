import React, { useEffect, useState } from 'react'
import Counter from './Counter'

const UseEffect = () => {
    const[count,setCount] = useState(0);
    const[data,setData] = useState(0);
    const[display,setdisplay] = useState(true);

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
      {
        display? <Counter count={count} data={data}/>:null
      }
      <button onClick={()=>setCount(count+1)}>Counter: {count}</button>
      <button onClick={()=>setData(data+1)}>Data: {data}</button>
      <button onClick={()=>setdisplay(!display)}>Toogle</button>
      
    </div>
  )
}

export default UseEffect
