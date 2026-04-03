import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoIosNotifications } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';

function HeaderAdmin(props) {
    return (
        <div className='flex justify-between items-center p-2'>
            <h1>Welcome</h1>
            <div className="flex gap-2">
                <FaSearch />
                <IoIosNotifications />
                <MdEmail />

            </div>

        </div>
    );
}

export default HeaderAdmin;