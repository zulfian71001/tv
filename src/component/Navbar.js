import React from 'react'
import logo from '../image/search.svg';

function navbar() {
  return (
    <div className='container border'>
    <div className='flex justify-between py-4'>
      <h1 className=''>Streaming Tv</h1>
      <div className='flex border relative'>
        <input type='text' className='border border-red-600 rounded-xl h-12'></input>
        <img src={logo} className="absolute right-3 w-8 top-2"></img>
      </div>
    </div>
    </div>
  )
}

export default navbar