import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <div className='w-screen h-[500px] pt-48 bg-gradient-to-b from-black to-indigo-600'>
      <div className=''>
        <div className='text-center'>
          <h1 className='uppercase text-4xl'>Web3 academy dao</h1>
            <p className='text-sm pt-2 pb-8'>Community of like minded individuals that gather to form the Web3 Academy DAO.</p>
            <button className='w-64 h-12 uppercase shadow-none text-xl'>join our discord</button>
        </div>
      </div>


    </div>
  )
}

export default About