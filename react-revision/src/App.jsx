import React, { useState } from 'react'
import Counter from './Counter';

const App = () => {
  const[count,setCount] =useState(0);

  return (
    <div>
      <h1>Multiple Condition in React Js</h1>
      <button onClick={()=>setCount(count+1)}>Counter</button>
      <h1>{count}</h1>
      {
        count==0?<h1>Condition 0</h1>
        :count==1?<h1>Condition 1</h1>
        :count==2?<h1>Condition 2</h1>
        :<h1>The Value is more than 3</h1>
      }
    </div>
  )
}

export default App