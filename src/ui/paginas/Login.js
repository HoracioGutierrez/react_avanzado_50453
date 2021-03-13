import React from 'react'
import Seccion from "../componentes/Seccion"
import {loginChange,loginSubmit} from "../../api/actions"
import {useSelector,useDispatch} from "react-redux"

const Login = () => {

    const email = useSelector((store)=>store.Cuenta.login.email)
    const password = useSelector((store)=>store.Cuenta.login.password)
    const dispatch = useDispatch()

    return (
        <Seccion titulo="Login">
            <div>
                <input id="email" type="email" placeholder="Email" value={email} onChange={e=>loginChange(e.target.id,e.target.value,dispatch)}/>
            </div>
            <div>
                <input id="password" type="password" placeholder="Contraseña" value={password} onChange={e=>loginChange(e.target.id,e.target.value,dispatch)}/>
            </div>
            <button onClick={()=>loginSubmit(email,password,dispatch)}>Login</button>
        </Seccion>
    )
}

export default Login