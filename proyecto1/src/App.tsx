import { useEffect, useState } from "react";

function App() {

  //iniciamos con un estado para un arreglo
  const[elementos,setElementos]=useState([]);

  //crear función para agregar datos
  const agregarDato=()=>{
    const nuevoNumero=Math.floor(Math.random()*50);
    setElementos([...elementos,nuevoNumero]);
  };

  //Metodo para recorrer el arreglo
  const recorrerArreglo=(elementos,index)=>(
    <li key={index} style={{margin: '5px 0' ,
      fontSize:'18px'}}>
        Elemento #{index+1}:<strong>{elementos}</strong>
      </li>
  )

  //Hook de efecto
  useEffect(()=>{
console.log("El arreglo actual del dato es: ",elementos)
  },[elementos])

  return (
    <>
    <h1> Mi primer arreglo yes</h1>
    <div style={{padding: ' 20px '}}>
      <h2>Paso 1. Agregar datos al Arreglo</h2>
      <button on onClick={agregarDato}>agregar datos aleatorios</button>
      <ul>
        {/* Si el arreglo esta vacio enviar un mensaje */}

        {elementos.length===0 ? (
          <>
          <p>Aún no hay elementos en el Arreglo</p>
          <p>Presione el boton de agregar Datos</p>
          </>
        ):elementos.map(recorrerArreglo)}

      </ul>
    </div>
    </>
  )
}

export default App
