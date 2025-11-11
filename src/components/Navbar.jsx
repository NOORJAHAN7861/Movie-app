import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">MyApp</div>
                <div className="space-x-4">
                    <a href="#" className="text-white hover:text-blue-200">Home</a>
                    <a href="#" className="text-white hover:text-blue-200">About</a>
                    <a href="#" className="text-white hover:text-blue-200">Services</a>
                    <a href="#" className="text-white hover:text-blue-200">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;