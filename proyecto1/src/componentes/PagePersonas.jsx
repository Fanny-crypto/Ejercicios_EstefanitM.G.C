import { personasData } from "../data/alumnos";
import { GestorPersonas } from "../clases/GestorPersonas";

function PagePersonas() {
  //Agregar Arreglo de Datos a la clase
  const gestorClases = new GestorPersonas(personasData);
  //Traer de la clase cada una de las operaciones o metodos
  const ObtenerTodosDatos = gestorClases.obtenerDatos();
  const filtroCarrera = gestorClases.filtrarPorCarrera();
  const promedioEdad = gestorClases.ObtenerEdadPromedio();
  return (
    <>
      <div
        style={{ padding: "30px", fontFamily: "sans-serif", maxWidth: "600px" }}
      >
        <p>
          <strong>Promedio de edad de los Estudiantes</strong>
          {promedioEdad}
        </p>
        <ul>
          <h1>Todos los Alumnos</h1>
          {ObtenerTodosDatos.map((p) => (
            <li key={p.id}>
              {p.nombre}({p.edad}años) - <em>{p.carrera}</em>
            </li>
          ))}
        </ul>
        <hr />
        <h2>Solo una carrera</h2>
        <ul style={{ color: "darkblue" }}>
          {filtroCarrera.map((p) => (
            <li key={p.id}>{p.nombre}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default PagePersonas;
