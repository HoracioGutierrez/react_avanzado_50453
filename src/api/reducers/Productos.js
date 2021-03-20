const initialState = {
    productos_general : [],
    formulario_editar : {
        editar : false,
        id : 0
    },
    pedido_productos : {
        pending : false,
        error : false
    },
    nuevo_producto : {
        titulo : "",
        precio : 0,
        stock : 1,
        pending : false,
        error : false
    },
    borrar_producto : {
        pending : false,
        error : false
    }
}

export default (state = initialState, action) => {
    switch (action.type) {

        case "FORMULARIO_EDITAR" : 

            const producto = state.productos_general.filter(producto=>producto.id===action.id)[0]

            return {
                ...state,
                formulario_editar : {
                    editar : true,
                    id : action.id
                },
                nuevo_producto : {
                    ...state.nuevo_producto,
                    titulo : producto.titulo,
                    precio : producto.precio,
                    stock : producto.stock,
                }
            }

        case "BORRAR_PRODUCTO_PENDING" : 
            return {
                ...state,
                borrar_producto : {
                    ...state.borrar_producto,
                    pending : true
                }
            }
        
        case "BORRAR_PRODUCTO_SUCCESS" : 
            return {
                ...state,
                borrar_producto : {
                    ...state.borrar_producto,
                    pending : false
                },
                productos_general : state.productos_general.filter((producto)=>producto.id!==action.id?true:false)
            }

        case "BORRAR_PRODUCTO_ERROR" : 
            return {
                ...state,
                borrar_producto : {
                    ...state.borrar_producto,
                    pending : false
                }
            }

        case "NUEVO_PRODUCTO_PENDING" :
            return {
                ...state,
                nuevo_producto : {
                    ...state.nuevo_producto,
                    pending : true
                }
            }

        case "NUEVO_PRODUCTO_SUCCESS" :
            return {
                ...state,
                nuevo_producto : {
                    ...state.nuevo_producto,
                    pending : false
                },
                productos_general : [
                    ...state.productos_general,
                    action.res
                ]
            }

        case "NUEVO_PRODUCTO_ERROR" :
            return {
                ...state,
                nuevo_producto : {
                    ...state.nuevo_producto,
                    pending : false,
                    error : action.err
                }
            }

        case "NUEVO_PRODUCTO_CHANGE" : 
            return {
                ...state,
                nuevo_producto : {
                    ...state.nuevo_producto,
                    [action.propiedad] : action.valor
                }
            }

        case "PEDIR_PRODUCTOS_ERROR" :
            return {
                ...state,
                pedido_productos : {
                    error : action.err,
                    pending : false
                }
            }

        case "PEDIR_PRODUCTOS_PEDING" : 
            return {
                ...state,
                pedido_productos : {
                    ...state.pedido_productos,
                    pending : true
                }
            }

        case "PEDIR_PRODUCTOS_SUCCESS" : 
            return {
                ...state,
                productos_general : action.productos,
                pedido_productos : {
                    ...state.pedido_productos,
                    pending : false
                }
            }
            
        default:
            return state
    }
}
