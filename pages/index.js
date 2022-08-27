import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { SModal, CModal, LModal} from '../components/Modal';

export default function Home() {
  const [openSModal, setOpenSModal] = useState(false);
  const [openCModal, setOpenCModal] = useState(false);
  const [openLModal, setOpenLModal] = useState(false);

  return (
    <div className='w-screen xl:w-3/4'>
      <Head>
        <title>W3A DAO NFT Mint</title> 
        <meta name='description' content='Donation page for Web3 Acadmey DAO' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* Header Section */}
      <div className='w-screen h-screen bg-gradient-to-b from-purple-600 to-black'>
          <div className='px-10 py-10 flex lg:flex-row'>
            <div className='flex flex-col justify-center items-center lg:w-1/2 pt-48'>
              <Image src='/../public/assets/imgs/h-logo.png' alt='/' width='300' height='150' />
              <h3 className='py-4 text-2xl text-center md:text-4xl uppercase'>Support The Genesis of Web3 Academy DAO!</h3>
              <p className='text-xl text-center md:text-3xl'>We're on a mission to create resources, products and services to better support the wave of entrepreneurs, businesses and creators moving into the Web3 over the coming devade.</p>
            </div>
            <div className='pt-24 flex flex-col justify-center items-center lg:w-1/2'>
              <Image src='/../public/assets/imgs/logos.png' alt='/' width='300' height='150' />
              <p className='text-3xl text-gray-40 text-center'>#AreYouReady...?</p>
            </div>
          </div>
      </div>

      {/* NFT Tier Section */}
      <div className='w-screen h-auto flex flex-col items-center justify-center'>
        <div className='w-full text-center'>
            <h1 className='pt-12 px-2 py-4 text-4xl text-center lg:text-6xl'>We're All Web3 <span className='text-purple-500'>DOers!</span></h1> 
            <h3 className='px-2 pb-8 text-3xl text-center lg:text-4xl'>The question now is if you're a <span className='text-purple-500 font-bold'>Supporter, </span>a <span className='text-purple-500 font-bold'>Champion, </span> or a <span className='text-purple-500 font-bolt'>Legend.</span></h3>
        </div>

        <div className='w-full flex flex-col-reverse justify-center lg:flex-row lg:h-1/2'>
            <div className='w-screen flex flex-col justify-center items-center'>
                <h3 className='text-3xl text-purple-600 uppercase pb-4'>tier 1</h3>
                <h1 className='text-3xl'><span className='text-purple-500'>DO</span>er Supporter</h1>
                <p className='py-4 text-2xl text-purple-500 font-bold '>.025 ETH <span className='text-white font-normal'> - Available </span> 100 </p>
                <p className='py-2 px-4 text-xl text-center'>An airdrop of a mystery amount of <span className='text-purple-600'>$DOER </span>tokens.</p>
                <p className='pb-8 py-2 px-4 text-xl text-center'>Thank you for your service DOER Supporters!</p>
                <button type='button' className='w-48 h-16 bg-purple-500  text-white rounded-full px-8 py-2 text-base font-medium hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 shadow-none uppercase' onClick={() => setOpenSModal(true)}>Mint!</button>
                {openSModal && <SModal closeModal={setOpenSModal} />}
            </div>
            <div className='w-screen flex justify-center items-center'>
                <Image src="/../public/assets/imgs/Tier-1.png" alt="/" width="500" height="500" className='' />
            </div>
        </div>

        <div className='w-full flex flex-col justify-center lg:flex-row lg:h-1/2'>
            <div className='w-screen flex justify-center items-center'>
                <Image src="/../public/assets/imgs/Tier-2.png" alt="/" width="500" height="500" />
            </div>
            <div className='w-screen flex flex-col justify-center items-center'>
                <h3 className='text-3xl text-purple-600 uppercase pb-4'>Tier 2</h3>
                <h1 className='text-3xl'><span className='text-purple-500'>DO</span>er Chapmion</h1>
                <p className='py-4 text-2xl text-purple-500 font-bold'>.1 ETH <span className='text-white font-normal'> - Avialable </span> 50 </p>
                <p className='py-2 px-4 text-xl text-center'>A <span className='text-purple-500'>DOER</span> Champion holder shows that you are here for the mission and committed to the cause!</p>
                <p className='py-2 px-4 text-xl text-center'>A silver colored name in Web3 Acadmey Discord so all members can be reminded of your generosity.</p>
                <p className='py-2 px-4 text-xl text-center'>An airdrop of a mystery amount of <span className='text-purple-600'>$DOER </span>tokens.</p>
                <p className='pb-8 py-2 px-4 text-xl text-center'>Thank you for your service<span className='text-purple-500'>DOER </span>Supporters!</p>
                <button type='button' className='w-48 h-16 bg-purple-500  text-white rounded-full px-8 py-2 text-base font-medium hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 shadow-none uppercase' onClick={() => setOpenCModal(true)}>Mint!</button>
                {openCModal && <CModal closeModal={setOpenCModal} />}
            </div>
        </div>

        <div className='w-full flex flex-col-reverse justify-center lg:flex-row lg:h-1/2'>
            <div className='w-screen flex flex-col justify-center items-center'>
                <h3 className='text-3xl text-purple-600 uppercase pb-4'>tier 3</h3>
                <h1 className='text-3xl'><span className='text-purple-500'>DO</span>er Legend</h1>
                <p className='py-4 text-purple-500 font-bold text-2xl md:text-4xl'>.5 ETH <span className='text-white font-normal'> - Avialable </span> 25 </p>
                <p className='py-2 px-4 text-xl text-center'>A <span className='text-purple-500'>DOER</span> Legend holder shows that you are here for the mission and putting your money where your mouth is!  Those who mint this NFT will forever be remembered as a legend of the genesis of Web3 Academy DAO.</p>
                <p className='py-2 px-4 text-xl text-center'>The first 2 exclusive DAO merch drops for Free</p>
                <p className='py-2 px-4 text-xl text-center'>A gold colored name in the Web3 Academy Discord so all members can be reminded of your generosity.</p>
                <p className='py-2 px-4 text-xl text-center'>An airdrop of a mystery amount of <span className='text-purple-500'>$DOER </span>tokens.</p>
                <p className='pb-8 px-4 text-xl text-center'>Thank you for your service <span className='text-purple-500'>DOER </span> Legends!</p>
                <button type='button' className='w-48 h-16 bg-purple-500  text-white rounded-full px-8 py-2 text-base font-medium hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 shadow-none uppercase' onClick={() => setOpenLModal(true)}>Mint!</button>
                {openLModal && <LModal closeModal={setOpenLModal} />}
            </div>
            <div className='w-screen flex justify-center items-center'>
                <Image src="/../public/assets/imgs/Tier-3.png" alt="/" width="500" height="500" />
            </div>
        </div>
      </div>
      {/* Footer Section */}
      <div className='w-screen h-screen pt-48 bg-gradient-to-b from-black to-purple-800'>
          <div className='w-screen flex flex-col justify-center items-center'>
            <h1 className='text-3xl text-center'>Web3 Academy DAO</h1>
            <h3 className='text-2xl text-center'>Thanks You</h3>
            <p className='py-2 px-4 text-xl text-center'>All funds received from this NFT mint will go directly into the DAO treasury, a multisig safe secured by 8 members of the DAO.</p>
            <p className='pb-8 py-2 px-4 text-xl text-center'>The funds will go towards paying for various resources and tools needed to enable the DAO to take flight and progress torwards supporting entrpereneurs and creators across the Web3 Ecosystem.</p>
            <button className='w-64 h-12 uppercase shadow-none text-xl'>join our discord</button>
        </div>
      </div>
    </div>
  )
}
