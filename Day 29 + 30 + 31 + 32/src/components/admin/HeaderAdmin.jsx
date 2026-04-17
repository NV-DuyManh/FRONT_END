import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaUserCircle } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { IoIosNotifications } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';

function HeaderAdmin() {
    return (
        <>
            <div className='p-4 bg-blue-400/20'>
                <div className='flex justify-between items-center text-gray-200  ml-4 mr-4'>
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