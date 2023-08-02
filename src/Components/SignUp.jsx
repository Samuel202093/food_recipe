import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BiSolidUserPlus } from 'react-icons/bi'
import { UseDataContext } from '../context/context'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Slide } from 'react-toastify'


const SignUp = ({handleSwitch, signUp, setSignUp}) => {
    let {handleChangeForm, handleFocus, formData, focused, setFocused, setFormData} = UseDataContext()
   

    const handleSubmit = (e)=>{
        e.preventDefault()
        if (formData != null) {
            toast.success(`Thanks ${formData.firstname} ${formData.lastname} for registering on urban plate`,{
                transition: Slide,
                position: 'top-right'
            })
            setFormData({
                firstname: '',
                lastname: '',
                email: '',
                phoneNumber: '',
                password: ''
            })
            setSignUp(!signUp)
            document.body.style.overflow = 'unset' 
        }else{
            toast.error(`please enter the required fields`,{
                transition: Slide,
                position: 'top-right'
            })
            setFocused(!focused)
        }
    }
    

  return (
    <div className='absolute top-0 z-[1000] flex justify-center items-centery border-2y border-red-700y w-[100%] h-[150vh]y h-[100vh] bg-[rgba(0,0,0,0.7)] overflow-y-scrolly'>
        <AiOutlineClose className='absolute top-2 bg-[#f2f2f0] rounded-md right-2 text-3xl cursor-pointer' onClick={()=>{setSignUp(!signUp); document.body.style.overflow = "unset"}}/>

        <div className='flex flex-col gap-5 w-[100%] lg:w-[30%] h-[100vh] lg:mt-8 p-4 bg-[#f2f2f0] rounded-md text-slate-600 overflow-y-scrolly'>

            <div className='flex justify-center'>
                <h2 className='flex text-2xl font-bold gap-x-3 text-slate-600'><BiSolidUserPlus className='mt-[-0.25rem] md:mt-[0.35rem] text-4xl md:text-2xl'/> Sign Up</h2>
            </div>

            <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-1'>
                <input type="text"  placeholder='Enter Firstname' name="firstname" value={formData.firstname} onChange={handleChangeForm} onBlur={handleFocus} focused={focused.firstname} pattern={"^[A-Za-z0-9]{5,15}$"} className='h-[6vh] font-normal text-base px-3 focus:outline-none border-[1px] rounded-md border-slate-600' required={true}/>
                <span className='error text-sm text-[#CD201F]'>Firstname should contain 5 - 15 characters and should not include special characters</span>
                </div>
                <div className='flex flex-col gap-1'>
                <input type="text" placeholder='Enter Lastname' name="lastname" value={formData.lastname} onChange={handleChangeForm} onBlur={handleFocus} focused={focused.lastname} pattern={"^[A-Za-z0-9]{5,15}$"} required={true} className='h-[6vh] font-normal text-base px-3 focus:outline-none border-[1px] rounded-md border-slate-600'/>
                <span className='error text-sm text-[#CD201F]'>Lastname should contain 5 - 15 characters and should not include special characters</span>
                </div>
                <div className='flex flex-col gap-1'>
                <input type="tel" placeholder='Enter phone number' value={formData.phoneNumber} focused={focused.phoneNumber} onChange={handleChangeForm} onBlur={handleFocus} name="phoneNumber" pattern={"[0-9]{8,15}"} className='h-[6vh] font-normal text-base px-3 focus:outline-none border-[1px] rounded-md border-slate-600'/>
                <span className='error text-sm text-[#CD201F]'>Phone number should be a number</span>
                </div>
                <div className='flex flex-col gap-1'>
                <input type="email" placeholder='Enter email' name="email" onChange={handleChangeForm} onBlur={handleFocus} focused={focused.email} required={true} value={formData.email} className='h-[6vh] font-normal text-base px-3 focus:outline-none border-[1px] rounded-md border-slate-600'/>
                <span className='error text-sm text-[#CD201F]'>It should be a valid email address!</span>
                </div>
                <div className='flex flex-col gap-1'>
                <input type="password" placeholder='Enter password' name="password" onChange={handleChangeForm} onBlur={handleFocus} focused={focused.password} pattern={"?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"} value={formData.password} required={true} className='h-[6vh] font-normal text-base px-3  focus:outline-none border-[1px] rounded-md border-slate-600'/>
                <span className='error text-sm text-[#CD201F]'>Must contain at least one  number,one uppercase,lowercase letter and at least 8 or more characters</span>
                </div>
                <div className='flex flex-col'>
                    <button className='flex self-center bg-slate-600 text-[#f2f2f0] py-2 px-4 border-[1px] border-transparent transition-all delay-300 ease-in-out rounded-md font-semibold hover:bg-transparent hover:border-slate-600 hover:text-slate-600 hover:font-bold' disabled={formData === null ? true:false} onClick={handleSubmit}>Submit</button>
                </div>
            </div>

            <div>
                    <span className='font-semibold text-sm'>Already on <em>Urban Plate?</em>&nbsp; <small className='text-sm text-[#759f17] font-bold cursor-pointer' onClick={handleSwitch}>Login</small></span>
            </div>
        </div>
       
    </div>
  )
}

export default SignUp
