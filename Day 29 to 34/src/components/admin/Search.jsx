import React, { useMemo } from 'react';
import { BsSearch } from 'react-icons/bs';
import { IoMdAddCircle } from 'react-icons/io';

function Search({ handleClickOpen, name, tuKhoa, onChangeSearch }) {


    return (
        <div className='grid lg:grid-cols-8 gap-3 p-4 bg-black/20 text-white items-center'>
            <h1 className='font-bold text-3xl glow-text lg:col-span-2 '>{name}
            </h1>

            <div className="search lg:col-span-4">
                <input
                    type="text"
                    placeholder={tuKhoa}
                    className="search-input"
                    onChange={onChangeSearch}
                />

                <BsSearch className="search-icon" />
            </div>

            <div className="lg:col-span-2 flex justify-end items-center">
                <button onClick={handleClickOpen} className="btn-add">
                    ADD <IoMdAddCircle />
                </button>
            </div>
        </div>
    );
}

export default Search;