const initialState = {
    productos_general : [],
    nuevo_producto : {
        titulo : "",
        precio : 0,
        stock : 1
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "PEDIR_PRODUCTOS_SUCCESS" : 
            return {
                ...state,
                productos_general : action.productos
            }
        default:
            return state
    }
}
