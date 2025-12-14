import React, { useState } from "react";
import UseEffect from "./UseEffect";
import { useEffect } from "react";

const Counter = ({ count, data }) => {
  // function handleCounter(){
  //     console.log("Handle Counter callled");
  // }

  // const handleData= (()=>{
  //     console.log("Handle Data Called");
  // })

  // useEffect(()=>{
  //     handleCounter();
  // },[])

  // useEffect(()=>{
  //     handleData()
  // },[data])

  useEffect(() => {
    console.log("Mounting Phase Only");
  }, []);

  useEffect(() => {
    console.log("Update Phase Only");
  }, [count]);

  return (
    <div>
      <h1>Counter Value: {count}</h1>
      <h1>Data Value: {data}</h1>
    </div>
  );
};

export default Counter;
