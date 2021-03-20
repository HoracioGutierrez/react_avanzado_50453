import React from 'react'
import {Switch,Route} from "react-router-dom"
import Home from "../paginas/Home"
import Productos from "../paginas/Productos"
import Cuenta from "../paginas/Cuenta"
import Carrito from "../paginas/Carrito"
import Login from "../paginas/Login"
import { RutaPrivada, RutaPublica } from '../componentes/CustomRoutes'
import Logout from '../paginas/Logout'

const Main = ({setId}) => {
    return (
        <main>
            <Switch>

                <Route path="/" exact>
                    <Home/>
                </Route>

                <Route path="/productos">
                    <Productos setId={setId}/>
                </Route>

                <Route path="/carrito">
                    <Carrito/>
                </Route>

                {/* <Route path="/cuenta">
                    <Cuenta/>
                </Route> */}

                <RutaPrivada path="/cuenta" logged={false}>
                    <Cuenta/>
                </RutaPrivada>
            
                <RutaPublica path="/login" logged={false}>
                    <Login/>
                </RutaPublica>

                <RutaPrivada path="/logout" logged={false}>
                    <Logout/>
                </RutaPrivada>

            </Switch>
        </main>
    )
}

export default Main
