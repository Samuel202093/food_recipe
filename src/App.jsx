import { useState } from 'react'
import Index from './Pages/Index'
import { createBrowserRouter, RouterProvider, createRoutesFromElements,Route } from 'react-router-dom'
import Meals from './Pages/Meals'
import RootLayout from './Components/RootLayout'
import Pasta from './Pages/Pasta'
import Dessert from './Pages/Dessert'
import Seafood from './Pages/Seafood'
import Breakfast from './Pages/Breakfast'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayout />}>
     <Route index element={<Index />}/>
     <Route path='/meals' element={<Meals />}/>
     <Route path='/pastas' element={<Pasta/>} />
     <Route path='/desserts' element={<Dessert/>} />
     <Route path='/seafoods' element={<Seafood/>} />
     <Route path='/breakfasts' element={<Breakfast/>} />
  </Route>
))



function App() {
  return (
      <RouterProvider router={router}/>
  )
}

export default App
