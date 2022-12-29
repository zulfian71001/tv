import React from 'react'
import logo from '../image/search.svg';

function navbar() {
  return (
    <div className='container'>
    <div className='flex justify-between py-4'>
      <h1 className='text-2xl text-white font-semibold my-auto'>Streaming Tv</h1>
      <div className='flex relative'>
        <input type='text' className='backdrop-blur-2xl bg-white/10 rounded-xl h-12 w-[500px]'></input>
        <img src={logo} className="absolute right-3 w-8 top-2"></img>
      </div>
    </div>
    </div>
  )
}

export default navbar