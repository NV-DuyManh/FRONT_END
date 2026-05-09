import React, { createContext, useEffect, useState } from 'react';
import { fetchDocumentsRealtime } from '../services/firebaseService';

export const CategoryTypeContext = createContext();

function CategoryTypeProvider({ children }) {
    const [categoryTypes, setCategoryTypes] = useState([]);

    useEffect(() => {
        const unsubscribe = fetchDocumentsRealtime("CategoryTypes", (data) => {
            setCategoryTypes(data);
        });
        
        return () => unsubscribe();
    }, []);

    return (
        <CategoryTypeContext.Provider value={categoryTypes}>
            {children}
        </CategoryTypeContext.Provider>
    );
}

export default CategoryTypeProvider;