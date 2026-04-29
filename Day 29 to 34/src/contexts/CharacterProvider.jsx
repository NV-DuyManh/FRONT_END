import React, { createContext, useEffect, useState } from 'react';
import { fetchDocumentsRealtime } from '../services/firebaseService';

export const CharacterContext = createContext();

function CharacterProvider({ children }) {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const unsubcribe = fetchDocumentsRealtime("Character", (characterList) => {
            setCharacters(characterList);
        });
        return () => unsubcribe();
    }, []);

    return (
        <CharacterContext.Provider value={characters}>
            {children}
        </CharacterContext.Provider>
    );
}

export default CharacterProvider;