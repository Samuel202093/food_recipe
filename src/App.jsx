import { useState } from 'react'
import Index from './Pages/Index'
import { createBrowserRouter, RouterProvider, createRoutesFromElements,Route } from 'react-router-dom'
import Meals from './Pages/Meals'
import RootLayout from './Components/RootLayout'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayout />}>
     <Route index element={<Index />}/>
     <Route path='/meals' element={<Meals />}/>
  </Route>
))



function App() {
  return (
      <RouterProvider router={router}/>
  )
}

export default App
