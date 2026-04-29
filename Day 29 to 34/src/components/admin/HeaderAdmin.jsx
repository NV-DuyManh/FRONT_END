import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { IoIosNotifications } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';

function HeaderAdmin() {
    return (
        <>
            <div className='p-4 bg-blue-400/20'>
                <div className='flex justify-between items-center text-gray-200 mx-4'>
                    <h1 className='text-3xl font-bold tracking-wide glow-text2'>
                        Welcome
                    </h1>

                    <div className="flex items-center gap-8 text-2xl">
                        
                        <button className="text-cyan-400 cursor-pointer drop-shadow-[0_0_4px_rgba(34,211,238,0.6)] transition-all duration-300 hover:-translate-y-1 hover:scale-125 hover:text-cyan-300 hover:drop-shadow-[0_0_15px_rgba(34,211,238,1)]">
                            <FiSearch />
                        </button>

                        <button className="text-yellow-400 cursor-pointer  drop-shadow-[0_0_4px_rgba(250,204,21,0.6)] transition-all duration-300 hover:-translate-y-1 hover:scale-125 hover:text-yellow-300 hover:drop-shadow-[0_0_15px_rgba(250,204,21,1)]">
                            <IoIosNotifications />
                        </button>

                        <button className="text-purple-400 cursor-pointer  drop-shadow-[0_0_4px_rgba(192,132,252,0.6)] transition-all duration-300 hover:-translate-y-1 hover:scale-125 hover:text-purple-300 hover:drop-shadow-[0_0_15px_rgba(192,132,252,1)]">
                            <MdEmail />
                        </button>

                        <button className="text-green-400 cursor-pointer  drop-shadow-[0_0_4px_rgba(74,222,128,0.6)] transition-all duration-300 hover:-translate-y-1 hover:scale-125 hover:text-green-300 hover:drop-shadow-[0_0_15px_rgba(74,222,128,1)]">
                            <FaUserCircle />
                        </button>

                    </div>
                </div>
            </div>
        </>
    );
}

export default HeaderAdmin;