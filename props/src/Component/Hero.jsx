import React from 'react'
import './Hero.css'
import { Card } from './Card.jsx'

export const Hero = () => {
  return (
    <div className="hero">
      <Card 
        name="Range Rover"
        price="₹1.89 Cr"
        imgUrl="https://cdn.pixabay.com/photo/2016/11/07/21/19/range-rover-1806933_1280.jpg"
      />

      <Card 
        name="BMW X7"
        price="₹1.30 Cr"
        imgUrl="https://imgs.search.brave.com/wAUcKJRcxmQIfiPNs3jqr0T93rZ52qdlIGdm6p-vFuA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ibXcu/c2NlbmU3LmNvbS9p/cy9pbWFnZS9CTVcv/bmE1X2hvbWUtdGVh/c2VyP3dpZD0yNTYw/JmhlaT0yNTYw"
      />

      <Card 
        name="Audi Q8"
        price="₹1.20 Cr"
        imgUrl="https://imgs.search.brave.com/dihO88Ua-C1DEesOqpEEfe99TMi78A2ZYkS-Psp7WzU/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9zdGlt/Zy5jYXJkZWtoby5j/b20vaW1hZ2VzL2Nh/cmV4dGVyaW9yaW1h/Z2VzLzYzMHg0MjAv/QXVkaS9ROC8xMTA4/Ny8xNzI0MzI1NTEx/ODMwL2Zyb250LWxl/ZnQtc2lkZS00Ny5q/cGc_dHI9dy0yMzA"
      />
    </div>
  )
}
