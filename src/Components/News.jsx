import React, {useState} from 'react'
import img from '../assets/img/carrot-juice.png'
import img2 from '../assets/img/fruitsandvegetables.jpg'
import img3 from '../assets/img/seafood.avif'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Slide } from 'react-toastify'


const News = () => {
    const [subscribe, setSubscribe] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(false)

    const handleChange = (e)=>{
        setSubscribe(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if (subscribe === '') {
            toast.error("please enter your email", {
                transition: Slide,
                position: "top-right",
              });
              setBtnDisabled(!btnDisabled)
        }else{
            toast.success("Thanks for subscribing to our newsletter",{
                transition: Slide,
                position: "top-right"
            })
        }
    }



  return (
    <div>
          {/* subscription  section*/}
      <section className='bg-[#BF0606]y bg-[#759f17] flex justify-center items-center w-[100%] h-[20vh] lg:h-[15vh] mt-4 px-2 py-0 md:px-4 lg:px-0 md:py-0'>
        <div className='flex flex-col lg:flex-row justify-between w-[100%] gap-3 md:gap-8 lg:gap-0 lg:w-[85%] border-2y border-whitey'>
            <div>
                <h1 className='subscribe-heading text-base md:text-xl text-[#F2F2F0]'>Subscribe to our Newsletter for latest recipes and expert tips</h1>
            </div>
            <div className='flex justify-between w-[100%] lg:w-[40%]'>
                <input type="email" name="subscribe" value={subscribe} onChange={handleChange} placeholder='Enter your Email' className='h-[6vh] w-[75%] md:w-[85%] lg:w-[75%] rounded-3xl px-6 placeholder:px-4 bg-transparent border-[1px] focus:outline-none text-base text-[#F2F2F0]' required={true}/>
                <button className='bg-[#758C1F]y border-[1px] border-[#f2f2f0] text-[#F2F2F0] px-3 rounded-3xl font-bold transition-all delay-150 ease-in-out hover:bg-[#F2F2F0] hover:text-[#759f17]' onClick={handleSubmit} disabled={btnDisabled}>Subscribe</button>
            </div>
        </div>
      </section>

      {/* News section */}
      <section className='min-h-[40vh] bg-blue-800y mt-9 md:mt-7'>
        <h1 className='news-heading text-3xl font-semibold text-center text-slate-600'>News and Trends</h1>

        <div className='flex flex-col md:flex-row justify-between w-[100%] lg:w-[80%] gap-6 md:gap-3 lg:gap-3 lg:mx-auto mt-7 px-2 lg:px-0 text-slate-600'>           
                <div className="flex flex-col border-[1px]y border-gray-500y rounded-lg gap-3 code-container float-animation">
                    <img src={img} className='object-contain md:object-cover h-[30vh] w-full rounded-lg'/>
                    <h2 className='text-xl font-sans font-semibold'>Carrot Coriander Juice</h2>
                    <p className='text-base font-sans'>This wholesome detox drink is filled with vitamin C, antioxidants and beneficial plant compounds. Carrot coriander juice can improve skin health, immunity, eyesight and much more. Seasoned with salt, pepper and ginger, this juice is very easy to make at home.</p>
                </div>
    
                <div className="flex flex-col py-3 border-[1px]y border-gray-500y rounded-lg gap-3 code-container float-animation">
                    <img src={img2} className='object-contain md:object-cover h-[30vh] w-full rounded-lg'/>
                    <h2 className='text-xl font-sans font-semibold'>Diet high in fruit, vegetables reduces miscarriage risk</h2>
                    <p className='text-base font-sans'>A preconception and early-pregnancy diet that contains lots of fruit, vegetables, seafood, dairy, eggs and grain may be associated with reducing risk of miscarriage, a new review of research suggests.</p>
                </div>

                <div className="flex flex-col py-3 border-[1px]y border-gray-500y rounded-lg gap-3 code-container float-animation">
                    <img src={img3} className='object-contain md:object-cover h-[30vh] w-full rounded-lg'/>
                    <h2 className='text-xl font-sans font-semibold'>Qatar lifts ban on frozen seafood from India</h2>
                    <p className='text-base font-sans'>Qatar has lifted its “temporary” ban on the import of frozen seafood from India, paving the way for enhanced export and improved bilateral relations with the West Asian country.</p>
                </div>
        </div>
      </section>
      
    </div>
  )
}

export default News
