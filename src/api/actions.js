export const pedirProductos = () => {
    return (dispatch) => {

        dispatch({type:"PEDIR_PRODUCTOS_PEDING"})
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

export const loginChange = (propiedad,valor,dispatch) => {
    dispatch({type:"LOGIN_CHANGE",propiedad,valor})
}


export const loginSubmit = (email,password,dispatch) => {

    dispatch({type:"LOGIN_PENDING"})
    fetch("http://localhost:4000/usuarios/1")
    .then(res=>res.json())
    .then(res=>{
        if(res.email == email && res.password == password){
            dispatch({type:"LOGIN_SUCCESS"})
            localStorage.setItem("usuario",email)
            localStorage.setItem("islogged",1)
        }else{
            dispatch({type:"LOGIN_ERROR"})    
        }
    })
    .catch(err=>{
        dispatch({type:"LOGIN_ERROR",err})
    })
}



export const autoLogin = () => {
    const storage_logged = Number(localStorage.getItem("islogged"))
    const logged = Boolean(storage_logged)
    if(logged){
        return ({type:"AUTOLOGIN_SUCCESS"})
    }else{
        return ({type:"AUTOLOGIN_ERROR"})
    }
}


export const logout = () => dispatch => {
    setTimeout(()=>{
        localStorage.setItem("islogged","0")
        dispatch({type:"LOGOUT"})
    },1000)
}



export const nuevoProductoChange = (propiedad,valor,dispatch) => {
    dispatch({type:"NUEVO_PRODUCTO_CHANGE",propiedad,valor})
}


export const nuevoProductoSubmit = (titulo,precio,stock,dispatch) => {

    dispatch({type:"NUEVO_PRODUCTO_PENDING"})
    fetch("http://localhost:4000/productos",{
        method : "POST",
        headers : {"content-type":"application/json"},
        body : JSON.stringify({titulo,precio,stock})
    })
    .then(res=>res.json())
    .then(res=>{
        dispatch({type:"NUEVO_PRODUCTO_SUCCESS",res})
    })
    .catch(err=>{
        dispatch({type:"NUEVO_PRODUCTO_ERROR",err})
    })
}