import React from 'react'
import Seccion from "../componentes/Seccion"
import {connect} from "react-redux"

const Cuenta = ({nuevo_producto}) => {

    const {titulo,precio,stock} = nuevo_producto

    return (
        <Seccion titulo="Cuenta" tituloSection="producto-formulario">
            <h3>Carga de Productos</h3>
            <div>
                <input type="text" placeholder="Titulo" value={titulo}/>
            </div>
            <div>
                <input type="number" placeholder="Precio" value={precio}/>
            </div>
            <div>
                <input type="stock" placeholder="Stock" value={stock}/>
            </div>
            <button>Agregar</button>
        </Seccion>
    )
}

const mapStateToProps = (store) => {
    return {
        nuevo_producto : store.Productos.nuevo_producto
    }
}

export default connect(mapStateToProps)(Cuenta)
