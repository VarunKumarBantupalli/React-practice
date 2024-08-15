import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Help from './components/Help'
import Login from './components/Login'
import User from './components/User'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter ([
    {
      path: "/",
      element :  <><Navbar /><Home /></> 
    },
    {
      path:"/login ",
      element: <><Navbar /><Login /></>
    },
    {
      path:"/help",
      element: <><Navbar /><Help /></>
    },
    {
      path:"/user/:username",
      element: <><Navbar /><User /></>
    }
  ])

  return (
    <>
      
      <RouterProvider router={router} />
    </>
  )
}

export default App
