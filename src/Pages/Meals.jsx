import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import Pagination from '../Components/Pagination'
import img from '../assets/img/9ja-soup.png'
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
        return <p>loading....</p>
    }

    if (error) {
        return <p className='text-red-600 font-semibold'>Error loading data</p>
    }

    console.log(data)

// pagination logic
const recordsPerPage = 9; // number of data on each page
const lastIndex = currentPage * recordsPerPage;
const firstIndex = lastIndex - recordsPerPage;
// const npage = Math.ceil(data?.meals.length / recordsPerPage);
  console.log(data?.meals)
const npage = 3

  console.log(data?.meals)

// const npage = 2

  const numbers = [...Array(npage + 1).keys()].slice(1); // displays the numbers of the page in the pagination

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
      <div className='grid grid-cols-3 gap-y-6 gap-3 w-[85%] min-h-[65vh] mx-auto p-3'>

        {/* meals card */}

        {data?.meals.map((x, index)=>{
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
      {data?.meals.length > 12 ? <Pagination numbers={numbers} currentPage={currentPage} changeCurrrentPage={changeCurrrentPage} nextPage={nextPage} prePage={prePage}/>: ''}
    </div>
  )
}

export default Meals
