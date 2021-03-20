import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import {closeModal,borrarProducto} from "../../api/actions"

const Modal = ({id}) => {

    const visible = useSelector((store)=>store.App.modal.visible)
    const texto = useSelector((store)=>store.App.modal.texto)
    const dispatch = useDispatch()

    if(visible){
        return (
            <div className="modal">
                {texto}
                <button onClick={()=>{ borrarProducto(id,dispatch) }}>Aceptar</button>
                <button onClick={()=>{ closeModal(dispatch) }}>Cancelar</button>
            </div>
        )
    }else{
        return null
    }
}

export default Modal
