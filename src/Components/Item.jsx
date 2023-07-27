import React, {useState} from 'react'
import { FaRegComment } from 'react-icons/fa'
import { BsHeartFill } from 'react-icons/bs'
import { RiAddCircleFill } from 'react-icons/ri'
import SingleDish from './SingleDish'


const Item = ({data}) => {
    const [showModal, setShowModal] = useState(false)

    const handleModal = ()=>{
        setShowModal(!showModal)
        document.body.style.overflow = "hidden";
    }

  return (
    <div className='dish-card relative flex flex-col gap-1 w-[100%] lg:w-[95%] min-h-[40vh] border-[1px] border-transparent p-4 transition-all ease-in-out delay-[0.4s] hover:border-[#758C1F]y cursor-pointer rounded-2xl text-slate-600' key={data.idCategory}>
            <div className='w-full h-[50vh] border-2y border-[green]y rounded-xly' >
                <img src={data.strCategoryThumb} alt="" className='w-full h-[45vh] object-contain rounded-xl'/>
            </div>
            <div className='flex flex-col gap-2'>
                <div>
                    <h2 className='font-medium font-sans text-base'>{data.strCategory}</h2>
                </div>
                <div>
                    <span className='text-sm font-sans'>{data.strCategoryDescription.slice(0,70)}...<small className='text-[#759f17]' onClick={handleModal}>readmore</small></span>
                    {showModal && <SingleDish showModal={showModal} setShowModal={setShowModal} item={data}/>}

                </div>
    
            </div>
          </div>
  )
}

export default Item
