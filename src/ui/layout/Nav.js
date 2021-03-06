import React from 'react'
import {NavLink} from "react-router-dom"

const Nav = () => {
    return (
        <nav>
            <NavLink to="/productos">productos</NavLink>
            <NavLink to="/carrito">carrito</NavLink>
            <NavLink to="/cuenta">cuenta</NavLink>
        </nav>
    )
}

export default Nav
