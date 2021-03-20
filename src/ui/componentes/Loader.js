import React from 'react'

const Loader = ({loading,texto}) => {
    if(loading){
        return (
            <div>{texto}</div>
        )
    }else{
        return null
    }
}

export default Loader
