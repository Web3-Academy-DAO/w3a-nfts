import React, {useState} from 'react';
import Image from 'next/image';
import Logos from "/public/assets/imgs/Tier-1.png";


const TestModal =() => {
    const [tier1Modal, settier1Modal] = useState(false);

  return (
    <div className='flex md:flex-col justify-center items-center mt-40'>
        <div className='flex gap-5'>
            <button 
              type='button' 
              className='bg-blue-600 text-white active:bg-white active:text-black hover:bg-white hover:text-black flex justify-center items-center gap-2 font-bolt px-6 h-12 rounded-md shadow hover:shadown-lg outline-none focus:outline-none z-0'
              onClick={()=> settier1Modal(true)}
            >
              Open Modal
            </button>
        </div>
        {/* Tier 1 Modal UI Start */}
        {/* says show modal if not present */}
        {tier1Modal ? (
          <div className='flex justify-center items-center flex-col w-3/4 h-auto rounded-xl shadow-xl p-2 bg-black bg-opacity-75 z-50'>
              <Image src={Logos} width={300} height={400} objectFit="contain" />
              <h1 className='mt-2 text-3xl text-white'><span className='text-indigo-600'>Tier 1</span> DOer Supporter</h1>
              <h2 className='text-base mt-2 mx-4 text-white font-semibold text-center'>
                May your life be filled with success and achievements.
              </h2>
              <button 
                className='my-5 w-auto px-8 h-10 bg-blue-600 text-white reounded-md shadow hover-shadow-lg font-semibold'
                onClick={() => settier1Modal(false)}
              >
                Close
              </button>
            </div>
        ) : null}
    </div>
  )
}

export default TestModal