import {Route,Redirect} from "react-router-dom"
import {connect,useSelector} from "react-redux"
//import {getStore} from "./elarchivo.js"

export const RutaPublica = ({children,path,...props}) => {
    
    const islogged = useSelector((store)=>store.Cuenta.login.islogged)

    //const store = getStore()

    if(!islogged){
        return (
            <Route path={path} {...props}>
                {children}
            </Route>
        )
    }else{
        return <Redirect to="/cuenta"/>
    }
}

export const RutaPrivada = ({children,path,...props}) => {
    const islogged = useSelector((store)=>store.Cuenta.login.islogged)
    if(islogged){
        return (
            <Route path={path} {...props}>
                {children}
            </Route>
        )
    }else{
        return <Redirect to="/login"/>
    }
}