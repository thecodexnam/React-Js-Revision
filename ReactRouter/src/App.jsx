import { useState } from 'react'
import './App.css'
import { Nav } from './Components/Nav'
import { Footer } from './Components/Footer'
import {Outlet} from "react-router"

function App() {

  return (
    <>
    <Nav/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
