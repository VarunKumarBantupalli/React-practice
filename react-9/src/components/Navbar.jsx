import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        
 <NavLink className={(e) => {return e.isActive?"red": ""}} to="/"><li>home</li></NavLink>
 <NavLink className={(e) => {return e.isActive?"red": ""}} to="/login"><li>Login</li></NavLink>
 <NavLink className={(e) => {return e.isActive?"red": ""}} to="/help"><li>help</li></NavLink>
        
      </nav>
    </div>
  )
}

export default Navbar
