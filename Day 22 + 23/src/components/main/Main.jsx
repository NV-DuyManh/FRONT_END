import React from 'react';
import { LIST_PRODUCTS } from '../../utils/contants';

function Main(props) {
    return (
        <div className='w-full p-8 mx-auto'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {LIST_PRODUCTS.map((p, index) => (
                    <div className='flex relative flex-col justify-center items-center gap-3 border-2 border-orange-700 rounded-lg p-4 shadow-lg  hover:scale-105 duration-200 hover:border-green-700 '>
                        <p className='absolute top-2 left-4 bg-red-500 w-8 h-8 text-center items-center text-lg flex justify-center text-white font-bold rounded-full'>{p.id}</p>
                        <img src={p.image} className='w-full h-48 object-contain' alt="" />
                        <p className='font-bold text-lg'>{p.name}</p>
                        <p className='text-xl font-bold text-purple-700'>{p.price} $</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Main;