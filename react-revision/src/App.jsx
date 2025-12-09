import React, { useState } from 'react'
import User from './User'
import Wrapper from './Wrapper'

const App = () => {
  const[name,setName] = useState('');
  const[password,setPassword] = useState('');
  const[email,setEmail] = useState('');

  const hanadleclear = () =>{
    setEmail('')
    setPassword('') 
    setName('')
  } 
 
  return (
      <div>
        <h1>Controlled Component</h1>
        <form>
          <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'/><br/><br/>
          <input type='password' value={password}  onChange={(e)=>setPassword(e.target.value)} placeholder='Enter password'/><br/><br/>
          <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter email'/><br/><br/>
          <button>Submit</button>
          <button type='button' onClick={hanadleclear}>clear</button>

          <h1>{name}</h1>
          <h1>{password}</h1>
          <h1>{email}</h1>
        </form>




        {/* <h1>Task in React JS</h1>
        <div style={{margin:"10px",padding:"10px"}}>
        <input type='text' value={name}  onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'/> <br/>
        <input type='number' value={age} onChange={(e)=>setage(e.target.value)} placeholder='Enter Age'/> <br/>
        <input type='address' value={address} onChange={(e)=>setaddress(e.target.value)} placeholder='Enter Address'/> <br/>
        <button disabled={!name || !age || !address} onClick={handleOutput}>Submit</button>

        </div>

        {showOutput && (
          <>
          <h2>Your Name is: {name}</h2>
          <h2>Your Age is: {age}</h2>
          <h2>Your Address is: {address}</h2>
        </>
        )} */}



      {/* <h1>Get Input Filed Value</h1>
      <input type='text' value={val} onChange={(event)=>setValue(event.target.value)} placeholder='Enter User Name'></input>
      <button style={{margin:"10px"}} onClick={()=>setValue("")}>Clear</button>
      <h1>{val}</h1> */}




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
