const User = ({user}) =>{
  
  return(
    <div>
      <hr/>
      <h1>User Componet</h1>
      <h1>Your name is {user.name} and your age is {user.age} Your gmail is {user.email} and address is {user.address}</h1>
    </div>
  )
}

export default User;