import React from 'react';
import Image from 'next/image';

const Cards = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center gap-x-32 text-white'>

      <div className='w-[300px] h-[420px] md:w-[400px] md:h-[520px] bg-transparent cursor-pointer group perspective'>
        <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000'>
            <div className='absolute backface-hidden border-4 border-indigo-600 w-full h-full rounded-xl shadow-xl shadow-gray-900'>
                <img src='../nft.gif' class='w-full h-full rounded-lg' />
            </div>
            <div className='absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-900 bg-opacity-80 rounded-xl overflow-hidden'>
              <div className='text-center flex flex-col items-center justify-center h-full text-white'>
                <h3> TIER 1</h3>
                <h2>DOER Supporter</h2>
                <p className='p-10 my-2'> 
                    Lorem Ipsum is simply dummy text of the pringing and typsetting idustry.  Lorem Ipsum ahs been the industry's standard dfdfd.
                </p>
                <button className='bg-teal-500 px-6 py-2 shadow-none font-semibold text-white rounded-full absolute -bottom-20 dealy-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125'>
                  Learn more ->
                </button>
              </div>
            </div>
        </div>
      </div>

      <div className='w-[300px] h-[420px] md:w-[400px] md:h-[520px] bg-transparent cursor-pointer group perspective'>
        <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000'>
          <div className='absolute w-full h-full bg-conic-gradient filter blur-xl'></div>
          <div className='absolute w-full h-full bg-conic-gradient filter blur-3xl opacity-60 animate-pulse'></div>
          <div className='absolute -inset-0.5 bg-conic-gradient rounded-xl'>
            <div className='absolute backface-hidden w-full h-full rounded-xl'>
                <img src='../nft.gif' class='w-full h-full rounded-xl' />
            </div>
          </div>
          <div className='absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-900 rounded-xl overflow-hidden'>
              <div className='text-center flex flex-col items-center justify-center h-full text-white'>
                <h3> TIER 1</h3>
                <h2>DOER Supporter</h2>
                <p className='p-10 my-2'> 
                    Lorem Ipsum is simply dummy text of the pringing and typsetting idustry.  Lorem Ipsum ahs been the industry's standard dfdfd.
                </p>
                <button className='bg-teal-500 px-6 py-2 shadow-none font-semibold text-white rounded-full absolute -bottom-20 dealy-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125'>
                  Learn more ->
                </button>
              </div>
            </div> 
        </div>
      </div>
    
    </div>
  )
}

export default Cards