import React from 'react'
import { NavLink } from 'react-router-dom'

const LogOut = () => {
  return (
    <div>
      <ul className="logout">
        <li><NavLink to='/Register'>Signup</NavLink></li>
        <li><NavLink to='/Login'>Login</NavLink></li>
      </ul>
    </div>
  )
}

export default LogOut