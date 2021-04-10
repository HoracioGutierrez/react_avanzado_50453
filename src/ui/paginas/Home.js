import React , {useContext,useEffect} from 'react'
import Seccion from "../componentes/Seccion"
import contexto from "../../api/contexto"

const Home = () => {

    const {id,setId} = useContext(contexto)

    return (
        <Seccion titulo="Home">
            <p>Bienvenido</p>
            <p>Contexto ID : {id}</p>
            <button onClick={()=>setId(5)}>cambiar id</button>
        </Seccion>
    )
}

export default Home
