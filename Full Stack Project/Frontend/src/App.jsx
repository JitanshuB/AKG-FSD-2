import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FacialExpression from './Components/FacialExpression'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Admin from './Components/Admin'
import Login from './Components/Login'
import Register from './Components/Register'

function App() {
  let routes=createBrowserRouter([
    {
      path:"/",
      element:<FacialExpression/>
    },
    {
      path:"/wp-admin",
      element:<Admin/>
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/register",
      element:<Register/>
    }
  ])

  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
