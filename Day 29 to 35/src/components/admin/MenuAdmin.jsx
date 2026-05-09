import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import { FaCaretSquareDown, FaCaretSquareUp } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import Logo from "../../assets/Logo.png";
import { LISTMENU } from '../../utils/Contants';

function MenuAdmin() {
    const [show, setShow] = useState(null);
    const [Menu, setmMenu] = useState(false);
    const location = useLocation();

    const activePath = location.pathname;

    useEffect(() => {
        LISTMENU.forEach((item, index) => {
            const isSubActive = item.subMenu.some(sub => sub.path === activePath);
            if (isSubActive) {
                setShow(index + 1);
            }
        });
    }, [activePath]);

    return (
        <div className={`flex flex-col p-3 bg-[#0a192f]/80 text-white sm:min-h-screen transition-all duration-500 ease-in-out relative shadow-[2px_0_15px_rgba(0,0,0,0.5)] shrink-0 ${Menu ? "sm:w-20" : "sm:w-60"}`}>
            
            <div className="flex justify-center items-center relative h-8 mb-4 mt-2 shrink-0">
                {!Menu ? (
                    <div className='flex justify-center items-center gap-1 whitespace-nowrap overflow-hidden transition-all duration-300 w-full'>
                        <h1 className='text-cyan-400 text-2xl font-extrabold tracking-widest drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]'>FIMO</h1>
                        <h1 className='text-pink-500 text-2xl font-extrabold tracking-widest drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]'>Admin</h1>
                    </div>
                ) : (
                    <img src={Logo} alt="Logo" className="w-full h-10 object-contain transition-all duration-300 px-1" />
                )}

                <button 
                    onClick={() => setmMenu(!Menu)} 
                    className='absolute right-0 sm:-right-3 sm:translate-x-1/2 flex justify-center items-center w-9 h-9 cursor-pointer rounded-full bg-[#0f172a]/20 border border-cyan-400 text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)] hover:bg-cyan-400 hover:text-[#0f172a] hover:shadow-[0_0_20px_rgba(34,211,238,0.9),inset_0_0_5px_rgba(255,255,255,0.4)] hover:scale-110 transition-all duration-300 z-50'
                >
                    {!Menu ? <AiOutlineMenuFold size={20} /> : <AiOutlineMenuUnfold size={20} />}
                </button>
            </div>

            <ul className={`flex flex-col gap-3 mt-3 ${Menu ? "max-sm:hidden" : ""}`}>
                <li>
                    <Link to={"/"} className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 group border border-transparent 
                        ${activePath === "/" 
                            ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-400 shadow-[inset_4px_0_0_0_#22d3ee,0_0_15px_rgba(34,211,238,0.1)]" 
                            : "bg-slate-800/90 text-gray-300 hover:bg-slate-700 hover:border-cyan-500/30 hover:text-cyan-400"} 
                        ${Menu ? "sm:justify-center px-0" : "justify-start"}`}>
                        <MdDashboard className={`text-xl shrink-0 transition-transform duration-300 group-hover:scale-110 ${activePath === "/" ? "drop-shadow-[0_0_5px_#22d3ee]" : ""}`} />
                        <p className={`text-base font-medium whitespace-nowrap overflow-hidden tracking-wide transition-all duration-300 ${Menu ? "max-sm:block sm:hidden sm:w-0" : "block sm:w-36"}`}>
                            Dashboard
                        </p>
                    </Link>
                </li>

                {LISTMENU.map((item, index) => {
                    const isOpen = show === (index + 1);
                    const isParentActive = item.subMenu.some(sub => sub.path === activePath);

                    return (
                        <li key={index} className='flex flex-col relative group'>
                            <div 
                                onClick={() => setShow(isOpen ? null : (index + 1))}
                                className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer transition-all duration-300 border border-transparent
                                ${isParentActive 
                                    ? "bg-cyan-600/10 border-cyan-500/30 text-cyan-400 shadow-[inset_4px_0_0_0_#22d3ee]" 
                                    : "bg-slate-800/90 text-gray-200 hover:bg-slate-700 hover:border-yellow-500/30 hover:text-yellow-400"}
                                ${Menu ? "sm:justify-center px-0" : ""}`}
                            >
                                <div className="flex items-center gap-3 overflow-hidden">
                                    <span className={`text-xl shrink-0 transition-transform duration-300 group-hover:scale-110 ${isParentActive ? "text-cyan-400 drop-shadow-[0_0_5px_#22d3ee]" : ""}`}>{item.icon}</span>
                                    <p className={`text-base font-medium whitespace-nowrap overflow-hidden tracking-wide transition-all duration-300 ${Menu ? "max-sm:block sm:hidden sm:w-0" : "block sm:w-32"}`}>
                                        {item.name}
                                    </p>
                                </div>
                                
                                <span className={`text-lg transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180" : "rotate-0"} ${isParentActive ? "text-cyan-400" : "text-gray-400"} ${Menu ? "max-sm:block sm:hidden" : "block"}`}>
                                    {isOpen ? <FaCaretSquareUp /> : <FaCaretSquareDown />}
                                </span>
                            </div>

                            {Menu ? (
                                <div className="hidden group-hover:sm:block absolute top-0 left-full z-50">
                                    <div className="absolute left-0 top-0 bottom-0 w-2 bg-transparent"></div>

                                    <div className="w-48 ml-2 bg-[#0f172a] border border-slate-700 rounded-lg shadow-2xl overflow-hidden relative">
                                        <div className="flex flex-col p-2">
                                            <div className="px-3 py-2 mb-1 text-[11px] font-bold text-gray-400 uppercase tracking-widest border-b border-slate-700">
                                                {item.name}
                                            </div>
                                            {item.subMenu.map((sub, idx) => (
                                                <Link key={idx} to={sub.path} className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 whitespace-nowrap
                                                    ${activePath === sub.path 
                                                        ? "bg-yellow-500/20 text-yellow-400 shadow-[inset_3px_0_0_0_#eab308]" 
                                                        : "text-gray-300 hover:bg-slate-800 hover:text-cyan-400 hover:pl-4"}`}>
                                                    {sub.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] mt-2" : "grid-rows-[0fr] mt-0"}`}>
                                    <div className="overflow-hidden">
                                        <div className={`flex flex-col gap-1 w-[85%] ml-auto border-l-2 pl-3 py-1 ${isParentActive ? "border-cyan-500/50" : "border-slate-700"}`}>
                                            {item.subMenu.map((sub, idx) => (
                                                <Link key={idx} to={sub.path} className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 text-nowrap
                                                    ${activePath === sub.path 
                                                        ? "bg-yellow-500/20 text-yellow-400 shadow-[inset_3px_0_0_0_#eab308] translate-x-1" 
                                                        : "text-gray-400 hover:bg-slate-800 hover:text-yellow-300 hover:translate-x-1"}`}>
                                                    {sub.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default MenuAdmin;