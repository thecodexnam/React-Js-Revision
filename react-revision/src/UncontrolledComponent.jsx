import React from 'react'

export const UncontrolledComponent = () => {

    const handleForm = (e) =>{
        e.preventDefault()
        const user = document.querySelector('#user').value;
        console.log(user);
        
    }

  return (
    <div>
        <h1>Uncontrolled Component in React JS</h1>
        <form action='' method='post' onSubmit={handleForm}>
        <input type='text' id='user' placeholder='Enter Your name'/> <br/>
        <input type='password' id='password' placeholder='Enter Your Password'/> <br/>
        <button>Submit</button>
        </form>
    </div>
  )
}
