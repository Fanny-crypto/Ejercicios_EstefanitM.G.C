import { useState } from "react";

function Pila() {
  const [stack, setStack] = useState([]);
  const [inputValue, setInputValue] = useState("");

  //Agregar valores a la pila o arreglo
  const handlePush = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    setStack([inputValue, ...stack]);
    setInputValue("");
  };

  //Eliminar valores del arreglo pop
  const handlePop = () => {
    if (stack.length === 0) return;

    //Filtrar los elementos y eliminamos el tope de la pila
    const nuevoStack = stack.slice(1);
    setStack(nuevoStack);
  };

  const elementoTope = stack.length > 0 ? stack[0] : "La pila está vacía";
  return (
    <>
      <div
        style={{
          padding: "20px",
          fontFamily: "Arial, sans-serif",
          maxWidth: "400px",
          margin: "0 auto",
        }}
      >
        <h2>Visualizar los datos de la Pila</h2>
        {/*Inicializamos el formulario para introducir datos */}
        <form onSubmit={handlePush} style={{ marginBottom: '15px' }}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Introduce un dato"
            style={{ padding: "8px", marginRight: "10px" }}
          />
          <button
            type="submit"
            style={{ padding: "8px 12px", background: "#4CAF50" }}
          >
            Push
          </button>
        </form>
        {/*Botón para eliminar los elementos */}
        <button
          onClick={handlePop}
          disabled={stack.length === 0}
          style={{
            padding: "8px 12px",
            background: "#f44336",
            color: "white",
            border: "none",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          Eliminar
        
        </button>

        {/* Información del tope y tamaño */}
      <div style={{ marginBottom: '20px', backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '4px' }}>
        <p><strong>Tope actual:</strong> {elementoTope}</p>
        <p><strong>Tamaño de la pila:</strong> {stack.length}</p>
      </div>

      {/* Representación visual de la Pila */}
      <div style={{ border: '2px solid #333', borderTop: 'none', padding: '10px', display: 'flex', flexDirection: 'column', gap: '5px', minHeight: '150px', justifyContent: 'end' }}>
        {stack.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#999' }}>Estructura vacía</p>
        ) : (
          stack.map((item, index) => (
            <div 
              key={index} 
              style={{
                padding: '10px',
                backgroundColor: index === 0 ? '#3ba7ff' : '#2195f3', // Resalta el tope con otro color
                color: index === 0 ? '#000' : '#fff',
                textAlign: 'center',
                borderRadius: '4px',
                fontWeight: index === 0 ? 'bold' : 'normal',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              {item} {index === 0 && ' ← TOPE'}
            </div>
          ))
        )}
      </div>
      </div>
    </>
  );
}

export default Pila;

