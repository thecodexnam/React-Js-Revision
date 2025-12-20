import React, { useEffect, useState } from 'react'

const User = ({DisplayName,name}) => {
  return (
    <div >
     <button onClick={()=>DisplayName(name)}>Display Name</button>
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