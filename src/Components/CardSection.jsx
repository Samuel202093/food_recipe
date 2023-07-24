import React from 'react'
import Dish from './Dish'
import img from '../assets/img/food_land.avif'
import { NavLink } from "react-router-dom";

const CardSection = () => {
  return (
    <section className='mt-12 lg:mt-8 flex flex-col gap-4'>
      <h2 className='heading-explore text-2xl font-semibold text-center text-slate-600'>Explore Recipes</h2>
    
      <div className='flex justify-between gap-2 md:gap-3 w-[100%] md:w-[90%] lg:w-[50%] border-2y border-[#758C1F]y mx-0 md:mx-auto px-1 md:px-7 py-1 rounded-3xly overflow-x-scroll md:overflow-x-hidden'>
        <span className='border-2 cursor-pointer border-transparent text-[#2fb854]y text-slate-600 px-6 py-4 md:py-1 text-base font-sans font-semibold transition-all delay-150 ease-in-out  hover:bg-[#759f17] hover:rounded-3xl hover:text-[#F2F2F0]'>All</span>
        {/* <NavLink to='' className={({isActive, isPending})=> isPending ? 'pending':isActive? 'active':''}>Lunch</NavLink> */}
        <span className='border-2y cursor-pointer border-transparent border-[1px] text-[#2fb854]y text-slate-600 px-6 py-1 text-base font-sans font-semibold transition-all delay-150 ease-in-out  hover:bg-[#759f17] hover:rounded-3xl hover:text-[#F2F2F0]'>Main Courses</span>
        <span className='border-[1px] cursor-pointer border-transparent text-[#2fb854]y text-slate-600 px-6 py-4 md:py-1 text-base font-sans font-semibold transition-all delay-150 ease-in-out hover:bg-[#759f17] hover:rounded-3xl hover:text-[#F2F2F0]'>Desserts</span>
        <span className='border-[1px] cursor-pointer border-transparent text-[#2fb854]y text-slate-600 px-6 py-1 text-base font-sans font-semibold transition-all delay-150 ease-in-out  hover:bg-[#759f17] hover:rounded-3xl hover:text-[#F2F2F0]'>Side Dishes</span>
      </div>

      <Dish />

      {/* subscription  section*/}

      <section className='bg-[#BF0606]y bg-[#759f17] flex justify-center items-center w-[100%] h-[20vh] lg:h-[15vh] mt-4 px-2 py-0 md:px-4 lg:px-0 md:py-0'>
        <div className='flex flex-col lg:flex-row justify-between w-[100%] gap-3 md:gap-8 lg:gap-0 lg:w-[85%] border-2y border-whitey'>
            <div>
                <h1 className='subscribe-heading text-base md:text-xl text-[#F2F2F0]'>Subscribe to our Newsletter for latest recipes and expert tips</h1>
            </div>
            <div className='flex justify-between w-[100%] lg:w-[40%]'>
                <input type="email" name="" id="" placeholder='Enter your Email' className='h-[6vh] w-[75%] md:w-[85%] lg:w-[75%] rounded-3xl px-6 placeholder:px-4 bg-transparent border-[1px] focus:outline-none text-base text-[#F2F2F0]'/>
                <button className='bg-[#758C1F]y border-[1px] border-[#f2f2f0] text-[#F2F2F0] px-3 rounded-3xl font-bold transition-all delay-150 ease-in-out hover:bg-[#F2F2F0] hover:text-[#759f17]'>Subscribe</button>
            </div>
        </div>
      </section>

    {/* News section */}
      <section className='min-h-[40vh] bg-blue-800y mt-4 md:mt-7'>
        <h1 className='news-heading text-3xl font-semibold text-center text-slate-600'>News and Trends</h1>

        <div className='flex flex-col md:flex-row justify-between w-[100%] lg:w-[80%] gap-6 md:gap-3 lg:gap-3 lg:mx-auto mt-7 px-2 lg:px-0 text-slate-600'>           
                <div className="flex flex-col py-3 border-[1px]y border-gray-500y rounded-lg gap-3 code-container float-animation">
                    <img src={img} className='object-cover h-[30vh] w-full rounded-lg'/>
                    <h2 className='text-xl font-sans font-semibold'>News Title</h2>
                    <p className='text-base font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, itaque.</p>
                </div>
    
                <div className="flex flex-col py-3 border-[1px]y border-gray-500y rounded-lg gap-3 code-container float-animation">
                    <img src={img} className='object-cover h-[30vh] w-full rounded-lg'/>
                    <h2 className='text-xl font-sans font-semibold'>News Title</h2>
                    <p className='text-base font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, itaque.</p>
                </div>

                <div className="flex flex-col py-3 border-[1px]y border-gray-500y rounded-lg gap-3 code-container float-animation">
                    <img src={img} className='object-cover h-[30vh] w-full rounded-lg'/>
                    <h2 className='text-xl font-sans font-semibold'>News Title</h2>
                    <p className='text-base font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, itaque.</p>
                </div>


        </div>
      </section>
     
    </section>
  )
}

export default CardSection

