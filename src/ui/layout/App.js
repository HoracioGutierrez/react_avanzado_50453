import React,{useReducer,useEffect} from 'react'
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import {autoLogin} from "../../api/actions"
import Modal from '../componentes/Modal'
import {Provider} from "../../api/contexto"
import {useDispatch} from "react-redux"

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

    const [estado,dispatch] = useReducer(reducer,init)
    //const [id] = useState(estado.id)
    const dispatchRedux = useDispatch()

    useEffect(()=>{
    
        autoLogin(dispatchRedux)
        
    },[])
    
    const {id} = estado
    //const id = estado.id

    //const id = "test"

    
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