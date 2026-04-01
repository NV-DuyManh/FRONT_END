import { Box, Modal, Typography } from '@mui/material';
import React from 'react';
import { FaSearch } from 'react-icons/fa';

function Search({ handleOpen, type, name, onchangSearch }) {
    return (
        <div className='flex justify-between items-center p-5'>
            <h1 className='font-bold'>LIST {type}</h1>
            <div className='flex justify-center items-center gap-4 relative'>
                <FaSearch  className='absolute right-3'/>
                <input onChange={onchangSearch} className='border-2 border-gray-200 rounded-2xl w-80 px-2 py-1' type="text" placeholder='Search by Name' />
            </div>
            <button onClick={handleOpen} className='bg-blue-600 p-2 rounded-2xl text-white'>ADD {name}</button>
        </div>

    );
}

export default Search;