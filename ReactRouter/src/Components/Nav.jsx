import React from 'react'
import { NavLink } from 'react-router'

export const Nav = () => {
  return (
    <>
    <nav>
        <h1>LOGO</h1>
        <ul>
            <NavLink to="/"><li>Home</li></NavLink>
            <NavLink to="/about"><li>About</li></NavLink>
            <NavLink to="/contact"><li>Contact</li></NavLink>
        </ul>
    </nav>
    </>
  )
}
