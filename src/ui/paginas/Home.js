import React , {useContext,useEffect} from 'react'
import Seccion from "../componentes/Seccion"
//import {Consumer} from "../../api/contexto"
import contexto from "../../api/contexto"

const Home = () => {

    const {id,setId} = useContext(contexto)

    //componentWillUnmount : Es un metodo de ciclo de vida que se ejecuta justo antes que el componente se desmonte(se borre de pantalla)

    useEffect(()=>{
        
        //const ws = io.connect()

        const id = setInterval(()=>{
            console.log("Intervalo de pedido")
        },1000)

        //Esta funcion de retorno se ejecuta justo antes que el componente se desmonte. Simil componentWillUnmount
        return ()=>{
            console.log("Unmount")
            clearInterval(id)
        }

    },[])

    return (
        <Seccion titulo="Home">
            <p>Bienvenido</p>
            <p>Contexto ID : {id}</p>
            <button onClick={()=>setId(5)}>cambiar id</button>
        </Seccion>
    )
}

export default Home
