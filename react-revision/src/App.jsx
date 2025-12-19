import React from 'react'
import { UseRef } from './UseRef'
import { UncontrolledComponent } from './UncontrolledComponent';

const App = () => {
  return (
    <div>
      <UncontrolledComponent/>
    </div>
  )
}

export default App;






// import React from 'react'
// import { Button } from 'react-bootstrap'
// import { Alert } from 'react-bootstrap'
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// const App = () => {

//   const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
//   return (
//     <div>

//             <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
//       <Nav.Item>
//         <Nav.Link eventKey="1" href="#/home">
//           NavLink 1 content
//         </Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link eventKey="2" title="Item">
//           NavLink 2 content
//         </Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link eventKey="3" disabled>
//           NavLink 3 content
//         </Nav.Link>
//       </Nav.Item>
//       <NavDropdown title="Dropdown" id="nav-dropdown">
//         <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
//         <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
//         <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
//         <NavDropdown.Divider />
//         <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
//       </NavDropdown>
//     </Nav>

//       <h1>Bootstrap in React JS</h1>
//       <Button>Bootstrap Button</Button>
//       <Alert variant='success'>Hello BT</Alert>
//       <Button onClick={()=>alert("You clicked danger Button")} variant='danger'>Danger</Button>
//       <Button variant='warning'>Warning</Button>
//       <Button variant='info'>Info</Button>
//       <button onClick={()=>alert("You click on simple button")}>Simple Button</button>
//     </div>
//   )
// }

// export default App;



// import React from 'react'
// import styled from 'styled-components'

// const App = () => {

//   const Heading = styled.h2`
//   color:red;
//   background-color: black;
//   padding:10px;
//   padding-left:20px;
//   border-radius:10px;
//   `

//   // const Button = styled.button`
//   //   padding:10px 20px;
//   //   font-size:16px;
//   //   border-radius:5px;
//   //   background-color: green;
//   //   color:white;
//   //   border:none;
//   //   cursor:pointer;

//   //   &:hover{
//   //     background-color: darkgreen;
//   //   }
//   // `

//   const Button = styled.button({
//     fontSize:'16px',
//     borderRadius:'5px',
//     backgroundColor: 'green',
//     padding:'10px 20px',
//     color:'white', 
//     border:'none',
//     cursor:'pointer',

//     '&:hover':{
//       backgroundColor: 'darkgreen',
//     }
//   })
  

//   return (
//     <div>
//       <h1>Styled Component with React JS</h1>
//       <Heading>Hello, Brother</Heading>
//       <Button onClick={()=>console.log("Clicked")}>Click Me</Button>
//     </div>
//   )
// }

// export default App







// import React from 'react'
// import User from './User';

// const App = () => {

//       const UserData = [
//        { Name:"Naman",
//         age:20,
//         Address:"31B/1 Najafgarh, New Delhi - 110043",
//         email:"namantest@gmail.com",
//         id:1
//        },
//        { Name:"Daman",
//         age:29,
//         Address:"House-21 Mistic Fall, England - 5452",
//         email:"damontest@gmail.com",
//         id:2
//        },
//        { Name:"Stefen",
//         age:23,
//         Address:"House-210 Mistic Fall, England - 5452",
//         email:"stefentest@gmail.com",
//         id:3
//        }    
//     ]

//   return (
//     <div>
//       <h1>ReUse Component in Loop</h1>
//       {
//         UserData.map((user)=>(
//           <div key={user.id}>
//             <User user={user}/>
//           </div>
//         ))
//       }
//     </div>
//   )
// }

// export default App










// import React, { useState } from 'react'
// import User from './User'
// import Wrapper from './Wrapper'

// const App = () => {
//   const[name,setName] = useState('');
//   const[password,setPassword] = useState('');
//   const[email,setEmail] = useState('');

//   const hanadleclear = () =>{
//     setEmail('')
//     setPassword('') 
//     setName('')
//   } 
 
//   return (
//       <div>
//         <h1>Controlled Component</h1>
//         <form>
//           <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'/><br/><br/>
//           <input type='password' value={password}  onChange={(e)=>setPassword(e.target.value)} placeholder='Enter password'/><br/><br/>
//           <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter email'/><br/><br/>
//           <button>Submit</button>
//           <button type='button' onClick={hanadleclear}>clear</button>

//           <h1>{name}</h1>
//           <h1>{password}</h1>
//           <h1>{email}</h1>
//         </form>




//         {/* <h1>Task in React JS</h1>
//         <div style={{margin:"10px",padding:"10px"}}>
//         <input type='text' value={name}  onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'/> <br/>
//         <input type='number' value={age} onChange={(e)=>setage(e.target.value)} placeholder='Enter Age'/> <br/>
//         <input type='address' value={address} onChange={(e)=>setaddress(e.target.value)} placeholder='Enter Address'/> <br/>
//         <button disabled={!name || !age || !address} onClick={handleOutput}>Submit</button>

//         </div>

//         {showOutput && (
//           <>
//           <h2>Your Name is: {name}</h2>
//           <h2>Your Age is: {age}</h2>
//           <h2>Your Address is: {address}</h2>
//         </>
//         )} */}



//       {/* <h1>Get Input Filed Value</h1>
//       <input type='text' value={val} onChange={(event)=>setValue(event.target.value)} placeholder='Enter User Name'></input>
//       <button style={{margin:"10px"}} onClick={()=>setValue("")}>Clear</button>
//       <h1>{val}</h1> */}




//       {/* <h1>Props in React JS</h1>
//       <Wrapper color="Orange">
//         <h1>Hello I'm Wrapper</h1>
//       </Wrapper>

//       <Wrapper>
//         <h1>Hello, I'm Naman Yadav</h1>
//         <h1 style={{color:"blue"}}>Hello i'm CodeXnam</h1>
//       </Wrapper> */}


//       {/* <User name='Naman Yadav'/>
//       <User/>
//       <User name='Rohan Mathur'/>
//       <User name='Vishnu Dubey'/>
//       <User/> */}
      
//       {/* <User name="Naman Yadav"/>
//       <User name = "Rohan Mathur"/>
//       <User/>
//       <User name='Vishnu Dubey'/> */}
//     </div>
//   )
// }

// export default App
