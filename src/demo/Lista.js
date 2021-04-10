import React, { useEffect, memo } from "react";
import Item from "./Item";

//Antes el componente reaccionaba si el prop era distinto o si su padre se volvia a dibujar. Como App se vuelve a dibujar entonces Lista tambien.

//Memorizar Componente : El componente nunca se va a volver a ejecutar SALVO que sus props cambien de valor

const Lista = ({ usuarios , borrarUsuario }) => {
  useEffect(() => {
    console.log("Render Lista");
  });

  return (
    <ul>
      {usuarios.map(usuario => (
        <Item key={usuario.id} usuario={usuario} borrarUsuario={borrarUsuario}/>
      ))}
    </ul>
  );
};

const ListaMemorizada = memo(Lista);

export default ListaMemorizada;
