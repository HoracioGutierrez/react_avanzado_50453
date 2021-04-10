import React, { useEffect, memo } from "react";

const Item = ({ usuario , borrarUsuario }) => {

  useEffect(() => {
    console.log("Render Item", usuario.nombre);
  })

  const manejarClick = (id) => {
    borrarUsuario(id)
  }

  return (
        <li>
            {usuario.nombre}
            <button onClick={()=>manejarClick(usuario.id)}>borrar</button>
        </li>
    )
};

export default memo(Item);
