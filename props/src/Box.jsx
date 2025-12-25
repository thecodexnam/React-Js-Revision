import React from 'react'

function Box({Name="Naman Yadav", Role="Frontend Developer",imgUrl={img1:"https://via.placeholder.com/150"}}) {
  return (
    <div className='Box'>
      <img src={imgUrl} alt="Profile Picture" />
      <h1>{Name}</h1>
      <h2>{Role}</h2>
    </div>
  )
}

export default Box
