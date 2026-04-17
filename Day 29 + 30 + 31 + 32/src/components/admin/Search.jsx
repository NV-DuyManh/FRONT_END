import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { IoIosAddCircle, IoIosAddCircleOutline, IoMdAddCircle } from 'react-icons/io';
function Search({ handleClickOpen, name }) {

    return (
        <div className='grid lg:grid-cols-8 gap-3 p-4 bg-black/20 text-white'>
            <h1 className='font-bold text-3xl glow-text lg:col-span-2 '>
                List {name}
            </h1>

            <div className="search lg:col-span-4">
                <input
                    type="text"
                    placeholder="Search categories..."
                    className="search-input"
                />

                <BsSearch className="search-icon" />
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