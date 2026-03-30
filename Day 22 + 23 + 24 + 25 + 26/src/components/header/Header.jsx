import React from 'react';
import { LIST_MENU } from '../../utils/contants';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div className='text-white p-3 justify-between text-center bg-black flex'>
            <div className="logo">
                <img className='anh w-20' src="https://img.pikbest.com/png-images/20241025/fearless-hawk-head-mascot-logo-_11003287.png!sw800" alt="" />
            </div>
            <div className="list flex justify-between gap-5 items-center ">
                {LIST_MENU.map((p, index) => (
                    <Link key={index} className='text-white no-underline hover:!text-yellow-200 fs-4' to={p.path}>{p.title}</Link>
                ))}
            </div>
            <div className="button flex justify-between gap-5 items-center">
                <button className='bg-gray-500 hover:bg-green-700 hover:text-red-600 fw-bold py-2 px-10 rounded-full fs-5'>Login</button>
            </div>
        </div>
    );
}

export default Header;