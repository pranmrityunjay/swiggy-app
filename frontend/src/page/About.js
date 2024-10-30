import React from 'react';

const About = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-4xl font-bold text-center mb-6 text-indigo-600">About This App</h1>
            <p className="text-lg mb-4 text-gray-700">
                Welcome to our application! This app is designed to provide users with a seamless experience in exploring various restaurants and their offerings. 
                You can browse through an extensive list of restaurants, view their menus, and even book your orders with just a few clicks. Our goal is to make dining 
                easier and more enjoyable for everyone.
            </p>
            <h2 className="text-2xl font-semibold text-indigo-600 mt-6 mb-4">Features</h2>
            <ul className="list-disc list-inside mb-4">
                <li className="text-lg text-gray-700">Browse a wide range of restaurants</li>
                <li className="text-lg text-gray-700">View menus and special offers</li>
                <li className="text-lg text-gray-700">Easily book orders and manage your cart</li>
                <li className="text-lg text-gray-700">Check your online status and connectivity</li>
                <li className="text-lg text-gray-700">Contact customer support for assistance</li>
            </ul>
            <h2 className="text-2xl font-semibold text-indigo-600 mt-6 mb-4">Contact Information</h2>
            <p className="text-lg text-gray-700 mb-2">If you have any questions or feedback, feel free to reach out:</p>
            <p className="text-lg text-gray-700"><strong>Email:</strong> pranmrityunjay@gmail.com</p>
            <p className="text-lg text-gray-700"><strong>Address:</strong> Your Contact Address Here</p>
        </div>
    );
};

export default About;
