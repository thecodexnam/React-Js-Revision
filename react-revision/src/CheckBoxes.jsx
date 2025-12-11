import React, { useState } from 'react'

const CheckBoxes = () => {
  const [skills, setSkills] = useState([]);

  const handlSkills = (event) => {
    console.log(event.target.value, event.target.checked);
    if (event.target.checked) {
      setSkills([...skills, event.target.value]);
    }
    else{
      setSkills([...skills.filter((item)=>item!=event.target.value)])
    }
  }

  return (
    <div>
      <h1>Select Your Skills</h1>

      <input type='checkbox' id='javascript' value="JavaScript" onChange={handlSkills} />
      <label htmlFor='javascript'>JavaScript</label>
      <br />

      <input type='checkbox' id='tailwind' value="Tailwind" onChange={handlSkills} />
      <label htmlFor='tailwind'>Tailwind</label>
      <br />

      <input type='checkbox' id='nodejs' value="NodeJS" onChange={handlSkills} />
      <label htmlFor='nodejs'>NodeJS</label>
      <br />

      <h1>{skills.join(", ")}</h1>
    </div>
  )
}

export default CheckBoxes
