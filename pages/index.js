import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { SModal, CModal, LModal} from '../components/modules/Modal';

export default function Home() {
  const [openSModal, setOpenSModal] = useState(false);
  const [openCModal, setOpenCModal] = useState(false);
  const [openLModal, setOpenLModal] = useState(false);

  return (
    <div>
      <Head>
        <title>Web3Acadmey DAO Donations</title> 
        <meta name='description' content='Donation page for Web3 Acadmey DAO' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* Header Section */}
      <div className='h-auto w-screen'>
          <div className='px-10 py-10 w-screen md:h-96 sm:h-screen bg-gradient-to-b from-purple-800 to-black justify-between md:flex sm:flex-column gap-16'>
            <div className='justify-center items-center'>
              <Image src='/../public/assets/imgs/h-logo.png' alt='/' width='300' height='150' />
              <h3 className='sm:text-5xl md:text-3xl uppercase'>Become a W3A DAO Donor</h3>
              <p className='pt-4 text-sm'>Tier donorship entitles you become a champion of Web3.</p>
              <p className='text-sm p-2'>A donor supporting the evolution of the new age of technology.</p>
            </div>
            <div className='md:w-1/4 sm:w-full h-full flex-column justify-center items-center'>
              <Image src='/../public/assets/imgs/logos.png' alt='/' width='200' height='100' />
              <p className='text-3xl text-gray-40 text-center'>#AreYouReady...?</p>
            </div>
          </div>
      </div>

      {/* Hero Section */}
      <div className='w-screen h-auto flex justify-center items-center text-center'>
      <div className='py-20'>
          <h1 className='py-20'>What is Web3 Academy DAO?</h1>
          <h2 className='py-2'>Web3 Academy DAO is a community, formed from the Web3</h2>
          <h2 className='py-2'>Academy Discord.  It originated from a common interest in</h2>
          <h2 className='py-2'>learning and growing the web3 ecosystem.</h2>
        </div>
      </div>

      {/* NFT Tier Section */}
      <div className='w-full h-screen py-8 flex-column justify-center items-center static'>
        <div className='w-full text-center'>
            <h1 className='md:text-5xl sm:text-4xl'>Tier Donor Options</h1>
        </div>
        <div className='w-full h-1/3 flex justify-center items-center'>
            <div className='w-96'>
                <h3 className='sm:text-xl md:text-lg text-indigo-700 uppercase'>tier 1</h3>
                <h1 className='text-3xl'>DOer Supporter</h1>
                <p className='py-4'>Lorem Ipsum is ismply dummy text of the printing and typsetting industry.  Lorem Ipsum has been the industry's standard dfdfd</p>
                <button type='button' className='bg-indigo-400 text-white rounded-md px-8 py-2 text-base font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 shadow-none uppercase' onClick={() => setOpenSModal(true)}>Mint!</button>
                {openSModal && <SModal closeModal={setOpenSModal} />}
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
                <button type='button' className='bg-indigo-400 text-white rounded-md px-8 py-2 text-base font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 shadow-none uppercase' onClick={() => setOpenCModal(true)}>Mint!</button>
                {openCModal && <CModal closeModal={setOpenCModal} />}
            </div>
        </div>

        <div className='w-full h-1/3 flex justify-center items-center'>
            <div className='w-96'>
                <h3 className='text-lg text-indigo-700 uppercase'>tier 1</h3>
                <h1 className='text-3xl'>DOer Legend</h1>
                <p className='py-4'>Lorem Ipsum is ismply dummy text of the printing and typsetting industry.  Lorem Ipsum has been the industry's standard dfdfd</p>
                <button type='button' className='bg-indigo-400 text-white rounded-md px-8 py-2 text-base font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 shadow-none uppercase' onClick={() => setOpenLModal(true)}>Mint!</button>
                {openLModal && <LModal closeModal={setOpenLModal} />}
            </div>
            <div className='w-56'>
                <Image src="/../public/assets/imgs/Tier-3.png" alt="/" width="400" height="700" />
            </div>
        </div>
      </div>
      {/* Footer Section */}
      <div className='w-screen h-[500px] pt-48 bg-gradient-to-b from-black to-indigo-600'>
          <div className=''>
            <div className='text-center'>
              <h1 className='uppercase text-4xl'>Web3 academy dao</h1>
                <p className='text-sm pt-2 pb-8'>Community of like minded individuals that gather to form the Web3 Academy DAO.</p>
                <button className='w-64 h-12 uppercase shadow-none text-xl'>join our discord</button>
            </div>
        </div>
      </div>

    </div>
  )
}
