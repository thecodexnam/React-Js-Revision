import React from 'react'
import './Card.css'

export const Card = ({ name, imgUrl, price }) => {
  return (
    <div className="card">
      <img src={imgUrl} alt={name} />
      <h1>{name}</h1>
      <h3>{price}</h3>
    </div>
  )
}
