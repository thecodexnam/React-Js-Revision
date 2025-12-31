import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { data } from './Context/UserContext'
import Cart from './Context/Cart'

function App() {
let name = useContext(data)
console.log(name);


  return (
    <>
    <h1>{name}</h1>
    <Cart/>
    </>
  )
}

export default App
