import React, { useEffect, useState, useMemo , useCallback } from "react";
import Lista from "./Lista";

//Simulan datos de una api
const usuariosIniciales = [
  { id: 1, nombre: "Horacio" },
  { id: 2, nombre: "Juan" }
];

const App = () => {
  //Guardo los datos para poder reaccionar a los cambios que les hagamos
  const [usuarios, setUsuarios] = useState(usuariosIniciales);
  const [valor, setValor] = useState("");
  const [busqueda, setBusqueda] = useState("");
  //const [filtrados,setFiltrados] = useState(usuarios.filter(usuario=>usuario.nombre.includes(busqueda)))

  useEffect(() => {
    console.log("Render App");
  });

  const cambiarValorDelInput = e => {
    setValor(e.target.value);
  };

  const agregarUsuarioConClick = () => {
    const nuevoUsuario = {
      id: Math.random(),
      nombre: valor
    };

    setUsuarios([...usuarios, nuevoUsuario]);
    setValor("");
  };

  //useMemo : Es un hook que memoriza valores computados
  //useMemo(()=>{ return ? },[])
  //useMemo(()=>?,[])

  const usuariosFiltrados = useMemo(
      () => usuarios.filter(usuario => usuario.nombre.includes(busqueda))
      ,[usuarios,busqueda]
    )

  const actualizarBusqueda = () => {
    setBusqueda(valor)
  }

  //useCallback : Es un hook que memoriza funciones
  //useCallback(()=>{},[])

  const borrarUsuario = useCallback((id) => {
    setUsuarios(usuarios.filter(usuario=>usuario.id==id?false:true))
  },[usuarios])

  /* const borrarUsuario = (id) => {
    setUsuarios(usuarios.filter(usuario=>usuario.id==id?false:true))
  } */
  
  return (
    <div>
      <input value={valor} onChange={cambiarValorDelInput} />
      <button onClick={actualizarBusqueda}>buscar</button>
      <button onClick={agregarUsuarioConClick}>agregar</button>
      <Lista usuarios={usuariosFiltrados} borrarUsuario={borrarUsuario}/>
    </div>
  );
};

export default App;
