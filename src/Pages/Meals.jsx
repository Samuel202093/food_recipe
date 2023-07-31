import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import Pagination from '../Components/Pagination'
import networkError from '../assets/img/network-error.gif'
import loader from '../assets/img/recipe-loader.gif'
import useSWR from 'swr'
import axios from 'axios'


// using swr to fetch data
const fetcher = (url)=> axios.get(url).then((res)=> res.data)


const Meals = () => {
    const [mount, setMount] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const location = useLocation()
    const {queryString} = location.state
    let {data, isLoading, error} = useSWR(mount ?`https://www.themealdb.com/api/json/v1/1/filter.php?c=${queryString}`: null, fetcher)
    document.body.style.overflow = 'unset' 


    useEffect(()=>{
        setMount(true)
    },[])

  

    if (isLoading) {
        return  <div className='flex justify-center items-center'>
        <img src={loader} alt="loader" width={100}/>
      </div>
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

// pagination logic
const recordsPerPage = 9; // number of data on each page
const lastIndex = currentPage * recordsPerPage;
const firstIndex = lastIndex - recordsPerPage;

// looping through the paginated numbers
let numbers = []
for(let i = 1; i<= Math.ceil(data?.meals.length / recordsPerPage); i++){
    numbers.push(i)
}

  // previous page function for pagination
  const prePage = () => {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  };

  // current page function for pagination
  const changeCurrrentPage = (id) => {
    setCurrentPage(id);
  };

  // next page function for pagination
  const nextPage = () => {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  }

 

  return (
    <div className='min-h-[70vh] mt-5'>
      <h2 className='heading-explore text-2xl font-semibold text-center text-slate-600 mb-7'>{`Varieties of ${queryString} Meals`}</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-3 w-[100%] lg:w-[85%] min-h-[65vh] mx-0 md:mx-auto p-3 '>

        {/* meals card */}

        {data?.meals.slice(firstIndex, lastIndex).map((x, index)=>{
            return(
                <div className='dish-card relative flex flex-col gap-1 w-[100%] lg:w-[95%] min-h-[40vh] border-[1px] border-transparent p-4 transition-all ease-in-out delay-[0.4s] hover:border-[#758C1F]y cursor-pointer rounded-2xl text-slate-600' key={index}>
            <div className='w-full h-[50vh] border-2y border-[green]y rounded-2xl px-2 py-2' >
                <img src={x.strMealThumb} alt="food image" className='w-full h-[45vh] object-contain rounded-2xl'/>
            </div>
            <div className='flex flex-col gap-2 px-2'>
                <div>
                    <h2 className='font-medium font-sans text-base'>{x.strMeal}</h2>
                </div>
            </div>
          </div>
            )
        })}

      </div>
      {data?.meals.length > 9 ? <Pagination numbers={numbers} currentPage={currentPage} changeCurrrentPage={changeCurrrentPage} nextPage={nextPage} prePage={prePage}/>: ''}
    </div>
  )
}

export default Meals
