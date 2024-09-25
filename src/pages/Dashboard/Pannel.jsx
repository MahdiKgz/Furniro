import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Pannel() {
  return (
    <div className='container'>
      <Link to="orders">orders</Link>
      <Outlet />
    </div>
  )
}

export default Pannel