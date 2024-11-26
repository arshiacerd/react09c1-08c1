import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
const User = () => {
  return (
    <>
    <h3>User</h3>
    <ul>
    <li><NavLink to="/user/profile">Profile</NavLink></li>
    <li><NavLink to="/user/account">Account</NavLink></li>
  
   </ul>
    <Outlet />
    </>
  )
}

export default User