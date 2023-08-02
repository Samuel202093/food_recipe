import React from 'react'
import { UseDataContext } from '../context/context'
import { Link } from 'react-router-dom'



const CardSection = () => {
  let {recipeResult, data, search} = UseDataContext()

  return (
    <section className='mt-0 md:mt-12 lg:mt-8 flex flex-col gap-4'>
      <h2 className='heading-explore text-2xl font-semibold text-center text-slate-600 mb-7'>Explore Recipes</h2>

      <div className='hidden border-2y border-red-600y w-[50%] mx-auto mb-4 md:flex justify-between'> 
        <Link to={'/breakfasts'} className='hover:bg-slate-600 cursor-pointer bg-transparent py-2 px-3 hover:text-[#f2f2f0] text-slate-600 transition-all delay-300 ease-in-out font-bold rounded-xl'>Breakfast</Link>
        <Link to={'/desserts'} className='hover:bg-slate-600 cursor-pointer bg-transparent py-2 px-3 hover:text-[#f2f2f0] text-slate-600 transition-all delay-300 ease-in-out font-bold rounded-xl'>Dessert</Link>
        <Link to={'/seafoods'} className='hover:bg-slate-600 cursor-pointer bg-transparent py-2 px-3 hover:text-[#f2f2f0] text-slate-600 transition-all delay-300 ease-in-out font-bold rounded-xl'>Seafood</Link>
        <Link to={'/pastas'} className='hover:bg-slate-600 cursor-pointer bg-transparent py-2 px-3 hover:text-[#f2f2f0] text-slate-600 transition-all delay-300 ease-in-out font-bold rounded-xl'>Pastas</Link>
      </div>

      <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3 gap-y-6 flexy justify-betweeny w-[100%] lg:w-[85%] min-h-[60vh] border-2y border-[red]y mx-0 lg:mx-auto p-2 lg:p-3'>
        
        {recipeResult(data?.categories, search)}
      
    </div>
    </section>
  )
}

export default CardSection

