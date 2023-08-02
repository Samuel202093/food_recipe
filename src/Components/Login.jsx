import React from 'react'
import { motion } from 'framer-motion'
import { BiLogIn } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { UseDataContext } from '../context/context'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Slide } from 'react-toastify'


const Login = ({login, setLogin, handleSwitch }) => {
    let {handleChangeForm, handleFocus, formData, focused, setFocused, setFormData} = UseDataContext()
    


    const handleSubmit = (e)=>{
        e.preventDefault()
        if (formData.email != '' && formData.password != '') {
            toast.success("You just Logged In",{
                transition: Slide,
                position: "top-right"
            })
            setFormData({
                email: '',
                password: ''
            })
            setLogin(!login)
            document.body.style.overflow = 'unset' 
        }else{
            toast.error("please enter the required fields", {
                transition: Slide,
                position: "top-right",
              });
              setFocused(!focused)
        }
    }


  return (
    <motion.div animate={{opacity:1}} initial={{opacity:0}} transition={{duration:0.6}} className='absolute top-0 z-[1000] flex justify-center items-center border-2y border-red-700y w-[100%] h-[100vh] bg-[rgba(0,0,0,0.7)] cursor-pointer'>
        <AiOutlineClose className='absolute top-2 bg-[#f2f2f0] rounded-md right-2 text-3xl' onClick={()=> {setLogin(!login); document.body.style.overflow = "unset"}}/>
        <div  className='flex flex-col gap-5 w-[100%] lg:w-[30%] h-[65vh] p-4 bg-[#f2f2f0] rounded-md text-slate-600'>
            <div className='flex justify-center'>
                <h2 className='flex text-2xl font-bold gap-x-3 text-slate-600'><BiLogIn className='mt-[0.35rem]'/> Login</h2>
            </div>

            <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-1'>
                <input type="email" placeholder='Enter email' name="email" value={formData.email} onChange={handleChangeForm} onBlur={handleFocus} focused={focused.email} required={true} className='h-[6vh] font-normal text-base px-3 focus:outline-none border-[1px] rounded-md border-slate-600'/>
                <span className='error text-sm text-[#CD201F]'>It should be a valid email address!</span>
                </div>
                <div className='flex flex-col gap-1'>
                <input type="password" placeholder='Enter password' name="password" value={formData.password} onChange={handleChangeForm} onBlur={handleFocus} pattern={"?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"} focused={focused.password} require={true} className='h-[6vh] font-normal text-base px-3  focus:outline-none border-[1px] rounded-md border-slate-600'/>
                <span className='error text-sm text-[#CD201F]'>Must contain at least one  number,one uppercase,lowercase letter and at least 8 or more characters</span>
                </div>
                <div className='flex flex-col'>
                    <button className='flex self-center bg-slate-600 text-[#f2f2f0] py-2 px-4 border-[1px] border-transparent transition-all delay-300 ease-in-out rounded-md font-semibold hover:bg-transparent hover:border-slate-600 hover:text-slate-600 hover:font-bold' disabled={formData.email === ''&& formData.password === ''} onClick={handleSubmit}>Submit</button>
                </div>
            </div>

            <div>
                    <span className='font-semibold text-sm'>New to <em>Urban Plate?</em>&nbsp; <small className='text-base text-[#759f17] font-bold cursor-pointer' onClick={handleSwitch}>Sign Up</small></span>
            </div>
        </div>
    </motion.div>
  )
}

export default Login
