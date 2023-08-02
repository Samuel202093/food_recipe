import React from 'react'
import useSWR from 'swr'
import networkError from '../assets/img/network-error.gif'
import loader from '../assets/img/recipe-loader.gif'
import axios from 'axios'

const fetcher = (url)=>axios.get(url).then((res)=> res.data)

const Breakfast = () => {
    let { data, error, isLoading } = useSWR("https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast", fetcher)



      //loading state
  if (isLoading) {
    return (
      <div className='absolute top-[45%] md:top-[50%] left-[35%] md:left-[50%] flex justify-center items-center'>
        <img src={loader} alt="loader" width={100}/>
      </div>
    )
  }

  if (error) {
    return(
      <div className="flex flex-col justify-center items-center gap-1 min-h-[20vh] mt-[1rem] text-slate-600">
      <img src={networkError} alt="" className="h-[40vh]" />
      <h2 className="text-xl font-bold font-sans">No Internet connection</h2>
      <span className="text-sm font-sans">
        check your connection, then refresh the page
      </span>
      <button
        className="bg-[#02735E]y border-[1px] border-slate-600 text-sm font-semibold px-3 py-1 rounded"
        onClick={() => window.location.reload(true)}
      >
        Refresh
      </button>
    </div>
    )
  }

//   console.log(data.meals)


  return (
    <div className='min-h-[70vh] mt-5'>
      <h2 className='heading-explore text-2xl font-semibold text-center text-slate-600 mb-7'>Different Breakfast Dishes</h2>
      <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-3 w-[100%] lg:w-[85%] min-h-[65vh] mx-0 md:mx-auto p-3'>

        {data?.meals.map((x, index)=>{
            return(
                <div className='dish-card relative flex flex-col gap-4 md:gap-1 w-[100%] lg:w-[95%] min-h-[40vh] border-[1px] border-transparent p-4 transition-all ease-in-out delay-[0.4s] cursor-pointer rounded-2xl text-slate-600' key={index}>
            <div className='flex flex-col gap-6 md:gap-0'>
            <div className='w-full h-[25vh] md:h-[50vh] border-2y border-[green]y rounded-2xl px-2y py-2y' >
                <img src={x.strMealThumb} alt="food image" className='w-full h-[25vh] md:h-[45vh] object-cover md:object-contain rounded-xl'/>
            </div>
            <div className='flex flex-col gap-2 px-2'>
                <div>
                    <h2 className='font-medium font-sans text-base'>{x.strMeal}</h2>
                </div>
            </div>
            </div>
        </div>
            )
        })}

      </div>
      
    </div>
  )
}

export default Breakfast
