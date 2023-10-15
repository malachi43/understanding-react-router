import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar" >
            {/* "isActive" parameter is passed  by "react-router-dom" */}
            <NavLink
                to="/about"
            >About</NavLink>

            <NavLink
                to="/"
            >Home</NavLink>

            <NavLink
                to="/products"
            >Products</NavLink>

            <NavLink
                to="/login"
            >Login</NavLink>
        </nav>
    )
}
