import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { useSelector } from 'react-redux';
import { AppContext } from '../context/AppContext';
import useOnlineStatus from '../hooks/useOnlineStatus';
import logoImage from './logo1.png';

const Header = () => {
    const isOnline = useOnlineStatus();
    const cartItems = useSelector((store) => store.cart.items);
    const navigate = useNavigate();
    const { token, setToken } = useContext(AppContext) || {};

    const logout = () => {
        localStorage.removeItem('token');
        setToken('');
        navigate('/login');
    };

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        }
    }, [setToken]);

    return (
        <header className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-700 to-indigo-600 shadow-lg">
            <div className="flex items-center">
                <img className="w-16 h-16 rounded-full shadow-md" src={logoImage} alt="Logo" />
                <span className="text-white text-3xl font-bold ml-3">FoodieHub</span>
            </div>
            <nav className="flex-1">
                <ul className="flex justify-center space-x-8 text-white text-lg font-semibold">
                    <li className="flex items-center">
                        <span className={`text-sm ${isOnline ? 'text-green-300' : 'text-red-300'}`}>
                            {isOnline ? "Online" : "Offline"}
                        </span>
                    </li>
                    <li className="hover:text-yellow-300 transition duration-300 ease-in-out">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="hover:text-yellow-300 transition duration-300 ease-in-out">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="hover:text-yellow-300 transition duration-300 ease-in-out">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="hover:text-yellow-300 transition duration-300 ease-in-out">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="font-bold hover:text-yellow-300 transition duration-300 ease-in-out">
                        <Link to="/cart">Cart ({cartItems.length})</Link>
                    </li>
                </ul>
            </nav>
            <div>
                {token ? (
                    <button 
                        onClick={logout} 
                        className='bg-red-700 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out shadow-md'
                    >
                        Logout
                    </button>
                ) : (
                    <button 
                        onClick={() => navigate('/login')} 
                        className='bg-yellow-500 hover:bg-yellow-400 text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out shadow-md'
                    >
                        Login
                    </button>
                )}
            </div>
        </header>
    );
};

export default Header;
