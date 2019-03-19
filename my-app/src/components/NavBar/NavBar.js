import React from "react"
import {NavLink} from "react-router-dom"

const NavBar = () => {
    return(
        <div className='Nav'>
        <NavLink exact to="/" activeClassName="activeNavButton">
          Home
        </NavLink>
        <NavLink to="/student-form" activeClassName="activeNavButton">
          Add New Profile
        </NavLink>
        <NavLink to="/login" activeClassName="activeNavButton">
        LOGIN 
             </NavLink>
        <NavLink  to="/register" activeClassName="activeNavButton">
        SignUp
             </NavLink>
      </div>
    )
}

export default NavBar