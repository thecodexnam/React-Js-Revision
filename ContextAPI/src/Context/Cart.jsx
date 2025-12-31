import React, { useContext } from 'react'
import { store } from './story'

const Cart = () => {
 let a = useContext(store)
 console.log(a)
  return (
    <div>   
        <h1>{a.storyLine}</h1>
    </div>
  )
}

export default Cart