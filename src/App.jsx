import { useState } from 'react'
import NavBar from './Components/NavBar'
import Index from './Pages/Index'
import Footer from './Components/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Index/>
  }
])



function App() {
  

  return (
    <main className='bg-[#BFBFBD]y'>
      <NavBar />
      <RouterProvider router={router}>
      {/* <h1 className='text-xl text-red-600y'>Welcome Page</h1> */}
      <Index/>
      </RouterProvider>
      <Footer />
    </main>
  )
}

export default App
