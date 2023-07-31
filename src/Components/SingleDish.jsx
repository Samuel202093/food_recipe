import React, {useState} from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { FaYoutube } from 'react-icons/fa'
import { VscChromeClose } from 'react-icons/vsc'
import { Link } from 'react-router-dom'

const SingleDish = ({showModal, setShowModal, item}) => {

   
  // document.body.style.overflow = 'unset' 

    const handleClose = ()=>{
        setShowModal(!showModal)
        document.body.style.overflow = 'unset' 
    }

    console.log(item)

  return (
    <div className='flex justify-center items-center fixed absolutey top-[0%] z-[1000]y left-0 min-h-[100vh] h-[100vh]y w-[100%] bg-[rgba(0,0,0,0.4)] bg-red-700y cursor-pointer border-2y border-red-800y z-[1000] overflow-scroll lg:overflow-hidden'>
        <VscChromeClose className='absolute top-[1%] md:top-[3%] z-[1000] md:z-[0]  right-[2%] text-3xl bg-[#F2F2F0] cursor-pointer' onClick={handleClose}/>
      {/* <h1>Modal for single Dish</h1> */}
      <div className='blocky absolute top-0 lg:static lg:flex w-[100%] lg:w-[70%] min-h-[100vh]y h-[100vh] lg:h-[80vh] lg:min-h-[80vh]y h-[90vh]y bg-[#F2F2F0] border-2y border-red-800y overflow-y-scroll'>
            <div className='w-[100%] lg:w-[50%] min-h-[30vh] lg:min-h-[80vh] p-6'>
                <img src={item.data.strMealThumb} alt="recipe-image" className='w-[100%] h-full object-contain rounded-xly' width={500} height={600}/>
            </div>
            <div className='flex flex-col gap-5 p-6 text-slate-600 w-[100%] lg:w-[50%] min-h-[100vh] lg:min-h-[85vh] overflow-y-scrolly'>
                <div>
                <h1 className='text-2xl font-sans font-semibold'>{item.data.strMeal}</h1>
                </div>
                <div>
                  <span className='text-base font-bold'>Category: <small className='text-base font-normal lower'>{item.data.strCategory}</small></span>

                </div>
                <div>
                  <span className='text-base font-bold'>Ingredients: <small className='text-base font-normal lowercase'>{`${item.data.strIngredient1}, ${item.data.strIngredient2}, ${item.data.strIngredient3}, ${item.data.strIngredient4}, ${item.data.strIngredient5}, ${item.data.strIngredient6}, ${item.data.strIngredient7}, ${item.data.strIngredient8}`}</small></span>
                </div>
                <div>
                    <h2 className='font-bold text-xl mb-3'>{`Steps to prepare ${item.data.strMeal}`}</h2>
                    <p className='text-slate-600y text-base'>{item.data.strInstructions}</p>
                </div>

                <div className='flex'>
                  <div className='socialContainer h-[45px] w-[45px] bg-[#F2F2F0] text-[rgba(0,0,0,0.6)] cursor-pointer hover:bg-[#CD201F] hover:text-[#F2F2F0] transition-all delay-150 ease-in-out flex justify-center items-center rounded-[50%]'>
                    <Link to={`${item.data.strYoutube}`} className='socialIcon text-xl'><FaYoutube/></Link>
                 </div>
                 <div className='youtube ml-5 hidden transition-all delay-150 ease-in-out'>
                    <span className='flex text-[#f2f2f0] font-semibold bg-slate-600 text-sm py-2 px-2'>Link to youtube video</span>
                  </div>
              </div>
                {/* <div className='flex'>
                    <Link to={'/meals'} state={{ queryString: item.strCategory }} className='hiddeny flex  mt-0 ml-1 border-[1px]y border-slate-600y bg-slate-600 text-[#F2F2F0] px-2 py-2 text-base font-semibold'>{`View ${item.strCategory} meals`} <IoIosArrowRoundForward className='text-2xl font-bold'/></Link>
                </div> */}
            </div>
      </div>
    </div>
  )
}

export default SingleDish
