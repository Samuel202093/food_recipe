import React,{useState} from 'react'
import logoImg from '../assets/img/urban-logo.png'
import { MdOutlineSearch, MdOutlineClose } from 'react-icons/md'
import {RxHamburgerMenu} from 'react-icons/rx'
import { IoMdClose } from 'react-icons/io'

const NavBar = () => {
  const [iconClose, setIconClose] = useState(false)
  const [iconOpen, setIconOpen] = useState(false)
  return (
    <nav className='flex justify-around py-3 md:py-4 px-2 lg:px-2 bg-red-500y h-[9vh] lg:h-[11vh] overflow-y-hidden'>
     
        <img src={logoImg} alt="" className='absolutey md:w-[120px] cursor-pointer h-[80px] ml-[-0.5rem] md:ml-0 mt-[-0.95rem] md:mt-[-1rem] md:object-cover'/>
      
      <div className='flex lg:justify-center w-[70%] md:w-[60%] lg:w-[60%]'>
        <MdOutlineSearch className='absolute top-[3.4%] lg:top-[4%] left-[22%] md:left-[18%] lg:left-[32.8%] text-[1.5rem] cursor-pointer text-[rgba(0,0,0,0.4)]'/>
        <input type='text' className='text-base font-normal border-[1px] border-[#D97C0B]y border-slate-600 w-[100%] md:w-[95%] lg:w-[50%] px-8 rounded-3xl focus:outline-none placeholder:px-0' placeholder='search recipe'/>
        <IoMdClose className='absolute top-[3.3%] md:top-[3.4%] lg:top-[4%] right-[15%] md:right-[29%] lg:right-[39%] text-[1.4rem] cursor-pointer text-slate-600'/>
      </div>
      <RxHamburgerMenu className='md:hidden text-3xl mt-2 ml-3 text-[#D97C0B]y'/>
      <div className='hidden md:flex justify-between lg:w-[15%] border-2y border-blacky px-5y'>
        <button className='nav-btn border-[1px] border-[red]y border-slate-600 transition-all delay-75 ease-in-out text-[#F2F2F0]y text-slate-600 text-base px-4 mr-2 lg:mr-0 py-1 bg-[rgb(217,124,11)]y font-semibold cursor-pointer rounded-3xl hover:border-[1px] hover:bg-transparent hover:border-[#D97C0B]y hover:text-[#D97C0B]y hover:border-slate-600 hover:text-slate-600'>Sign Up</button>
        <button className='nav-btn border-[1px] border-[red]y border-slate-600 transition-all delay-75 ease-in-out text-[#F2F2F0]y text-base text-slate-600 px-4 py-1 bg-[#D97C0B]y  font-semibold cursor-pointer rounded-3xl hover:border-[1px] hover:bg-transparent hover:border-slate-600 hover:text-slate-600'>Login</button>
      </div>
    </nav>
  )
}

export default NavBar
