import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(-1)
  }
  return (
    <>
      <div>About</div>
      <button onClick={handleClick}>go back</button>
    </>

  )
}

export default About