import * as React from 'react';
import { createContext, useContext, useState } from 'react';

const stateContext = createContext();


export const StateProvider = ({ children }) => {
    const [popUp, setPopup] = useState(false);

    const handlePopup = () => {
        setPopup(!popUp);
    }

    return (
        <stateContext.Provider value={{ handlePopup }}>
            {children}
        </stateContext.Provider>
    );
};

export const useStateValue = () => useContext(stateContext);