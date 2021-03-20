import React from 'react'
import Seccion from "../componentes/Seccion"
import FormularioProductos from "../componentes/FormularioProductos"

const Cuenta = () => {

    return (
        <Seccion titulo="Cuenta" tituloSection="producto-formulario">
            <h3>Carga de Productos</h3>
            <FormularioProductos />
        </Seccion>
    )
}

export default Cuenta