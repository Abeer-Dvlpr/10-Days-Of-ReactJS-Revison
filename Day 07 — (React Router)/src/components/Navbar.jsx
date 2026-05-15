import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const getLinkClass = ({ isActive }) => {
        return isActive
            ? "bg-blue-600 rounded-md font-bold text-white px-4 py-2"
            : "text-gray-700 px-4 py-2 hover:bg-gray-100 hover:text-blue-600 rounded-md transition-all duration-300";
    };
    
    return (
        <nav className="bg-white shadow-md px-4 py-3 flex items-center justify-between">
            <NavLink to="/" className="text-xl font-bold text-blue-600">
                MyLogo
            </NavLink>
            <div className="flex space-x-2">
                <NavLink to="/" className={getLinkClass} end>
                    Home
                </NavLink>
                <NavLink to="/about" className={getLinkClass}>
                    About
                </NavLink>
                <NavLink to="/dashboard" className={getLinkClass}>
                    Dashboard
                </NavLink>
                <NavLink to="/user" className={getLinkClass}>
                    User
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar