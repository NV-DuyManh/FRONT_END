import { Box, Modal, Typography } from '@mui/material';
import React from 'react';
import { FaSearch } from 'react-icons/fa';

function Search({ handleOpen }) {
    return (
        <div className='flex justify-between items-center p-5'>
            <h1 className='font-bold'>List Type Chairs</h1>
            <div className='flex justify-center items-center gap-4 relative'>
                <FaSearch className='absolute right-3'/>
                <input className='border-2 border-gray-200 rounded-2xl w-80 p-1' type="text" placeholder='Search by Name' />
            </div>
            <button onClick={handleOpen} className='bg-blue-600 p-2 rounded-2xl text-white'>ADD TYPE CHAIR</button>
        </div>

    );
}

export default Search;