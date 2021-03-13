import React from 'react'

const Loader = ({loading}) => {
    if(loading){
        return (
            <div>Cargando Productos...</div>
        )
    }else{
        return null
    }
}

export default Loader
