import React, { createContext, useEffect, useState } from 'react';
import { fetchDocumentsRealtime } from '../services/firebaseService';

export const ActorContext = createContext();
function ActorProvider({ children }) {
    const [actors, setActors] = useState([]);

    useEffect(() => {
        const unsubcribe = fetchDocumentsRealtime("Actor", (actorList) => {
            setActors(actorList);
        });
        return () => unsubcribe();
    }, []);

    return (
        <ActorContext.Provider value={actors}>
            {children}
        </ActorContext.Provider>
    );
}

export default ActorProvider;