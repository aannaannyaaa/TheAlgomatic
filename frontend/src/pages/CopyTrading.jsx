import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

import bg1 from '../assets/bg-1.png';
import bg2 from '../assets/bg-2.png';

const CopyTrading = () => {
    return (
        <div className="min-h-screen bg-gray-100 relative">
            <svg className='rotate-180' width="100%" height="100" viewBox="0 0 200 100" preserveAspectRatio="none">
                <path d="M0,60 Q20,0 50,30 Q80,60 100,30 Q120,0 150,30 Q180,60 200,30 L200,100 L0,100 Z" fill="#ff6a88" />
            </svg>
            
            <img src={bg1} alt="Background Image" className="absolute top-0 left-0 w-full h-full object-cover opacity-30" />
            <img src={bg2} alt="Background Image" className="absolute top-20 right-0 max-w-full h-full object-cover opacity-30" />

            <header className="mb-6 z-10 relative">
                <h1 className="text-6xl font-bold text-center text-white">Copy Trading</h1>
                <p className="text-center text-white mb-4">Follow and copy the trades of successful investors.</p>
            </header>

            <div className="flex justify-center mb-6">
                <div className="relative w-1/2">
                    <input
                        type="text"
                        placeholder="Search for traders..."
                        className="w-full p-3 pl-10 rounded-xl bg-white shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-3 text-gray-400" />
                </div>
            </div>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10 relative">
                {Array.from({ length: 6 }, (_, i) => (
                    <div key={i} className="bg-white rounded-lg shadow-md p-5 transition-transform transform hover:scale-105">
                        <div className="flex items-center mb-4">
                            <FontAwesomeIcon icon={faUser} className="text-blue-500 text-3xl mr-3" />
                            <h2 className="text-xl font-semibold text-gray-800">Trader Name {i + 1}</h2>
                        </div>
                        <p className="text-gray-600 mb-4">Success Rate: {75 + (i * 5)}%</p>
                        <p className="text-gray-600 mb-4">Total Trades: {120 + (i * 10)}</p>
                        <p className="text-gray-600 mb-4">Profit: ${3000 + (i * 1000)}</p>
                        <button className="w-full py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600">
                            Copy Trades
                        </button>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default CopyTrading;
