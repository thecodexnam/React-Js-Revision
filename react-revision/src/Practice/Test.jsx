import React, { useEffect, useState, useRef } from 'react'

const Test = () => {
    const[count,setCount] = useState(0);
    
    function callOnce(){
        console.log("Call Once Function is Changed");
    }

    useEffect(()=>{
        callOnce()
    },[])

  return (

    <>
    <h1>Count Value: {count}</h1>
    <button onClick={()=>setCount(count+1)}>Counter</button>
    <PreviousValue/>
    </>
  )
}

export default Test

function PreviousValue() {
  const [name, setName] = useState("");
  const prevName = useRef("");

  useEffect(() => {
    prevName.current = name;
  },[name]);

  return (
    <>
      <p>Current: {name}</p>
      <p>Previous: {prevName.current}</p>
      <input onChange={(e) => setName(e.target.value)} />
    </>
  );
}
