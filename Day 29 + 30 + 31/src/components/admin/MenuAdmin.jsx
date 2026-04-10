import React, { useState } from 'react';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import { BiCategoryAlt } from 'react-icons/bi';
import { FaCaretSquareDown, FaCaretSquareUp } from 'react-icons/fa';
import { FaChromecast, FaLocationDot, FaUsers, FaUserSecret } from 'react-icons/fa6';
import { GrUserManager } from 'react-icons/gr';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { MdCategory, MdDashboard, MdLocalMovies, MdOutlineAttachMoney, MdOutlinePriceChange, MdPreview } from 'react-icons/md';
import Logo from "../../assets/Logo.png";
import { LISTMENU } from '../../utils/Contants';
import { Link } from 'react-router-dom';
function MenuAdmin(props) {
    const [show, setShow] = useState(null);

    const [Menu, setmMenu] = useState(false);
    return (
        <div className={`flex flex-col p-3 bg-blue-600/20 text-white md:h-screen transition-all duration-500 ease-in-out ${Menu ? "md:w-23" : "md:w-51"}`}>
            <div className="flex justify-center items-center relative">
                {!Menu ? <div className='flex justify-center items-center gap-1'>
                    <h1 className='text-blue-500 text-2xl font-bold'>FIMO</h1>
                    <h1 className='text-pink-500 text-2xl font-bold'>Admin</h1>
                </div> : <img src={Logo} alt="" className="w-20 h-10" />}
                <button onClick={() => setmMenu(!Menu)} className='text-white text-xl right-0 flex justify-center items-center w-8 h-8  cursor-pointer absolute md:-right-3 md:translate-x-1/2 border-2 bg-black/50 rounded-full' >{!Menu ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}</button>
            </div>
            <ul className={`flex flex-col gap-3 mt-3 ${Menu ? "max-md:hidden" : ""}`}>
                    <Link to={"/"} className='flex items-center text-2xl  justify-between gap-2 p-2 rounded-md bg-gray-800'>
                        {Menu ? <MdDashboard className='text-2xl' /> : <div className="text-xl flex items-center gap-2"> <MdDashboard /> <p>Dashboard</p></div>}
                    </Link>
                {
                    LISTMENU.map((item, index) => (
                        <li className='flex flex-col gap-2 relative'>

                            <div className='flex items-center text-2xl justify-between gap-2 p-2 rounded-md bg-gray-800'>

                                {Menu ? item.icon : <div className="flex items-center gap-2 text-xl">
                                    {item.icon}
                                    <p>{item.name}</p>
                                </div>}
                                <button onClick={() => setShow(show ? null : index + 1)}
                                    className='hover:scale-150 text-xl duration-300 hover:text-yellow-400  cursor-pointer'>

                                    {show === (index + 1) ? <FaCaretSquareUp /> : <FaCaretSquareDown />}
                                </button>
                            </div>
                            {show === (index + 1) && (
                                <div className={`flex flex-col gap-2 ml-auto ${Menu ? "items-stretch absolute -right-3 translate-x-full" : "w-[85%]"}`}>
                                    {item.subMenu.map((sub) => (
                                        <Link to={sub.path} className='p-2 rounded-md bg-gray-800 text-nowrap'>
                                            {sub.title}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </li>
                    ))
                }

            </ul>
        </div>


    );
}

export default MenuAdmin;