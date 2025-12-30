import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import { useRef } from 'react'

function App() {
 const inputValue = useRef("")
 console.log(inputValue)



  return (
    <>
    <input type='text' ref={inputValue} placeholder='Enter Your Name'/>
    </>
      
  )
}

export default App
