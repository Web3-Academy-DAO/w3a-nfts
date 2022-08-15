import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Carousel from '../components/Carousel';

export default function Home() {
  return (
  
    <div>
      <Head>
        <title>Web3Acadmey DAO Donations</title> 
        <meta name='description' content='Donation page for Web3 Acadmey DAO' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Carousel />
    </div>
   
  )
}
