import {useState} from 'react'

export default function Ejemplo2() {

    const [alumnos, setAlumnos] = useState([{id:1,nombre:"Juan",asistencia:1}])
  const [nuevoNombre, setNuevoNombre] = useState("");

  // Estado para saber a quién estamos editando
  const [editandoId, setEditandoId] = useState(null);
  const [nombreEditado, setNombreEditado] = useState("");

  //Crear primera funciòn
  const agregarAlumno=(e)=>{
    e.preventDefault();
    if(nuevoNombre.trim()==="") return;

    const nuevoAlumno={
        id:Date.now(),
        nombre:nuevoNombre.trim(),
        asistencia:0
    }

    //Introducir valores al arreglo
    setAlumnos([...alumnos,nuevoAlumno]);
    setNuevoNombre("");
    console.log(alumnos);
  }

  //Eliminar objeto
  const eliminarAlumno=(id)=>{
    const listaFilter=alumnos.filter((alumno)=>alumno.id !== id);
    setAlumnos(listaFilter);
  }
  //sumar asistencia
  const sumarAsistencia = (id) => {
    const listaActualizada = alumnos.map((alumno) =>
      alumno.id === id
        ? { ...alumno, asistencia: alumno.asistencia + 1 }
        : alumno
    );
    setAlumnos(listaActualizada);
  }

  //restar asistencia
  const restarAsistencia = (id) => {
    const listaActualizada = alumnos.map((alumno) =>
      alumno.id === id
        ? { ...alumno, asistencia: Math.max(0, alumno.asistencia - 1) }
        : alumno
    );
    setAlumnos(listaActualizada);
  };

  //editar alumnos
  const iniciarEdicion = (alumno) => {
    setEditandoId(alumno.id);
    setNombreEditado(alumno.nombre);
  }

  //guardar lo editado
  const guardarEdicion = (id) => {
    if (nombreEditado.trim() === "") return;

    const listaActualizada = alumnos.map((alumno) =>
      alumno.id === id
        ? { ...alumno, nombre: nombreEditado.trim() }
        : alumno
    );
    setAlumnos(listaActualizada);
    setEditandoId(null);  
    setNombreEditado("");
  }

   //cancelar la edición
  const cancelarEdicion = () => {
    setEditandoId(null);
    setNombreEditado("");
  }

    return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h1>Operaciones con arreglos</h1>

      {/* Formulario para agregar */}
      <form onSubmit={agregarAlumno} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={nuevoNombre}
          onChange={(e) => setNuevoNombre(e.target.value)}
          placeholder="Ingresa un nombre"
          style={{ padding: "8px 12px", marginRight: "10px", width: "60%" }}
        />
        <button
          type="submit"
          style={{ padding: "8px 12px", background: "#4CAF50", color: "white", border: "none", cursor: "pointer" }}
        >
          Agregar
        </button>
      </form>

      {/* Lista de alumnos */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {alumnos.length === 0 ? (
          <p style={{ color: "#999", textAlign: "center" }}>
            No hay datos que mostrar
          </p>
        ) : (
          alumnos.map((alumno) => (
            <div
              key={alumno.id}
              style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "4px", display: "flex", justifyContent: "space-between", alignItems: "center" }}
            >
              <div>
                {editandoId === alumno.id ? (
                  // Modo edición: input para cambiar el nombre
                  <input
                    type="text"
                    value={nombreEditado}
                    onChange={(e) => setNombreEditado(e.target.value)}
                    style={{ padding: "6px 10px" }}
                  />
                ) : (
                  <strong>{alumno.nombre}</strong>
                )}
                <br />
                <span style={{ fontSize: "12px", color: "#666" }}>
                  Asistencias: {alumno.asistencia}
                </span>
              </div>

              {/* Botones de acción */}
              <div style={{ display: "flex", gap: "6px" }}>
                {editandoId === alumno.id ? (
                  <>
                    <button
                      onClick={() => guardarEdicion(alumno.id)}
                      style={{ padding: "6px 10px", background: "#4CAF50", color: "white", border: "none", cursor: "pointer" }}
                    >
                      Guardar
                    </button>
                    <button
                      onClick={cancelarEdicion}
                      style={{ padding: "6px 10px", background: "#9e9e9e", color: "white", border: "none", cursor: "pointer" }}
                    >
                      Cancelar
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => sumarAsistencia(alumno.id)}
                      style={{ padding: "6px 10px", background: "#2196F3", color: "white", border: "none", cursor: "pointer" }}
                    >
                      +1
                    </button>
                    <button
                      onClick={() => restarAsistencia(alumno.id)}
                      style={{ padding: "6px 10px", background: "#FF9800", color: "white", border: "none", cursor: "pointer" }}
                    >
                      -1
                    </button>
                    <button
                      onClick={() => iniciarEdicion(alumno)}
                      style={{ padding: "6px 10px", background: "#673AB7", color: "white", border: "none", cursor: "pointer" }}
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => eliminarAlumno(alumno.id)}
                      style={{ padding: "6px 10px", background: "#f44336", color: "white", border: "none", cursor: "pointer" }}
                    >
                      Eliminar
                    </button>
                  </>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}


