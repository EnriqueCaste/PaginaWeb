function mostrarEstadisticas(jugadorId) {
  const panel = document.getElementById("panelEstadisticas");
  const contenido = document.getElementById("contenidoEstadisticas");

   if (jugadorId === "Alexis") {
    contenido.innerHTML = `
      <h3>Alexis</h3>
      <p>Edad: 26</p>
      <p>Partidos: 8</p>
      <p>Goles: 0</p>
      <p>Asistencias: 1</p>
      <p>Porterias a Cero : 3</p>
      <p>Amarillas: 0</p>
      <p>Rojas: 0</p>

    `;
  }else if (jugadorId === "LuisK") {
    contenido.innerHTML = `
      <h3>LuisK</h3>
      <p>Edad: 23</p>
      <p>Partidos: 18</p>
      <p>Goles: 1</p>
      <p>Asistencias: 1</p>
      <p>Amarillas: 0</p>
      <p>Rojas: 0</p>

    `;
  } else if (jugadorId === "Alvaro") {
    contenido.innerHTML = `
      <h3>Alvaro</h3>
      <p>Edad: 23</p>
      <p>Partidos: 12 </p>
      <p>Goles: 1</p>
      <p>Asistencias: 0</p>
      <p>Amarillas: 0</p>
      <p>Rojas: 0</p>

    `;
  }
 else if (jugadorId === "Isma") {
    contenido.innerHTML = `
      <h3>Isma</h3>
      <p>Edad: 23</p>
      <p>Partidos: 20</p>
      <p>Goles: 2 </p>
      <p>Asistencias: 2</p>
      <p>Amarillas: 0</p>
      <p>Rojas: 0</p>

    `;
  } else if (jugadorId === "Masuel") {
    contenido.innerHTML = `
      <h3>Masuel</h3>
      <p>Edad: 23</p>
      <p>Partidos: 22 </p>
      <p>Goles: 2 </p>
      <p>Asistencias: 3</p>
      <p>Amarillas: 0</p>
      <p>Rojas: 0</p>

    `;
  } else if (jugadorId === "Suizo") {
    contenido.innerHTML = `
      <h3>Suizo</h3>
      <p>Edad: 23</p>
      <p>Partidos: 21</p>
      <p>Goles: 22</p>
      <p>Asistencias: 5</p>
      <p>Amarillas: 3</p>
      <p>Rojas: 0</p>

    `;
  } else if (jugadorId === "Andres") {
    contenido.innerHTML = `
      <h3>Andres</h3>
      <p>Edad: 23</p>
      <p>Partidos: 17</p>
      <p>Goles: 1</p>
      <p>Asistencias: 3</p>
      <p>Amarillas: 0</p>
      <p>Rojas: 0</p>

    `;
  } else if (jugadorId === "Pacios") {
    contenido.innerHTML = `
      <h3>Pacios</h3>
      <p>Edad: 23</p>
      <p>Partidos: 19</p>
      <p>Goles: 2</p>
      <p>Asistencias: 1</p>
      <p>Amarillas: 0</p>
      <p>Rojas: 0</p>

    `;
  } else if (jugadorId === "Davila") {
    contenido.innerHTML = `
      <h3>Davila</h3>
      <p>Edad: 23</p>
      <p>Partidos: 21</p>
      <p>Goles: 1</p>
      <p>Asistencias: 1</p>
      <p>Amarillas: 0</p>
      <p>Rojas: 0</p>

    `;
  } else if (jugadorId === "kike") {
    contenido.innerHTML = `
      <h3>kike</h3>
      <p>Edad: 23</p>
      <p>Partidos: 23</p>
      <p>Goles: 7</p>
      <p>Asistencias: 10</p>
      <p>Amarillas: 0</p>
      <p>Rojas: 0</p>

    `;
  } else if (jugadorId === "Ivan") {
    contenido.innerHTML = `
      <h3>Ivan</h3>
      <p>Edad: 23</p>
      <p>Partidos: 20</p>
      <p>Goles: 0</p>
      <p>Asistencias: 1 </p>
      <p>Amarillas: 0</p>
      <p>Rojas: 0</p>

    `;
  } else if (jugadorId === "Leci") {
    contenido.innerHTML = `
      <h3>Leci</h3>
      <p>Edad: 23</p>
      <p>Partidos:1</p>
      <p>Goles: 0</p>
      <p>Asistencias: 0</p>
      <p>Amarillas: 0</p>
      <p>Rojas: 0</p>

    `;
  } else if (jugadorId === "Tommy") {
    contenido.innerHTML = `
      <h3>Tommy</h3>
      <p>Edad: 23</p>
      <p>Partidos: 14</p>
      <p>Goles: 14</p>
      <p>Asistencias: 3</p>
      <p>Amarillas: 0</p>
      <p>Rojas: 0</p>

    `;
  }

  panel.classList.add("abierto");
}

function cerrarEstadisticas() {
  document.getElementById("panelEstadisticas").classList.remove("abierto");
}