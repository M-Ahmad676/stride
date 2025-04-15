import React from 'react'
import useFetchProducts from '../../Components/useFetchProducts/useFetchProduct'

export default function Store() {

  const {products, loading} = useFetchProducts()

  if(loading) return <p>Loading ......</p>

  return (
    <div className='my-32 px-14'>

      <div>
        
        <div className='mb-20'>
        <h1 className='text-[2rem] font-medium'>Summer Sale</h1>
        <div className='h-1 max-w-[12rem] w-full bg-black rounded-full'></div>
        </div>

        <div className='grid grid-cols-4 gap-10 justify-items-center '>
         {products.map((product) => (
         <div key={product.id} className='max-w-[20rem] w-full shadow-sm shadow-gray-400 rounded-2xl'>
          <div className='w-full rounded-t-2xl '>
            <img src={product.image} alt={product.name} className='w-full object-cover rounded-t-2xl h-[20rem]' />
          </div>
          <div className='h-[11rem] p-5 space-y-5'>
            <h3 className='text-[1.1rem] font-medium line-clamp-1'>{product.name}</h3>
            <p className='font-bold'>${product.price}</p>
            <p className='font-medium text-yellow-500'>Rating: {product.rating?.rate} / 5</p>
          </div>

         </div>

         ))} 
        </div>

      </div>
      
    </div>
  )
}
