import React, { useState } from 'react'
import User from './User'
import College from './College'
import Student from './Student'

const App = () => {
  // let name = "Naman Yadav"
  // let age = 20;

  let userObject ={
    name:"Naman Yadav",
    email:"codexnam@gmail.com",
    age:20,
    address:"Brij Vihar Najafgarh, New delhi-110043"
  }

  let userObject1 ={
    name:"Naman Yadav",
    email:"codexnam@gmail.com",
    age:20,
    address:"Brij Vihar Najafgarh, New delhi-110043"
  }

  let userObject2 ={
    name:"Naman Yadav",
    email:"codexnam@gmail.com",
    age:20,
    address:"Brij Vihar Najafgarh, New delhi-110043"
  }

let collegeNames = ['IIT','DU','IITM','NIT','MIT']
const[student,setStudent] = useState()

  return (
    <div>
      <h1>Props in React JS</h1>


      { student && <Student name={student}/>  }
      <button onClick={()=>setStudent("Naman Yadav")}>Update Student Name</button>


      {/* <User name={name} age={age}/> */}
      {/* <College name={collegeNames[0]} />
      <College name={collegeNames[1]} />
      <College name={collegeNames[2]} />
      <College name={collegeNames[3]} /> */}


      <User user={userObject} />
      <User user={userObject1} />
      <User user={userObject2} />
    </div>
  )
}

export default App
