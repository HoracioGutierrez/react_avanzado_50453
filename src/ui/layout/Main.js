import React from 'react'
import {Switch,Route} from "react-router-dom"
import Home from "../paginas/Home"
import Productos from "../paginas/Productos"
import Cuenta from "../paginas/Cuenta"
import Carrito from "../paginas/Carrito"

const Main = () => {
    return (
        <main>
            <Switch>

                <Route path="/" exact>
                    <Home/>
                </Route>

                <Route path="/productos">
                    <Productos/>
                </Route>

                <Route path="/carrito">
                    <Carrito/>
                </Route>

                <Route path="/cuenta">
                    <Cuenta/>
                </Route>

            </Switch>
        </main>
    )
}

export default Main
