import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
 const {error} =    useRouteError()
 console.log(error)
  return (
    <div>404 not found {error.message}</div>
  )
}

export default ErrorPage