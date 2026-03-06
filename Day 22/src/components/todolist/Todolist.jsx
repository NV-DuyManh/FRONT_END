import React, { useState } from 'react';
import { FaLightbulb } from 'react-icons/fa';

function Todolist(props) {

    const [count, setCount] = useState(0);
    const [status,setStatus] = useState(false);
    return (
        <div>
            <h1 className=' flex justify-center items-center'>To Do List</h1>
            <h1 className='flex justify-center gap-2 items-center text-2xl'>{count} <FaLightbulb className={status ? 'text-yellow-500' : ""} /></h1> 
            <div className='flex justify-center gap-2 text-white'>
                <button onClick={() => setCount(count - 1)} className='bg-green-700 p-3'>--</button>
                <button onClick={() => setCount(count + 1)} className='bg-green-700 p-3'>++</button>
                <button onClick={() => setStatus(!status)} className='bg-green-700 p-3'>{status ? "Close" : "Open"}</button>
            </div>
        </div>
    );
}

export default Todolist;