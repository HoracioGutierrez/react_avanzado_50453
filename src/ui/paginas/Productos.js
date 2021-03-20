import React from 'react'
import Seccion from '../componentes/Seccion'
import {connect} from "react-redux"
import { Link, withRouter } from 'react-router-dom'
import {pedirProductos,borrarProducto,openModal,toggleFormulario} from "../../api/actions"
import Loader from '../componentes/Loader'

class Productos extends React.Component {

    componentDidMount(){
        this.props.pedirProductos()
    }

    manejarEdicion = (id) => {
        this.props.toggleFormulario(id)
        this.props.history.push("/cuenta")
    }

    render(){
        const {productos_general,pedido_productos,borrar_producto} = this.props
        return (
            <Seccion titulo="Productos" tituloSection="producto-listado">
                <Loader loading={pedido_productos.pending} texto="Cargando Productos..."/>
                <Loader loading={borrar_producto.pending} texto="Borrando Producto..."/>
                {productos_general.map(producto=>(
                    <article key={producto.id} className="producto-card">
                        <div>
                            <header>
                                <h3>{producto.titulo} - ${producto.precio}</h3>
                            </header>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis ex at non suscipit, dolor enim?</p>
                            <footer>
                                <Link to={`/productos/${producto.id}`}>ver mas...</Link>
                                <button onClick={()=>this.manejarEdicion(producto.id)}>editar</button>
                                <button onClick={()=>{ 
                                    this.props.setId(producto.id)
                                    this.props.openModal("Esta seguro que quiere borrar este producto? ") 
                                }}>Borrar</button>
                            </footer>
                        </div>
                    </article>
                ))}
            </Seccion>
        )
    }
}

const mapStateToProps = store => ({
    productos_general : store.Productos.productos_general,
    pedido_productos : store.Productos.pedido_productos,
    borrar_producto : store.Productos.borrar_producto
})

const mapDispatchToProps = { pedirProductos , borrarProducto , openModal , toggleFormulario }

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Productos))
