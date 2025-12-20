import React, { useRef } from 'react'

export const UncontrolledComponent = () => {

    const userRef = useRef();
    const passwordRef = useRef();

    const handleForm = (e) =>{
        e.preventDefault()
        const user = document.querySelector('#user').value;
        const password = document.querySelector('#password').value;
        console.log("User name is ",user," and password is ",password);
    }

    const handleFormRef = (e) =>{
      e.preventDefault();
      const user = userRef.current.value;
      const password = passwordRef.current.value;
      console.log("User (ref) is", user, "and password (ref) is", password);
    }

  return (
    <div>
        <h1>Uncontrolled Component</h1>
        <form action='' method='post' onSubmit={handleForm}>
        <input type='text' id='user' placeholder='Enter Your name'/> <br/>
        <input type='password' id='password' placeholder='Enter Your Password'/> <br/>
        <button>Submit</button>
        </form>
        <hr/>

        <h1>Uncontrolled Component with Useref</h1>
        <form action='' method='post' onSubmit={handleFormRef}>
        <input type='text' ref={userRef} id='userRef' placeholder='Enter Your name'/> <br/>
        <input type='password' ref={passwordRef} id='passwordRef' placeholder='Enter Your Password'/> <br/>
        <button>Submit With Ref</button>
        </form>

    </div>
  )
}
