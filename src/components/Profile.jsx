import React, { useContext } from 'react'
import UserContext from './context/UserContext'

const Profile = () => {
   const {user}=  useContext(UserContext)
  return (
    <div>
      {user ? user: "notlogin"}
    </div>
  )
}

export default Profile
