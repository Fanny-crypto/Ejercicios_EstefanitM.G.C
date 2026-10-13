import PagePersonas from "../componentes/PagePersonas";

export class GestorPersonas {
  constructor(listaPersonas) {
    this.personas = [...listaPersonas];
  }

  //Operacion 1: Obtener Datos
  obtenerDatos() {
    return this.personas;
  }

  //operacion 2: Filtrar datos
  filtrarPorCarrera(carrera) {
    return this.personas.filter((persona) => persona.carrera === carrera);
  }

  //obtner promedio edad
  ObtenerEdadPromedio() {
    if (this.personas.length === 0) return 0;
    const total = this.personas.reduce(
      (acumulador, person) => acumulador + person.edad,
      0,
    );

    return (total / this.personas.length).toFixed(1);
  }
}
