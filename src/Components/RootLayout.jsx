import React from 'react'
import {Outlet} from "react-router-dom"
import {ToastContainer} from 'react-toastify'
import NavBar from './NavBar'
import Footer from './Footer'

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <main className='min-h-[55vh]'>
        <Outlet />
      </main>
      <ToastContainer/>
      <Footer />
    </>
  )
}

export default RootLayout
