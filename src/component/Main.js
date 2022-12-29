import React from 'react'
import bg2 from '../image/bg2.jpg';


function main() {
  return (
    <div className='container'>
        <div className='overflow-auto w-full h-[400px] grid auto-cols-[100%] gap-x-4 grid-flow-col'>

          <div className='w-full relative'>
            <img src={bg2} className="h-96 w-full object-cover"></img>
            
            <div className='absolute inset-0 bg-black/40'>
              <div className='mx-8 flex flex-col  h-full'>
              <div className='my-auto '>
                <h1 className='text-white text-5xl font-bold text-center'>YYYYYYY</h1>
                <h3 className='text-white font-bold text-xl mt-5 text-center'>21:00 WIB</h3>
                <a href='#' className='inline-block py-2 px-8 bg-blue-800 rounded-full text-lg font-semibold text-white mt-5'>Tonton</a>
                </div>
              </div>
            </div>
          </div>

          <div className='w-full relative'>
            <img src={bg2} className="h-96 w-full object-cover"></img>
            <div className='absolute inset-0 bg-black/40'>
              <div className='mx-8 flex flex-col  h-full'>
              <div className='my-auto '>
                <h1 className='text-white text-5xl font-bold text-center'>YYYYYYY</h1>
                <h3 className='text-white font-bold text-xl mt-5 text-center'>21:00 WIB</h3>
                <a href='#' className='inline-block py-2 px-8 bg-blue-800 rounded-full text-lg font-semibold text-white mt-5'>Tonton</a>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className='mt-10 mb-20'>
          <div className='grid grid-cols-10 gap-4'>
                <a href='#' className='backdrop-blur-2xl bg-white/10 inline-block h-28 rounded-lg'></a>
                <a href='#' className='backdrop-blur-2xl bg-white/10 inline-block h-28 rounded-lg'></a>
                <a href='#' className='backdrop-blur-2xl bg-white/10 inline-block h-28 rounded-lg'></a>
                <a href='#' className='backdrop-blur-2xl bg-white/10 inline-block h-28 rounded-lg'></a>
                <a href='#' className='backdrop-blur-2xl bg-white/10 inline-block h-28 rounded-lg'></a>
                <a href='#' className='backdrop-blur-2xl bg-white/10 inline-block h-28 rounded-lg'></a>
                <a href='#' className='backdrop-blur-2xl bg-white/10 inline-block h-28 rounded-lg'></a>
                <a href='#' className='backdrop-blur-2xl bg-white/10 inline-block h-28 rounded-lg'></a>
                <a href='#' className='backdrop-blur-2xl bg-white/10 inline-block h-28 rounded-lg'></a>
                <a href='#' className='backdrop-blur-2xl bg-white/10 inline-block h-28 rounded-lg'></a>
                <a href='#' className='backdrop-blur-2xl bg-white/10 inline-block h-28 rounded-lg'></a>
                <a href='#' className='backdrop-blur-2xl bg-white/10 inline-block h-28 rounded-lg'></a>
                <a href='#' className='backdrop-blur-2xl bg-white/10 inline-block h-28 rounded-lg'></a>
                <a href='#' className='backdrop-blur-2xl bg-white/10 inline-block h-28 rounded-lg'></a>
                <a href='#' className='backdrop-blur-2xl bg-white/10 inline-block h-28 rounded-lg'></a>
                <a href='#' className='backdrop-blur-2xl bg-white/10 inline-block h-28 rounded-lg'></a>
                <a href='#' className='backdrop-blur-2xl bg-white/10 inline-block h-28 rounded-lg'></a>
                <a href='#' className='backdrop-blur-2xl bg-white/10 inline-block h-28 rounded-lg'></a>
                <a href='#' className='backdrop-blur-2xl bg-white/10 inline-block h-28 rounded-lg'></a>
                <a href='#' className='backdrop-blur-2xl bg-white/10 inline-block h-28 rounded-lg'></a>
          </div>
        </div>
    </div>
  )
}

export default main