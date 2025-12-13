import React, { useState } from 'react'
import User from './User'

const ClockProps = () => {
    const[color,setColor]= useState("black")


  return (
    <div>
    <h1>Default Props in React JS</h1>
      <select value={color} onChange={(e) => setColor(e.target.value)}>
        <option value="Black">Black</option>
        <option value="Red">Red</option>
        <option value="Blue">Blue</option>
        <option value="Green">Green</option>
      </select>
      <User color={color} />
    </div>
  )
}

export default ClockProps
