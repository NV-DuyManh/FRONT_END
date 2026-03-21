import React, { use, useEffect, useState } from 'react';
import Search from '../header/Search';
import ModalCategory from './ModalCategory';
import TableCategory from './TableCategory';
import axios from 'axios';
const inner = { name: "", description: "" };
function Categories(props) {
    const [category, setCategory] = useState(inner);
    const [open, setOpen] = useState(false);
    const [error,setError] = useState(inner);
    const handleOpen = () => {
        setOpen(true);
        setCategory(inner);
    };
    const handleClose = () => setOpen(false);
    const [update,setUpdate] = useState(false);
    // co 3 dang 
    // 1. chay lien tuc
    // 2. chay 1 lan 
    // 3. chay khi depen thay doi 
    // useEffect(() => {
    //   setCount(count + 1);
    // },[open]);

    const onchangInput = (e) => {
        setCategory({ ...category, [e.target.name]: e.target.value })
    }
     const validation = () => {
        const newError = {} ;
        newError.name = category.name ? "" : "Please inter your name" ;
        newError.description = category.description ? "" : "Please inter your description" ;
        setError(newError);
        return Object.values(newError).some(e => e != ""); // true co loi
     } 

   const addCategory = async () => {
     if(validation()) {
         return;
     }
       await axios.post("https://69bcc9b32bc2a25b22ac5d1c.mockapi.io/categories", category);
       handleClose();
       setUpdate(!update);
   }


    return (

        <div>
            <Search handleOpen={handleOpen} />
            <TableCategory update={update} />
            <ModalCategory error={error} addCategory={addCategory} onchangInput={onchangInput} category={category} open={open} handleClose={handleClose} />
        </div>
    );
}

export default Categories;