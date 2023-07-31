import { createContext, useContext, useState, useEffect} from "react";
import Item from "../Components/Item";
import Dish from '../Components/Dish'
import axios from 'axios'
import useSWR from 'swr'
import networkError from '../assets/img/network-error.gif'
import loader from '../assets/img/recipe-loader.gif'


// using swr to fetch data
const fetcher = (url)=> axios.get(url).then((res)=> res.data)

export const dataContext = createContext()


export const DataContextProvider = ({children})=>{
    const [search, setSearch] = useState('')
    const [searchData, setSearchData] = useState([])
    

    let {data, error, isLoading} = useSWR('https://www.themealdb.com/api/json/v1/1/categories.php',fetcher)

    const fetchData = async()=>{
        await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then((res)=> setSearchData(res.data))
        .catch((err)=> setSearchError(err))
    }

    useEffect(()=>{
        fetchData()
    },[search])


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

    const handleChange = (e)=>{
        setSearch(e.target.value)
    }


    const recipeResult = (recipes, query)=>{
        let filteredRecipe = recipes
        if (query) {
            filteredRecipe = searchData
            return (filteredRecipe.meals?.length > 0 ? filteredRecipe.meals.map((x, index)=> <Dish key={index} data={x} />):<div>error loading data</div>)
        }
        return filteredRecipe.map((x, index)=> <Item key={index} data={x}/>)
    }



    return(
    <dataContext.Provider value={{search, setSearch, handleChange, recipeResult, data}}>
        {children}
    </dataContext.Provider>
    )
}


export const UseDataContext = ()=>{
    return useContext(dataContext)
}