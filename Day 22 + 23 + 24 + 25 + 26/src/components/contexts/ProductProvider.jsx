import React, { createContext, useEffect, useState } from 'react';
import { CategoriesContext } from './CategoryProvider';
import axios from 'axios';

export const ProductContext = createContext();

function ProductProvider({children}) {
    const [update, setUpdate] = useState(false);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getData();
    }, [update]);

    const getData = async () => {
        const reponsive = await axios.get("https://69bcc9b32bc2a25b22ac5d1c.mockapi.io/Product");
        setProducts(reponsive.data);
    }
    const handleUpdate = () => setUpdate(!update);
    return (
        <ProductContext.Provider value={{products, setProducts, handleUpdate}}>
            {children}
        </ProductContext.Provider>
    );
}

export default ProductProvider;