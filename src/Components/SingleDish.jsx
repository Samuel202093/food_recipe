import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { VscChromeClose } from 'react-icons/vsc'
import { Link } from 'react-router-dom'

const SingleDish = ({showModal, setShowModal, item}) => {
  console.log('dave')

    const handleClose = ()=>{
        setShowModal(!showModal)
        document.body.style.overflow = 'unset' 
    }

  return (
    <div className='flex justify-center items-center fixed absolutey top-[0%] z-[1000]y left-0 min-h-[100vh] w-[100%] bg-[rgba(0,0,0,0.4)] bg-red-700y cursor-pointer border-2y border-red-800y z-[1000] '>
        <VscChromeClose className='absolute top-[3%] right-[2%] text-3xl bg-[#F2F2F0] cursor-pointer' onClick={handleClose}/>
      {/* <h1>Modal for single Dish</h1> */}
      <div className='flex w-[70%] min-h-[80vh] bg-[#F2F2F0] border-2y border-red-800y overflow-y-scrolly'>
            <div className='w-[50%] min-h-[80vh] p-6'>
                <img src={item.strCategoryThumb} alt="recipe-image" className='w-[100%] h-full object-contain rounded-xly' width={500} height={600}/>
            </div>
            <div className='flex flex-col gap-5 p-6 text-slate-600 w-[50%] min-h-[80vh] overflow-y-scrolly'>
                <div>
                <h1 className='text-2xl font-sans font-semibold'>{item.strCategory}</h1>
                </div>
                <div>
                    <p className='text-slate-600y text-base'>{item.strCategoryDescription}</p>
                </div>
                <div className='flex'>
                    {/* <HiSaveAs className='saveIcon text-3xl cursor-pointer'/> */}
                    <Link to={'/meals'} state={{ queryString: item.strCategory }} className='hiddeny flex  mt-0 ml-1 border-[1px]y border-slate-600y bg-slate-600 text-[#F2F2F0] px-2 py-2 text-base font-semibold'>{`View ${item.strCategory} meals`} <IoIosArrowRoundForward className='text-2xl font-bold'/></Link>
                </div>
            </div>
      </div>
    </div>
  )
}

export default SingleDish
