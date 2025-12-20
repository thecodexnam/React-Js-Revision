import React from 'react'
import { useTransition } from 'react';
import { useState } from 'react'

export const UseTransition = () => {
//   const[pending,setPending] = useState(false);
    const[pending,startTransition] = useTransition()

  const handleClick = async ()=>{
    startTransition(async()=>{
        await new Promise(res=>setTimeout(res,3000))
    })
  }



 

//   const handleClick = () =>{
//     setPending(true);
//     setTimeout(()=>{
//       setPending(false);
//     },3000)
//   }
  return (
    <div>
      <h1>UseTransition in React Js</h1>
      {
        pending?
        <img src='https://imgs.search.brave.com/6-sQq3NVkK7MwWXU1ad36kwLPkTAFnrJtz7Zcqe_sZw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YTEuZ2lwaHkuY29t/L21lZGlhL3YxLlky/bGtQVGM1TUdJM05q/RXhNRzFxWjNkdVky/NDFNVzh6Y2pSd2N6/aGpjM1pyZVdSeE16/QjFkM2Q2YTJnMllY/cHhNR1p6ZHlabGNE/MTJNVjluYVdaelgz/TmxZWEpqYUNaamRE/MW4vMTdtTkNjS1Ux/bUpscmJYb2RvL2dp/cGh5LmdpZg.gif' height="100px" />:null
      }
      <button onClick={handleClick} disabled={pending}>Click Me</button>
    </div>
  )
}
