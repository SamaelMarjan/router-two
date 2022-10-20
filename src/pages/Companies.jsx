import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Companies = () => {
  return (
    <div className='companies'>
      <div>
        <NavLink to='soft'>Software Companies</NavLink>
      </div>
      <Outlet />
    </div>
  )
}

export default Companies