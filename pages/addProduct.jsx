import Link from 'next/link'
import React, { useState } from 'react'

const addProduct = () => {
  const [link,setLink] = useState()
  const [category,setcategory] = useState()



  return (
    <div className=' w-full h-full justify-center items-center object-center'>
      <div className= 'w-96  border-white border-2 p-4 mx-auto my-40'>
        <input type="text" id='link-input' onChange={(e)=>{setLink(e.target.value)}} className='bg-slate-600 w-full h-14 indent-4 outline-blue-500' placeholder='link' />
        <input type="text" id='category-input' onChange={(e)=>{setcategory(e.target.value)}} className='bg-slate-600 w-full h-14 indent-4 outline-blue-500 mt-4' placeholder='category' />
        
        <Link href={`/api/saveProduct?link=${link}&&category=${category}`}>
          <button type="text" id='link-input' className='bg-green-500 w-full h-14 mt-12' placeholder='category' >Add To Products</button>
        </Link>
      </div>
      
    </div>
  )
}

export default addProduct
