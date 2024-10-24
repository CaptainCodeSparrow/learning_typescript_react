import React from 'react'

export default function App() {
  return (
    <div className=' flex items-center justify-center h-screen bg-stone-800'>
      <div className=' bg-white shadow-lg w-96 justify-center p-4 rounded-lg'>
        <h1 className=' flex justify-center p-3 m-4 font-bold'>log in</h1>
        <div className=' grid gap-4 p-4 m-2'>
          <input type="text" placeholder='username' className=' input input-bordered'  />
          <input type="text" placeholder='password' className='input input-bordered' />
          <div className=' justify-center flex'><button className='bg-lime-400 rounded w-40 h-8 '>sign in</button>
          </div>
          
        </div>
      </div>

    </div>
  )
}
