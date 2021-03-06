export const pedirProductos = () => {
    return (dispatch) => {
        fetch("http://localhost:4000/productos")
        .then(res=>res.json())
        .then(productos=>{
            dispatch({type:"PEDIR_PRODUCTOS_SUCCESS",productos})
        })
        .catch(err=>{
            dispatch({type:"PEDIR_PRODUCTOS_ERROR",err})
        })
    }
}