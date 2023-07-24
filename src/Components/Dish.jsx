import React from 'react'
import img2 from '../assets/img/food_lady.avif'
import { FaRegComment } from 'react-icons/fa'
import { BsHeartFill } from 'react-icons/bs'
import { RiAddCircleFill } from 'react-icons/ri'
import { cardDetails } from '../data/fake'

const Dish = () => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3 gap-y-6 flexy justify-betweeny w-[100%] lg:w-[85%] min-h-[60vh] border-2y border-[red]y mx-0 lg:mx-auto p-2 lg:p-3'>
        {cardDetails.map((x)=>{
            return (<div className='dish-card relative flex flex-col gap-1 w-[100%] lg:w-[95%] min-h-[40vh] border-[1px] border-transparent p-4 transition-all ease-in-out delay-[0.4s] hover:border-[#758C1F]y cursor-pointer rounded-2xl text-slate-600' key={x.id}>
            <div className='w-full h-[50vh] border-2y border-[green]y rounded-xly' >
                <img src={img2} alt="" className='w-full h-[45vh] object-cover rounded-xl'/>
            </div>
            <div className='flex flex-col gap-2'>
                <div>
                    <h2 className='font-medium font-sans text-base'>{x.name}</h2>
                </div>
                <div>
                    <span className='text-sm font-sans'>{x.details.slice(0,50)}...</span>
                </div>
                <div className='flex justify-between font-sans text-sm'>
                <span className='comment-icon flex px-2'><FaRegComment className='text-xl mr-2'/> 30</span>
                    <span className='comment-span hidden absolute top-1y bottom-[-3%] left-[6%] px-2 py-1 text-xs font-semibold text-[#F2F2F0] bg-[#759f17]'>comments</span>
                    <span className='rating-icon flex px-2'><BsHeartFill className='text-xl mr-2 text-[rgb(191,6,6)]'/> 24</span>
                    <span className='rating-span hidden absolute top-1y bottom-[-3%] left-[50%] font-semibold text-[#F2F2F0] bg-[#759f17] px-2 py-1 text-xs'>rating</span>
                    <span className='order-icon'><RiAddCircleFill className='text-xl text-[#759f17]'/></span>
                    <span className='order-span hidden absolute top-1y bottom-[-3%] right-[3%] font-semibold text-[#F2F2F0] bg-[#759f17] px-2 py-1 text-xs'>order</span>
                </div>
    
            </div>
          </div>)
        })}
      
    </div>
  )
}

export default Dish
