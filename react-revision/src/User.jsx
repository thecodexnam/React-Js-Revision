import React, { useEffect, useState } from 'react'

const User = ({color}) => {
  const[time,setTime] = useState(0);

  useEffect(()=>{
    setInterval(()=>{
      setTime(new Date().toLocaleTimeString());
    },1000)
  },[]);

  return (
    <div >
      <h1 style={{
        backgroundColor:color,
        color:"white",
        height:"50px",
        textAlign:"center",
        width:"190px",
        padding:"25px",
        borderRadius:"50px"
      }}
        >
          {time}</h1>
    </div>
  )
}

export default User



// const User = ({user}) =>{
//   return(
//     <div style={{border:"2px solid",borderRadius:"10px",margin:"20px",padding:"10px"}}>
//       <h3>Name:<span style={{color:"red"}}>{user.Name}</span></h3>
//       <h3>Name:<span style={{color:"green"}}>{user.email}</span></h3>
//       <h3>Name:<span style={{color:"purple"}}>{user.age}</span></h3>
//     </div>
//   )
// }

// export default User;