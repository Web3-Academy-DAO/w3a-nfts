import React from 'react';

function SModal({closeModal}) {
  return (
    <div className='absolute z-0 inset-0 flex justify-center items-center' id='modalBackground'>
      <div className='md:w-1/2 md:h-auto sm:w-3/4 sm:h-auto flex-column bg-purple-600 rounded-xl shadow-lg shadow-gray-400' id='modalContainer'>
        <div className='w-full h-8 flex justify-end'>
          <button className='px-4 py-2 text-2xl text-black bg-none shadow-none items-start justify-end' onClick={() => closeModal(false)}> X </button>
        </div>
        <div className='py-8 text-center' id='title'>
          <h1 className='text-3xl'>DOer Supporter</h1>
        </div>
        <div className=''>
          <p>Please embed here for minting DOer Supporter NFT!</p>
        </div>
        <div className='w-full h-12 flex justify-center items-center' id='footer'>
          <button>Mint!</button>
        </div>
      </div>
    </div>
  );
}


function CModal({closeModal}) {
  return (
    <div className='absolute z-0 inset-0 flex justify-center items-center' id='modalBackground'>
      <div className='md:w-1/2 md:h-auto sm:w-3/4 sm:h-auto flex-column bg-purple-600 rounded-xl shadow-lg shadow-gray-400' id='modalContainer'>
        <div className='w-full h-8 flex justify-end'>
          <button className='px-4 py-2 text-2xl text-black bg-none shadow-none items-start justify-end' onClick={() => closeModal(false)}> X </button>
        </div>
        <div className='py-8 text-center' id='title'>
          <h1 className='text-3xl'>DOer Champion</h1>
        </div>
        <div className=''>
          <p>Please embed here for minting DOer Supporter NFT!</p>
        </div>
        <div className='w-full h-12 flex justify-center items-center' id='footer'>
          <button>Mint!</button>
        </div>
      </div>
    </div>
  );
  }


function LModal({closeModal}) {
  return (
    <div className='absolute z-0 inset-0 flex justify-center items-center' id='modalBackground'>
      <div className='md:w-1/2 md:h-auto sm:w-3/4 sm:h-auto flex-column bg-purple-600 rounded-xl shadow-lg shadow-gray-400' id='modalContainer'>
        <div className='w-full h-8 flex justify-end'>
          <button className='px-4 py-2 text-2xl text-black bg-none shadow-none items-start justify-end' onClick={() => closeModal(false)}> X </button>
        </div>
        <div className='py-8 text-center' id='title'>
          <h1 className='text-3xl'>DOer Legend</h1>
        </div>
        <div className=''>
          <p>Please embed here for minting DOer Supporter NFT!</p>
        </div>
        <div className='w-full h-12 flex justify-center items-center' id='footer'>
          <button>Mint!</button>
        </div>
      </div>
    </div>
  );
}

export { SModal, CModal, LModal }
