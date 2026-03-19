import React, { useState } from 'react';
import { CiEdit } from 'react-icons/ci';
import { FaCheckCircle, FaLightbulb } from 'react-icons/fa';
import { RiDeleteBin6Fill } from 'react-icons/ri';

function Todolist(props) {
    const [count, setCount] = useState(0);
    const [status, setStatus] = useState(false);
    const [text, setText] = useState("");
    const [todo, setTodo] = useState([]);
    const [edit, setEdit] = useState({});
    const [indeEdit, setIndexEdit] = useState(null);

    const addTask = () => {
        const newTask = {
            title: text,
            status: false
        };
        setTodo([...todo, newTask]);
        setText("");
    }
    console.log(todo);


    const xoa = (index) => {
        const todoOld = [...todo];
        todoOld.splice(index, 1);
        setTodo(todoOld);
    }

    const editToDo = (index, element) => {
        setIndexEdit(index);
        setEdit(element);
    }

    const update = () => {
        const toDoOld = [...todo];
        toDoOld.splice(indeEdit, 1, edit);
        setTodo(toDoOld);
        setIndexEdit(null);
    }
    const Cancel = () => {
        setIndexEdit(null);
    }

    const check = (index, element) => {
        const toDoOld = [...todo];
        toDoOld.splice(index, 1, { ...element, status: true });
        setTodo(toDoOld);
    }
    return (
        <div>
            <h1 className='flex justify-center items-center font-bold mt-4 '>To Do List</h1>

            <div className="flex justify-center items-center mt-4 gap-4">
                <input value={text} onChange={(e) => setText(e.target.value)} className='border border-gray-300 h-10 rounded-full px-4' type="text" />
                <button onClick={addTask} className='bg-green-600 w-20 h-10 rounded-full hover:bg-blue-500 hover:text-white'>ADD</button>
            </div>


            <div className="w-[80vw] m-auto mt-6">
                {todo.map((element, index) => (
                    <div className="bg-black text-white rounded-md flex justify-between items-center mt-2">
                        <td className="p-3">{index + 1}</td>
                        {index == indeEdit ? <input onChange={(e) => setEdit({ ...edit, title: e.target.value })} className='text-black p-2 ' value={edit.title} type="text" /> : <td className={`p-3 fs-5 ${element.status ? "line-through" : ""}`}>{element.title} {element.status && <>(Completed)</>} </td>}
                        <td className="p-3">
                            {index == indeEdit ?
                                <>
                                    <button onClick={update} className="bg-green-500 px-3 py-1 rounded mr-2">Update</button>
                                    <button onClick={Cancel} className="bg-gray-500 px-3 py-1 rounded">Cancel</button></> :
                                <>
                                    {!element.status && <button onClick={() => check(index, element)} className="bg-green-500 px-3 py-1 rounded mr-2"><FaCheckCircle /></button>}

                                    {/* // ham nhan ve index, element */}
                                    <button onClick={() => editToDo(index, element)} className="bg-blue-500 px-3 py-1 rounded mr-2"><CiEdit /></button>
                                    <button onClick={() => xoa(index)} className="bg-red-600 px-3 py-1 rounded"><RiDeleteBin6Fill /></button>
                                </>}
                        </td>
                    </div>
                ))
                }

            </div>
            {/* <h1 className='flex justify-center gap-2 items-center text-2xl mt-10'>{count} <FaLightbulb className={status ? 'text-yellow-500' : ""} /></h1>
            <div className='flex justify-center gap-2 text-white mb-10'>
                <button onClick={() => setCount(count - 1)} className='bg-green-700 p-3 rounded'>--</button>
                <button onClick={() => setCount(count + 1)} className='bg-green-700 p-3 rounded'>++</button>
                <button onClick={() => setStatus(!status)} className='bg-green-700 p-3 rounded'>{status ? "Close" : "Open"}</button>
            </div> */}
        </div>
    );
}

export default Todolist;