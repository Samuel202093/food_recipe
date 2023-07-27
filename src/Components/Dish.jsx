import React from 'react'
import Item from './Item'

const Dish = (props) => {
  
    const data = props
    // console.log(data)


    
  return (
    <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3 gap-y-6 flexy justify-betweeny w-[100%] lg:w-[85%] min-h-[60vh] border-2y border-[red]y mx-0 lg:mx-auto p-2 lg:p-3'>
        {data.data.categories?.map((x, index)=>{
            return <Item data={x} key={index}/>
        })}
      
    </div>
  )
}

export default Dish
