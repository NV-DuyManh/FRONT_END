import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { IoIosAddCircle, IoIosAddCircleOutline, IoMdAddCircle } from 'react-icons/io';

function Search({ handleClickOpen }) {

    return (
        <div className='grid lg:grid-cols-8 gap-3 p-4 bg-black text-white'>
            <h1 className='font-bold text-3xl glow-text lg:col-span-2 '>
                List Categories
            </h1>

            <div className='relative  lg:col-span-4 '>
                <input
                    type="text"
                    placeholder='Search categories...'
                    className='w-full pl-4 pr-10 py-2 rounded-lg bg-zinc-900  border border-zinc-700 text-sm  placeholder-gray-400 focus:outline-none focus:border-gray-400 ' />
                <BsSearch className='absolute hover:text-green-600 hover:scale-110 duration-200 right-3 top-1/2 -translate-y-1/2 text-2xl cursor-pointer' />
            </div>
            <div className="lg:col-span-2  flex justify-end">
                <button onClick={handleClickOpen} className=' py-2 px-4 rounded-2xl flex  items-center gap-2 hover:bg-green-500 cursor-pointer hover:text-red-700 hover:scale-125 duration-300 bg-amber-400 text-blue-500'>
                    ADD      <IoMdAddCircle className='text-xl' />
                </button>
            </div>
        </div>
    );
}

export default Search;