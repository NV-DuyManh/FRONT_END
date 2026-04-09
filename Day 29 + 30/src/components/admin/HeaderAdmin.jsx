import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaUserCircle } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { IoIosNotifications } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';

function HeaderAdmin() {
    return (
        <>
            <style>{`
                .animated-bg {
                    background: linear-gradient(-45deg, #0f172a, #020617, #1e1b4b, #020617);
                    background-size: 500% 500%;
                    animation: gradientMove 12s ease infinite;box-shadow: inset 0 0 100px rgba(59,130,246,0.1);
                }

                @keyframes gradientMove {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }

                .glass {
                    backdrop-filter: blur(12px);
                    background: rgba(15, 23, 42, 0.6);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 14px;
                }

                .glow-text {
                    background: linear-gradient(90deg, #60a5fa, #a78bfa, #38bdf8, #22d3ee, #818cf8, #60a5fa);
                    background-size: 200% auto;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    animation: textMove 4s linear infinite;
                }

                @keyframes textMove {
                    0% { background-position: 0% center; }
                    100% { background-position: 200% center; }
                }
            `}</style>

            <div className='animated-bg p-4 '>
                <div className='flex justify-between items-center text-gray-200 shadow-xl ml-4 mr-4'>

                    <h1 className='text-3xl font-bold tracking-wide glow-text'>
                        Welcome
                    </h1>

                    <div className="flex gap-6 text-2xl">
                        <button className="hover:scale-125 hover:text-yellow-200 duration-300 cursor-pointer"><FiSearch /></button>
                        <button className="hover:scale-125 hover:text-yellow-200 duration-300 cursor-pointer"><IoIosNotifications /></button>
                        <button className="hover:scale-125 hover:text-yellow-200 duration-300 cursor-pointer"><MdEmail /> </button>
                        <button className="hover:scale-125 text-green-400 hover:text-yellow-200 duration-300 cursor-pointer"><FaUserCircle /> </button>
                    </div>

                </div>
            </div>
        </>
    );
}

export default HeaderAdmin;