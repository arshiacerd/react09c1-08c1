import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"

import { Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import AppLayout from "./components/AppLayout"
import NotFound from "./components/NotFound"
import User from "./components/User"
import Profile from "./components/Profile"
import Account from "./components/Account"
function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout />,
      errorElement:<NotFound />,
      children:[
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact/:id",
          element: <Contact />
        },
       {
        path:"/user",
        element:<User />,
        children:[
          {
            path: "profile",
            element: <Profile />
          },
          {
            path: "account",
            element: <Account />
          },
        ]
       }
      ]
    },
    
    
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
