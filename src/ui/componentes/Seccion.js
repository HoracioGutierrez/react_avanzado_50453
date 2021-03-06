import React from 'react'

const Seccion = ({titulo,tituloSection,children}) => {
    return (
        <>
            <header>
                <h2>{titulo}</h2>
            </header>
            <section id={tituloSection}>
                {children}
            </section>
        </>
    )
}

export default Seccion
