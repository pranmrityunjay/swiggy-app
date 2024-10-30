import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const backendUrl = process.env.REACT_APP_BACKEND_URL;

    useEffect(() => {
        if (token) {
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('token');
        }
    }, [token]);

    return (
        <AppContext.Provider value={{ backendUrl, token, setToken }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;