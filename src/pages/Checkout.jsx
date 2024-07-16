import React, { useEffect, useState } from 'react'
import { RotatingLines } from 'react-loader-spinner'

import {useCart} from "../context/CartContext"

function Checkout() {


  const [state , dispatch] = useCart();
  
    
  return (
    <div className='container'>
        {
          state.selectedItems.map(p => <p key={p.id}>{p.title}</p>)
        }
    </div>
  )
}

export default Checkout