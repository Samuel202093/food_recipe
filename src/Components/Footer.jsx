import React from 'react'
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedinIn, } from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <footer className='flex flex-col-reverse md:flex-row justify-around bg-[#BF0606]y bg-[#D97C0B]y bg-[#759f17]  min-h-[30vh] w-full mt-[3rem] p-1 md:p-3 lg:p-6'>
      <div className='flex flex-col gap-4 p-3 w-[100%] md:w-[40%] lg:w-[25%]'>
        <h1 className='md:text-xl text-[#F2F2F0] font-sans font-semibold'>FOLLOW US</h1>
        <div className='flex justify-between'>
          <div className='socialContainer h-[45px] w-[45px] bg-[#F2F2F0] text-[rgba(0,0,0,0.6)] cursor-pointer hover:bg-[#3b5998] hover:text-[#F2F2F0] transition-all delay-150 ease-in-out flex justify-center items-center rounded-[50%]'>
              <span className='socialIcon text-xl'><FaFacebookF/></span>
          </div>
          <div className='socialContainer h-[45px] w-[45px] bg-[#F2F2F0] text-[rgba(0,0,0,0.6)] cursor-pointer hover:bg-[#00acee] hover:text-[#F2F2F0] transition-all delay-150 ease-in-out flex justify-center items-center rounded-[50%]'>
              <span className='socialIcon text-xl'><FaTwitter/></span>
          </div>
          <div className='socialContainer h-[45px] w-[45px] bg-[#F2F2F0] text-[rgba(0,0,0,0.6)] cursor-pointer hover:bg-[#CD201F] hover:text-[#F2F2F0] transition-all delay-150 ease-in-out flex justify-center items-center rounded-[50%]'>
              <span className='socialIcon text-xl'><FaYoutube/></span>
          </div>
          <div className='socialContainer h-[45px] w-[45px] bg-[#F2F2F0] text-[rgba(0,0,0,0.6)] cursor-pointer hover:bg-[#e95950] hover:text-[#F2F2F0] transition-all delay-150 ease-in-out flex justify-center items-center rounded-[50%]'>
              <span className='socialIcon text-xl'><FaInstagram/></span>
          </div>
          <div className='socialContainer h-[45px] w-[45px] bg-[#F2F2F0] text-[rgba(0,0,0,0.6)] cursor-pointer hover:bg-[#0A66C2] hover:text-[#F2F2F0] transition-all delay-150 ease-in-out flex justify-center items-center rounded-[50%]'>
              <span className='socialIcon text-xl'><FaLinkedinIn/></span>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-4 p-3 w-[100%] md:w-[20%] h-[20vh]y'>
        <h1 className='md:text-xl text-[#F2F2F0] font-sans font-semibold'>QUICK LINKS</h1>
      </div>

      <div className='flex flex-col gap-1 md:gap-4 p-3 w-[100%] md:w-[30%] h-[20vh]y'>
        <h1 className='md:text-xl text-[#F2F2F0] font-sans font-semibold'>CONTACT US</h1>
        <div className='flex flex-col gap-3 text-[#F2F2F0]'>
          <span className='flex text-sm md:text-base font-sans font-semibold'><HiLocationMarker className='text-xl md:text-2xl'/>: San Jacinto Battleground State Park Road</span>
          <span className='flex text-sm md:text-base font-sans font-semibold'><MdEmail className='text-xl md:text-2xl'/>: xyz@gmail.com</span>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer
