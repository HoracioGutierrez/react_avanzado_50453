import React from 'react'
import Nav from "./Nav"
import {NavLink} from "react-router-dom"

const Header = () => {
    return (
        <header>
            <NavLink to="/" exact>
                <h1>Mi Pagina</h1>
            </NavLink>
            <Nav/>
        </header>
    )
}

export default Header
