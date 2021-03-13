import React from 'react'
import Seccion from "../componentes/Seccion"
import {useSelector,useDispatch} from "react-redux"
import {nuevoProductoChange,nuevoProductoSubmit} from "../../api/actions"

const Cuenta = () => {

    const nuevo_producto = useSelector((store)=>store.Productos.nuevo_producto)
    const dispatch = useDispatch()
    const {titulo,precio,stock} = nuevo_producto

    return (
        <Seccion titulo="Cuenta" tituloSection="producto-formulario">
            <h3>Carga de Productos</h3>
            <div>
                <input type="text" placeholder="Titulo" value={titulo} id="titulo" onChange={e=>nuevoProductoChange(e.target.id,e.target.value,dispatch)}/>
            </div>
            <div>
                <input type="number" placeholder="Precio" value={precio} id="precio" onChange={e=>nuevoProductoChange(e.target.id,e.target.value,dispatch)}/>
            </div>
            <div>
                <input type="stock" placeholder="Stock" value={stock} id="stock" onChange={e=>nuevoProductoChange(e.target.id,e.target.value,dispatch)}/>
            </div>
            <button onClick={()=>nuevoProductoSubmit(titulo,precio,stock,dispatch)}>Agregar</button>
        </Seccion>
    )
}

export default Cuenta