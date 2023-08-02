import React,{useState} from 'react'
import logoImg from '../assets/img/urban-logo.png'
import {motion} from 'framer-motion'
import { MdOutlineSearch } from 'react-icons/md'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import {RxHamburgerMenu} from 'react-icons/rx'
import { BiLogIn, BiSolidUserPlus } from 'react-icons/bi'
import { MdFreeBreakfast} from 'react-icons/md'
import { CgHomeScreen, CgMenuCake } from 'react-icons/cg'
import { GiSeahorse, GiGrainBundle } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'
import { UseDataContext } from '../context/context'
import Login from './Login'
import SignUp from './SignUp'

const NavBar = () => {
  let {search, setSearch, handleChange} = UseDataContext()
  const navigate = useNavigate()
  const location = useLocation()
  
  const [login, setLogin] = useState(false)
  const [signUp, setSignUp] = useState(false)
  const [iconOpen, setIconOpen] = useState(true)
  const [navMobile, setNavMobile] = useState(false)


const handleClear = ()=>{
  setSearch('')
}

const handleShow = ()=>{
  setNavMobile(!navMobile)
  setIconOpen(!iconOpen)
  document.body.style.overflow = "hidden";
}

const handleClose = ()=>{
  setNavMobile(!navMobile)
  setIconOpen(!iconOpen)
  document.body.style.overflow = 'unset'  
}

const handleSignUp =()=>{
  setSignUp(!signUp)
  document.body.style.overflow = "hidden";
}

const handleLogin = ()=>{
  setLogin(!login)
  document.body.style.overflow = "hidden";
}

const handleSwitch = ()=>{
  setLogin(!login)
  setSignUp(!signUp)
}

const handleMobileSignUp = ()=>{
  setSignUp(!signUp)
  setNavMobile(!navMobile)
  setIconOpen(!iconOpen)
}

const handleMobileLogin = ()=>{
  setLogin(!login)
  setNavMobile(!navMobile)
  setIconOpen(!iconOpen)
}

const handleHomeMobile = ()=>{
  navigate('/')
  setNavMobile(!navMobile)
  setIconOpen(!iconOpen)
  document.body.style.overflow = 'unset' 
}
 

const handleHome = ()=>{
  navigate('/')
}

const handleDessert = ()=>{
  navigate('/desserts')
  setNavMobile(!navMobile)
  setIconOpen(!iconOpen)
  document.body.style.overflow = 'unset' 
}

const handleSeafood = ()=>{
  navigate('/seafoods')
  setNavMobile(!navMobile)
  setIconOpen(!iconOpen)
  document.body.style.overflow = 'unset' 
}

const handleBreakfast = ()=>{
  navigate('/breakfasts')
  setNavMobile(!navMobile)
  setIconOpen(!iconOpen)
  document.body.style.overflow = 'unset' 
}

const handlePasta = ()=>{
  navigate('/pastas')
  setNavMobile(!navMobile)
  setIconOpen(!iconOpen)
  document.body.style.overflow = 'unset' 
}

  return (
    <nav className='flex justify-around py-3 md:py-4 px-2 lg:px-2 bg-red-500y h-[9vh] lg:h-[11vh] overflow-y-hidden'>

        <img src={logoImg} alt="" className='absolutey md:w-[120px] cursor-pointer h-[80px] ml-[-0.5rem] md:ml-0 mt-[-0.95rem] md:mt-[-1rem] md:object-cover' onClick={handleHome}/>
    
      <div className={location.pathname === '/meals'? 'invisible': 'flex lg:justify-center w-[70%] md:w-[60%] lg:w-[60%]'}>
        <MdOutlineSearch className='absolute top-[3.4%] lg:top-[4%] left-[22%] md:left-[18%] lg:left-[32.8%] text-[1.5rem] cursor-pointer text-[rgba(0,0,0,0.4)]'/>
        <input type='text' className='text-base font-normal border-[1px] border-[#D97C0B]y border-slate-600 w-[100%] md:w-[95%] lg:w-[50%] px-8 rounded-3xl focus:outline-none placeholder:px-0' name='search' value={search} onChange={handleChange} placeholder="search by recipe's name"/>
        <IoMdClose className='absolute top-[3.3%] md:top-[3.4%] lg:top-[4%] right-[15%] md:right-[29%] lg:right-[39%] text-[1.4rem] cursor-pointer text-slate-600' onClick={handleClear}/>
      </div>

    
      {iconOpen === true ? <RxHamburgerMenu className='md:hidden text-3xl transition-all delay-[0.5s] ease-in-out mt-2 ml-3 text-[#D97C0B]y' onClick={handleShow}/>: <IoMdClose className='text-3xl mt-1 ml-3 text-slate-600 transition-all delay-[0.5s] ease-in-out' onClick={handleClose}/>}

      {navMobile &&  <motion.div animate={{opacity:1}} initial={{opacity:0}} transition={{duration:0.6}} className='absolute top-[9%] right-0 flex flex-col gap-5 justify-centery items-start px-2 border-2y py-4 cursor-pointer border-red-700y w-[60%] bg-slate-600 h-[100vh] z-[10]'>
        <span className='flex gap-x-4 text-base font-semibold text-[#f2f2f0]' onClick={handleBreakfast}><MdFreeBreakfast className='text-2xl'/> Breakfasts</span>
        <span className='flex gap-x-4 text-base font-semibold text-[#f2f2f0]' onClick={handleDessert}><CgMenuCake className='text-2xl'/> Desserts</span>
        <span className='flex gap-x-4 text-base font-semibold text-[#f2f2f0]' onClick={handleSeafood}><GiSeahorse className='text-2xl'/> Seafoods</span>
        <span className='flex gap-x-4 text-base font-semibold text-[#f2f2f0]' onClick={handlePasta}><GiGrainBundle className='text-2xl'/> Pastas</span>
          <span className='flex gap-x-4 text-base font-semibold text-[#f2f2f0]' onClick={handleMobileSignUp}><BiSolidUserPlus className='text-2xl'/> Sign Up</span>
          <span className='flex gap-x-4 text-base font-semibold text-[#f2f2f0]' onClick={handleMobileLogin}><BiLogIn className='text-2xl'/> Login</span>
          <span className='flex gap-x-4 text-base font-semibold text-[#f2f2f0]' onClick={handleHomeMobile}><CgHomeScreen className='text-2xl'/> Home</span>
      </motion.div>}
     
      <div className='hidden md:flex justify-between lg:w-[15%] border-2y border-blacky px-5y'>
        <button className='nav-btn border-[1px] border-[red]y border-slate-600 transition-all delay-75 ease-in-out text-[#F2F2F0]y text-slate-600 text-base px-4 mr-2 lg:mr-0 py-1 bg-[rgb(217,124,11)]y font-semibold cursor-pointer rounded-3xl hover:border-[1px] hover:bg-slate-600 hover:border-[#D97C0B]y hover:text-[#F2F2F0] hover:border-slate-600 hover:text-slate-600y' onClick={handleSignUp}>Sign Up</button>
        <button className='nav-btn border-[1px] border-[red]y border-slate-600 transition-all delay-75 ease-in-out text-[#F2F2F0]y text-base text-slate-600 px-4 py-1 bg-[#D97C0B]y font-semibold cursor-pointer rounded-3xl hover:border-[1px] hover:bg-slate-600 hover:border-slate-600 hover:text-[#f2f2f0]' onClick={handleLogin}>Login</button>
      </div>
      
      {login && <Login setLogin={setLogin} login={login} handleSwitch={handleSwitch}/>}
      {signUp && <SignUp signUp={signUp} setSignUp={setSignUp} handleSwitch={handleSwitch}/>}
      
    </nav>
  )
}

export default NavBar
