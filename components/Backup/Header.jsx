import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Header = () => {
  return (
    <div className='h-screen w-screen'>
      <div className='px-20 py-20 w-screen h-[500px] bg-gradient-to-b from-indigo-600 to-black flex justify-between'>
        <div className='flex-column justify-center items-center'>
          <Image src="/../public/assets/imgs/h-logo.png" alt="/" width="300" height="150" />
          <h3 className='py-4 text-3xl uppercase'>Become a w3a dao donor</h3>
          <p className='pt-2 text-sm'>Tier donorship entitles you become a champion of Web3.</p>
          <p className='text-sm'>A donor supporting the evolution of the new age of technology.</p>
        </div>
        <div className='h-full'>
          <Image src="/../public/assets/imgs/3-logos.png" alt="/" width="300" height="200" />
          <p className='text-3xl text-gray-400 text-center'>#AreYouReady...?</p>
        </div>
      </div>

      <div className='w-full h-auto flex justify-center items-center text-center'>
        <div className='py-20'>
          <h1 className='py-20'>What is Web3 Academy DAO?</h1>
          <h2 className='py-2'>Web3 Academy DAO is a community, formed from the Web3</h2>
          <h2 className='py-2'>Academy Discord.  It originated from a common interest in</h2>
          <h2 className='py-2'>learning and growing the web3 ecosystem.</h2>
        </div>
      </div>
    </div>
  )
}

export default Header