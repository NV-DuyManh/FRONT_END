import React, { createContext, useEffect, useState } from 'react';
import { fetchDocumentsRealtime } from '../services/firebaseService';

export const AuthorContext = createContext();

function AuthorProvider({ children }) {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        const unsubcribe = fetchDocumentsRealtime("Author", (authorList) => {
            setAuthors(authorList);
        });
        return () => unsubcribe();
    }, []);

    return (
        <AuthorContext.Provider value={authors}>
            {children}
        </AuthorContext.Provider>
    );
}

export default AuthorProvider;