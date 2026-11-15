import React, { useState } from 'react'

export default function Counter() {
 const [count, setCount] = useState(10);

 return (
    <div className='mt-10 flex flex-col items-center justify-center'>
       <h1>Counter</h1>

       <div className='flex flex-row gap-5 items-center justify-center mt-4'>
       <button 
       className='bg-blue-500 font-bold text-xl text-white px-4 py-2 rounded cursor-pointer disabled:bg-blue-300 disabled:cursor-not-allowed' 
       disabled={count === 0 ? true  : false}
       onClick={() => setCount(prevCount => prevCount - 1)}> -  </button> 
       <h1>{count}</h1>
       <button 
       className='bg-green-500 font-bold text-xl text-white px-4 py-2 rounded cursor-pointer' 
       onClick={() => setCount(prevCount => prevCount + 1)}> + </button>

        <button 
       className='bg-green-500 font-bold text-xl text-white px-4 py-2 rounded cursor-pointer' 
       onClick={() => setCount(10)}> Reset </button>
       </div>
       
    </div>
  )
}
