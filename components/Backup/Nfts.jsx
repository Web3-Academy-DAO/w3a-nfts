import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Nfts = () => {
  return (
    <div className='w-full h-screen py-8 flex-column justify-center items-center'>
        <div className='w-full text-center'>
            <h1 className='text-5xl'>Tier Donor Options</h1>
        </div>
        <div className='w-full h-1/3 flex justify-center items-center'>
            <div className='w-96'>
                <h3 className='text-lg text-indigo-700 uppercase'>tier 1</h3>
                <h1 className='text-3xl'>DOer Supporter</h1>
                <p className='py-4'>Lorem Ipsum is ismply dummy text of the printing and typsetting industry.  Lorem Ipsum has been the industry's standard dfdfd</p>
                <button type='button' class='w-44 h-8 bg-indigo-500 shadow-none'>Learn More -></button>
            </div>
            <div className='w-56'>
                <Image src="/../public/assets/imgs/Tier-1.png" alt="/" width="400" height="700" />
            </div>
        </div>

        <div className='w-full h-1/3 flex justify-center items-center'>
            <div className='w-56'>
                <Image src="/../public/assets/imgs/Tier-2.png" alt="/" width="400" height="700" />
            </div>
            <div className='w-96'>
                <h3 className='text-lg text-indigo-700 uppercase'>Tier 2</h3>
                <h1 className='text-3xl'>DOer Champion</h1>
                <p className='py-4'>Lorem Ipsum is ismply dummy text of the printing and typsetting industry.  Lorem Ipsum has been the industry's standard dfdfd</p>
                <button type='button' class='w-44 h-8 bg-indigo-500 shadow-none'>Learn More -></button>
            </div>
        </div>

        <div className='w-full h-1/3 flex justify-center items-center'>
            <div className='w-96'>
                <h3 className='text-lg text-indigo-700 uppercase'>tier 1</h3>
                <h1 className='text-3xl'>DOer Legend</h1>
                <p className='py-4'>Lorem Ipsum is ismply dummy text of the printing and typsetting industry.  Lorem Ipsum has been the industry's standard dfdfd</p>
                <button type='button' class='w-44 h-8 bg-indigo-500 shadow-none'>Learn More -></button>
            </div>
            <div className='w-56'>
                <Image src="/../public/assets/imgs/Tier-3.png" alt="/" width="400" height="700" />
            </div>
        </div>
    </div>
  )
}

export default Nfts