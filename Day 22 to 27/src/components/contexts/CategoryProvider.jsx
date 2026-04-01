import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const CategoriesContext = createContext();

function CategoryProvider({ children }) {
    const [categories, setCategories] = useState([]);
    const [update, setUpdate] = useState(false);
    useEffect(() => {
        getData()
    }, [update]);
    const getData = async () => {
        const reponse = await axios.get("https://69bcc9b32bc2a25b22ac5d1c.mockapi.io/categories");
        setCategories(reponse.data);
    }
    const handleUpdate = () => setUpdate(!update);
    return (
        <CategoriesContext.Provider value={{ categories, setCategories, handleUpdate }}>
            {children}
        </CategoriesContext.Provider>
    );
}

export default CategoryProvider;