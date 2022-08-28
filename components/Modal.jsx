import React from "react";

function SModal({ closeModal }) {
  return (
    <>
      <div className="fixed z-50 inset-0 bg-purple-700 opacity-80" />
      <div
        className="fixed z-50 inset-0 flex justify-center items-center"
        id="modalBackground"
      >
        <div
          className="w-3/4 md:w-1/2 flex-column bg-purple-900 rounded-xl shadow-lg shadow-gray-400 pb-10"
          id="modalContainer"
        >
          <div className="w-full h-8 flex justify-end">
            <button
              className="px-4 py-4 text-2xl hover:bg items-start justify-end"
              onClick={() => closeModal(false)}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="white"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
              </svg>
            </button>
          </div>
          <div className="">
            <iframe
              className="mx-auto"
              src="https://gateway.ipfscdn.io/ipfs/Qma5FgmS9s3hkQrURfG4XDnh5Dxp9Fx9ZjBYkPFUNdQwfi/edition-drop.html?contract=0xCa6F66b0B920e69C128a2176e61D284E5c09Cbce&chainId=80001&tokenId=1&theme=dark&primaryColor=purple&secondaryColor=red"
              width="320"
              height="600"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

function CModal({ closeModal }) {
  return (
    <>
      <div className="fixed z-50 inset-0 bg-purple-700 opacity-80" />
      <div
        className="fixed z-50 inset-0 flex justify-center items-center"
        id="modalBackground"
      >
        <div
          className="w-3/4 md:w-1/2 flex-column bg-purple-900 rounded-xl shadow-lg shadow-gray-400 pb-10"
          id="modalContainer"
        >
          <div className="w-full h-8 flex justify-end">
            <button
              className="px-4 py-4 text-2xl hover:bg items-start justify-end"
              onClick={() => closeModal(false)}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="white"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
              </svg>
            </button>
          </div>
          <div className="py-8 text-center" id="title">
            <h1 className="text-3xl">DOER Champion</h1>
          </div>
          <div className="">{/* Embed HERE */}</div>
          <div
            className="w-full h-12 flex justify-center items-center"
            id="footer"
          >
            <button
              className="bg-purple-500 text-white rounded-md px-8 py-2 mt-2 text-base font-bold hover:bg-purple-200 active:bg-purple-300 uppercase"
              onClick={() => closeModal(false)}
            >
              Mint
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function LModal({ closeModal }) {
  return (
    <>
      <div className="fixed z-50 inset-0 bg-purple-700 opacity-80" />
      <div
        className="fixed z-50 inset-0 flex justify-center items-center"
        id="modalBackground"
      >
        <div
          className="w-3/4 md:w-1/2 flex-column bg-purple-900 rounded-xl shadow-lg shadow-gray-400 pb-10"
          id="modalContainer"
        >
          <div className="w-full h-8 flex justify-end">
            <button
              className="px-4 py-4 text-2xl hover:bg items-start justify-end"
              onClick={() => closeModal(false)}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="white"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
              </svg>
            </button>
          </div>
          <div className="py-8 text-center" id="title">
            <h1 className="text-3xl">DOER Legend</h1>
          </div>
          <div className="">{/* Embed HERE */}</div>
          <div
            className="w-full h-12 flex justify-center items-center"
            id="footer"
          >
            <button
              className="bg-purple-500 text-white rounded-md px-8 py-2 mt-2 text-base font-bold hover:bg-purple-200 active:bg-purple-300 uppercase"
              onClick={() => closeModal(false)}
            >
              Mint
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export { SModal, CModal, LModal };
