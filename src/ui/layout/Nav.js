import React from 'react'
import {NavLink} from "react-router-dom"
import {useSelector} from "react-redux"

const Nav = () => {

    const islogged = useSelector((store)=>store.Cuenta.login.islogged)

    return (
        <nav>
            <NavLink to="/productos">productos</NavLink>
            {islogged && <NavLink to="/carrito">carrito</NavLink>}
            {islogged && <NavLink to="/cuenta">cuenta</NavLink>}
            {!islogged && <NavLink to="/login">login</NavLink>}
            {islogged && <NavLink to="/logout">logout</NavLink>}
        </nav>
    )
}

export default Nav