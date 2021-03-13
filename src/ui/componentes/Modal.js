import React from 'react'
import {useSelector} from "react-redux"

const Modal = () => {

    const visible = useSelector((store)=>store.App.modal.visible)
    const texto = useSelector((store)=>store.App.modal.texto)

    if(visible){
        return (
            <div className="modal">
                {texto}
                <button>Aceptar</button>
                <button>Cancelar</button>
            </div>
        )
    }else{
        return null
    }
}

export default Modal
