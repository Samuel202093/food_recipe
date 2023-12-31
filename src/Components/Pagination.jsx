import React from 'react'

const Pagination = (props) => {
    const {prePage, changeCurrrentPage, nextPage, numbers, currentPage} = props
  return (
    <div className='flex justify-end border-[3px]y border-[green]y w-[97%] md:w-[100%] lg:w-[100%]y mt-3'>
      
    {/* pagination wrapper */}
<div className='flex justify-end gap-4 border-2y border-[yellow]y cursor-pointer md:mr-2 lg:mr-[6.3rem]'>
  <button onClick={prePage} className='border-[1px] border-slate-600 px-2 py-1 text-sm' disabled={currentPage === 1}>Prev</button> 
  {
      numbers.map((n, i)=>{
        return <span onClick={()=> changeCurrrentPage(n)} key={i} className={currentPage === n ? "text-[red]y font-semibold text-sm px-2 py-1 border-[1px] bg-slate-600 text-[white] cursor-pointer": ''}>{n}</span>
      })
    } 
    <button onClick={nextPage} className='border-[1px] border-slate-600 px-2 py-1 text-sm' disabled={currentPage === numbers[numbers.length - 1]}>Next</button>
</div>
</div>
  )
}

export default Pagination
