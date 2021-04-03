import React,{useState,useReducer,useEffect} from 'react'
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import {connect,useDispatch} from "react-redux"
import {autoLogin} from "../../api/actions"
import Modal from '../componentes/Modal'
import {Provider} from "../../api/contexto"

const init = {
    id : 1
}

const reducer = (estadoPrevio,action) => {
    switch(action.type){
        case "ID_CAMBIA" : 
            return {
                ...estadoPrevio,
                id : action.id
            }
    }
}




const App = () => {

    //const [id,setId] = useState(0)

    const [estado,dispatch] = useReducer(reducer,init)
    const dispatchRedux = useDispatch()

    //useEffect : Le permite a un componente hacer un efecto secundario. Por defecto, se van a ejectuar SIEMPRE despues de cada render
    //La funcion del efecto se va a ejecutar inmediatamente despues del retorno por cada ejecucion de la funcion Componente App. Simil componentDidMount + componentDidUpdate
    /* useEffect(()=>{
            console.log("Efecto Secundario")
        })
    */

    //La funcion del efecto se va a ejecutar inmediatamente despues del PRIMER retorno y NUNCA mas. Simil componentDidMount. Se fija en el segundo parametro que es un array de dependencias
    useEffect(()=>{
    
        //console.log("Efecto Secundario")
        autoLogin(dispatchRedux)
        
    },[])
    
    const {id} = estado

    
    

    const setId = () => {
        dispatch({type:"ID_CAMBIA",id:5})
    }
    


    return(
        <>
            <Provider value={{ id : id , setId : setId}}>
                <Modal id={id}/>
                <Header/>
                <Main setId={setId}/>
                <Footer/>
            </Provider>
        </>
    )
}

export default App