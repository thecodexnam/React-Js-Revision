import React, { useState } from 'react'
import User from './User'
import Wrapper from './Wrapper'

const App = () => {
  const[val,setValue] = useState("")

  return (
    <div>
      <h1>Get Input Filed Value</h1>
      <input type='text' value={val} onChange={(event)=>setValue(event.target.value)} placeholder='Enter User Name'></input>
      <button style={{margin:"10px"}} onClick={()=>setValue("")}>Clear</button>
      <h1>{val}</h1>




      {/* <h1>Props in React JS</h1>
      <Wrapper color="Orange">
        <h1>Hello I'm Wrapper</h1>
      </Wrapper>

      <Wrapper>
        <h1>Hello, I'm Naman Yadav</h1>
        <h1 style={{color:"blue"}}>Hello i'm CodeXnam</h1>
      </Wrapper> */}


      {/* <User name='Naman Yadav'/>
      <User/>
      <User name='Rohan Mathur'/>
      <User name='Vishnu Dubey'/>
      <User/> */}
      
      {/* <User name="Naman Yadav"/>
      <User name = "Rohan Mathur"/>
      <User/>
      <User name='Vishnu Dubey'/> */}
    </div>
  )
}

export default App
