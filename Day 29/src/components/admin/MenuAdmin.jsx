import React from 'react';
import { BiCategoryAlt } from 'react-icons/bi';
import { FaChromecast, FaLocationDot } from 'react-icons/fa6';
import { GrUserManager } from 'react-icons/gr';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { MdDashboard } from 'react-icons/md';

function MenuAdmin(props) {
    
    return (
        <div className="flex flex-col p-3 bg-black text-white h-screen">
            <div className="title flex justify-around items-center min-w-40">
                <div className="name flex justify-center items-center gap-1">
                    <h1 className='text-blue-500'>FIMO</h1>
                    <h1 className='text-pink-500'>Admin</h1>
                </div>
                <IoMdCloseCircleOutline className='text-green-500 size-5' />
            </div>
            <ul className='flex flex-col gap-3 mt-3'>
                <li className='flex items-center gap-2 p-2 rounded-md bg-gray-800'>
                    <MdDashboard />
                    Dashboard
                </li>
                <li className='flex items-center gap-2 p-2 rounded-md bg-gray-800'>
                    <BiCategoryAlt />
                    Categories
                </li>
                <li className='flex items-center gap-2 p-2 rounded-md bg-gray-800'>
                    <GrUserManager />
                    UserManager
                </li>
                <li className='flex flex-col gap-2'>
                    <div className='flex items-center gap-2 p-2 rounded-md bg-gray-800 '>
                        <FaLocationDot />
                        <p>Location</p>
                    </div>

                    <div className='flex flex-col gap-2  items-end'>
                        <li className='p-2 rounded-md bg-gray-800 w-[80%]'>
                            Cities
                        </li>
                        <li className='p-2 rounded-md bg-gray-800 w-[80%]'>
                            Cities
                        </li>
                        <li className='p-2 rounded-md bg-gray-800 w-[80%]'>
                            Cities
                        </li>
                    </div>
                </li>
                <li className='flex items-center gap-2 p-2 bg-gray-800'>
                    <FaChromecast />
                    Cast and Crew</li>
            </ul>
        </div>



    );
}

export default MenuAdmin;