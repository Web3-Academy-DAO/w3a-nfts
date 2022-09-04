import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { SModal, CModal, LModal } from "../components/Modal";

export default function Home() {
  const [openSModal, setOpenSModal] = useState(false);
  const [openCModal, setOpenCModal] = useState(false);
  const [openLModal, setOpenLModal] = useState(false);

  return (
    <>
      <Head>
        <title>Web3Acadmey DAO Donations</title>
        <meta name="description" content="Donation page for Web3 Acadmey DAO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header Section */}
      <div id="stars" className="z-0"></div>
      <div id="stars2" className="z-0"></div>
      <div id="stars3" className="z-0"></div>
      <div className="px-10 py-10 md:px-20 bg-gradient-to-b from-purple-800 to-black ">
        <Image
          src="/../public/assets/imgs/h-logo.png"
          alt="Web3 Academy DAO logo"
          width="150"
          height="90"
        />
        <div className="justify-between lg:flex sm:flex-column gap-16 mb-20">
          <div className="justify-center items-center">
            <h1 className="mt-20 text-center md:text-left leading-tight">
              <span className="font-light">Become a W3A DAO </span>
              <br />
              Genesis Donator
            </h1>
            <p className="mt-10 max-w-2xl text-center md:text-left">
              Web3 Academy DAO is a tokenized community on a mission to create
              resources, products and services to better support the wave of
              entrepreneurs, businesses and creators moving into Web3 over the
              coming decade.
            </p>
            <p className="text-3xl font-light mt-8">
              #AreYouReady?
            </p>
          </div>
          <div className="md:w-1/2 flex-column justify-center items-center">
            <Image
              src="/../public/assets/imgs/logos.png"
              alt="DOER Icons"
              width="1000"
              height="500"
            />
          </div>
        </div>
      </div>

      {/* NFT Tier Section */}
      <h2 className="md:text-5xl sm:text-4xl max-w-xl text-center mx-auto mt-20 ">
        <span className="font-light">Web3 Academy DAO </span>
        <br />
        Genesis Donators Collection
      </h2>
      <p className="mt-8 text-center max-w-md mx-auto">
        We’re ALL Web3 DOers! The question now is if you’re a Supporter, a
        Champion or a Legend.
      </p>
      <div className="mt-10 flex-column justify-center items-center mb-20 px-5">
        <div className="w-full h-1/3 flex justify-center items-center mb-20">
          <div className="w-96">
            <h3 className="sm:text-xl md:text-lg text-purple-100 uppercase">
              Tier 1
            </h3>
            <h2 className="text-3xl">DOER Supporter</h2>
            <p className="py-4">
              A DOER Supporter holder shows that you are here for the Mission!
              Those who mint this NFT will forever be remembered as a supporter
              of the genesis of Web3 Academy DAO.
            </p>
            <button
              disabled={openSModal || openCModal || openLModal}
              className="bg-purple-500 text-white rounded-md px-8 py-2 mt-2 text-base font-bold hover:bg-purple-200 active:bg-purple-300 uppercase"
              onClick={() => setOpenSModal(true)}
            >
              Mint for 0.1 ETH
            </button>
            {openSModal && <SModal closeModal={setOpenSModal} />}
          </div>
          <div className="w-56">
            <Image
              src="/../public/assets/imgs/Tier-1.png"
              alt="/"
              width="400"
              height="450"
            />
          </div>
        </div>

        <div className="w-full h-1/3 flex justify-center items-center mb-20">
          <div className="w-56">
            <Image
              src="/../public/assets/imgs/Tier-2.png"
              alt="/"
              width="400"
              height="450"
            />
          </div>
          <div className="w-96">
            <h3 className="sm:text-xl md:text-lg text-purple-100 uppercase">
              Tier 2
            </h3>
            <h2 className="text-3xl">DOER Champion</h2>
            <p className="py-4">
              A DOER Champion holder shows that you are here for the mission and
              committed to the cause! Those who mint this NFT will forever be
              remembered as a champion of the genesis of Web3 Academy DAO.
            </p>
            <button
              disabled={openSModal || openCModal || openLModal}
              className="bg-purple-500 text-white rounded-md px-8 py-2 mt-2 text-base font-bold hover:bg-purple-200 active:bg-purple-300 uppercase"
              onClick={() => setOpenCModal(true)}
            >
              Mint for 0.25 ETH
            </button>
            {openCModal && <CModal closeModal={setOpenCModal} />}
          </div>
        </div>

        <div className="w-full h-1/3 flex justify-center items-center">
          <div className="w-96">
            <h3 className="sm:text-xl md:text-lg text-purple-100 uppercase">
              Tier 3
            </h3>
            <h2 className="text-3xl">DOER Legend</h2>
            <p className="py-4">
              A DOER Legend holder shows that you are here for the mission and
              putting your money where your mouth is! Those who mint this NFT
              will forever be remembered as a legend of the genesis of Web3
              Academy DAO.
            </p>
            <button
              disabled={openSModal || openCModal || openLModal}
              className="bg-purple-500 text-white rounded-md px-8 py-2 mt-2 text-base font-bold hover:bg-purple-200 active:bg-purple-300 uppercase"
              onClick={() => setOpenLModal(true)}
            >
              Mint for 0.5 ETH
            </button>
            {openLModal && <LModal closeModal={setOpenLModal} />}
          </div>
          <div className="w-56">
            <Image
              src="/../public/assets/imgs/Tier-3.png"
              alt="/"
              width="400"
              height="450"
            />
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <div className="bg-gradient-to-t from-purple-800 to-black pb-24 pt-36 ">
        <div className="">
          <div className="text-center">
            <h1 className="text-4xl max-w-xl mx-auto">
              Web3 Academy DAO Thanks You
            </h1>
            <p className="text-sm pt-2 pb-8 mt-8 max-w-xl mx-auto">
              All funds raised from this NFT mint will go directly to the DAO
              treasury, a multisig safe secured by 8 members of the DAO. The
              funds will go towards paying for various resources and tools
              needed to enable the DAO to take flight and progress towards
              supporting entrepreneurs and creators across the Web3 Ecosystem.
            </p>
          </div>
        </div>
        <div className="text-center pt-24">
          <Image
            src="/../public/assets/imgs/h-logo.png"
            alt="Web3 Academy DAO logo"
            width="150"
            height="90"
          />
        </div>
      </div>

      {/*  */}
    </>
  );
}
