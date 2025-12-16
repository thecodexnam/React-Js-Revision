import React, { useState } from 'react'

const RGBColorMixer = () => {
    const[red,setRed] = useState(10);
    const[green,setGreen] = useState(5)
    const[blue,setBlue] = useState(4)



  return (
    <div>
        <h1>RGB Color Mixer in React Js</h1>
        <div style={{height:'200px',width:'200px',margin:'20px',background:`rgb${red,green,blue}`}}>

        </div>

        <label htmlFor='red'>Red</label>
        <input type='range'onChange={(e)=>setRed(e.target.value)} min={0} max={255}/><br/>
        <label htmlFor='green'>Green</label>
        <input type='range' min={0} max={255}/><br/>
        <label htmlFor='blue'>Blue</label>
        <input type='range' min={0} max={255}/><br/>
    </div>
  )
}

export default RGBColorMixer