import React, { createContext, useEffect, useState } from 'react';
import { fetchDocumentsRealtime } from '../services/firebaseService';

export const CategoriesContext = createContext();
function CategoryProvider({children}) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const unsubcribe = fetchDocumentsRealtime("Categories", (categoriesList) => {
            setCategories(categoriesList);
        });
        return () => unsubcribe();
    }, []);
   
    return (
        <CategoriesContext.Provider value={categories}>
            {children}
        </CategoriesContext.Provider>
    );
}

export default CategoryProvider;