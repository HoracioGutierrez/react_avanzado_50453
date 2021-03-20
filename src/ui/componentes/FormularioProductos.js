import React from 'react'
import {nuevoProductoChange,nuevoProductoSubmit,editarProducto} from "../../api/actions"
import {useSelector,useDispatch} from "react-redux"


const FormularioProductos = () => {

    const nuevo_producto = useSelector((store)=>store.Productos.nuevo_producto)
    const formulario_editar = useSelector((store)=>store.Productos.formulario_editar)
    const dispatch = useDispatch()
    const {titulo,precio,stock} = nuevo_producto
    const {editar,id} = formulario_editar


    return (
        <>
         <div>
                <input type="text" placeholder="Titulo" value={titulo} id="titulo" onChange={e=>nuevoProductoChange(e.target.id,e.target.value,dispatch)}/>
            </div>
            <div>
                <input type="number" placeholder="Precio" value={precio} id="precio" onChange={e=>nuevoProductoChange(e.target.id,e.target.value,dispatch)}/>
            </div>
            <div>
                <input type="stock" placeholder="Stock" value={stock} id="stock" onChange={e=>nuevoProductoChange(e.target.id,e.target.value,dispatch)}/>
            </div>
            <button onClick={()=>editar?editarProducto(id,titulo,precio,stock,dispatch):nuevoProductoSubmit(titulo,precio,stock,dispatch)}>{editar?"Editar" : "Crear"}</button>   
        </>
    )
}

export default FormularioProductos
