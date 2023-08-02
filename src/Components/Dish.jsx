import React, {useState} from 'react'
import SingleDish from './SingleDish'

const Dish = (props) => {
  const [showModal, setShowModal] = useState(false)

  const handleModal = ()=>{
      setShowModal(!showModal)
      document.body.style.overflow = "hidden";
  }
    const data = props
    
  return (
    <div className='dish-card relative flex flex-col gap-1 w-[100%] lg:w-[95%] min-h-[40vh] border-[1px] border-transparent p-4 transition-all ease-in-out delay-[0.4s] hover:border-[#758C1F]y cursor-pointer rounded-xl md:rounded-2xl text-slate-600'>
    <div className='w-full h-[25vh] md:h-[50vh] border-2y border-[green]y rounded-xly' >
        <img src={data.data.strMealThumb} alt="" className='w-full h-[25vh] md:h-[45vh] object-contain rounded-xl'/>
    </div>
    <div className='flex flex-col gap-2'>
        <div>
            <h2 className='font-medium font-sans text-base'>{data.data.strMeal}...</h2>
        </div>
        <div>
            <span className='text-sm font-sans'>{data.data.strInstructions.slice(0,50)}....<small className='text-[#759f17]' onClick={handleModal}>readmore</small></span>
            {showModal && <SingleDish item={data} showModal={showModal} setShowModal={setShowModal}/>}

        </div>

    </div>
  </div>
  )
}

export default Dish
