import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/favicon.svg'
import React, { useContext } from 'react'
import {Routes ,Route} from 'react-router-dom'

import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import Home from './pages/Home'
import Footer from './components/Footer'
import Login from './components/Login'
import { AppContext } from './context/AppContext'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import Navbar from './components/Navbar'


function App() {
  const {showLogin} = useContext(AppContext)

  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-pink-50'>
     <ToastContainer/>
     <Navbar/>
     {showLogin && <Login />}
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/result' element={<Result/>}/>
      <Route path='/Buy' element={<BuyCredit/>}/>
     </Routes>
     <Footer/>
      
    </div>
  )
}

export default App
