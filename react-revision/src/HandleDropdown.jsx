import React, { useState } from 'react'

const HandleDropdown = () => {
    const[gender,setGender] = useState('male')
    const[city,setCity] = useState('delhi');

  return (
    <div>
      <h1>Select Your Gender</h1>
      <input type='radio' id='male' name='gender' onChange={(e)=>setGender(e.target.value)} value={"Male"} checked={gender == 'male'} /><label htmlFor='male'>Male</label><br/>
      <input type='radio' id='female' name='gender' onChange={(e)=>setGender(e.target.value)} value={"Female"} checked={gender == 'female'} /><label htmlFor='female'>Female</label><br/>
      <h2>You Selected: {gender}</h2>

    <h1>Select Your City</h1>
      <select onChange={(e)=>setCity(e.target.value)}
       defaultValue="delhi">
        <option value="noida">Noida</option>
        <option value="gurugram">Gurgaon</option>
        <option value="delhi">Delhi</option>
      </select>
      <h2>Select City: {city}</h2>
    </div>
  )
}

export default HandleDropdown
