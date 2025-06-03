function mostrarEstadisticas(jugadorId) {
  const panel = document.getElementById("panelEstadisticas");
  const contenido = document.getElementById("contenidoEstadisticas");

   if (jugadorId === "Alexis") {
    contenido.innerHTML = `
      <div>
        <div>
          <span class="numero">1</span>
          <span class="name">Alexis</span>
          <div>
            <p>Portero</p>
          </div>
        </div>

        <div class="estadisticas-caja">
          <div><strong>8 </strong><span>Partidos jugados</span></div>
          <div><strong>1 </strong><span>Asistencias</span></div>
          <div><strong>3 </strong><span>Porterías a cero</span></div>
        </div>

        <div class="estadisticas-caja" style="margin-top: 1rem;">
          <div><strong>0 </strong><span>Amarillas</span></div>
          <div><strong>0 </strong><span>Rojas</span></div>
        </div>
      </div>
      `


  }else if (jugadorId === "LuisK") {
    contenido.innerHTML = `
    <div>
        <div>
          <span class="numero">5</span>
          <span class="name">LuisK</span>
          <div>
            <p>Defensa</p>
          </div>
        </div>

        <div class="estadisticas-caja">
          <div><strong>18 </strong><span>Partidos jugados</span></div>
          <div><strong>1 </strong><span>Goles</span></div>
          <div><strong>1 </strong><span>Asistencias</span></div>
        </div>

        <div class="estadisticas-caja">
          <div><strong>0 </strong><span>Amarillas</span></div>
          <div><strong>0 </strong><span>Rojas</span></div>
        </div>
      </div>
      `
      
    
  } else if (jugadorId === "Alvaro") {
    contenido.innerHTML = `
        <div>
        <div>
          <span class="numero">9</span>
          <span class="name">Alvaro</span>
          <div>
            <p>Defensa</p>
          </div>
        </div>

        <div class="estadisticas-caja">
          <div><strong>12 </strong><span>Partidos jugados</span></div>
          <div><strong>1 </strong><span>Goles</span></div>
          <div><strong>0 </strong><span>Asistencias</span></div>
        </div>

        <div class="estadisticas-caja">
          <div><strong>0 </strong><span>Amarillas</span></div>
          <div><strong>0 </strong><span>Rojas</span></div>
        </div>
      </div>
      `
  
  }
 else if (jugadorId === "Isma") {
    contenido.innerHTML = `
     <div>
        <div>
          <span class="numero">14</span>
          <span class="name">Isma</span>
          <div>
            <p>Defensa</p>
          </div>
        </div>

        <div class="estadisticas-caja">
          <div><strong>20 </strong><span>Partidos jugados</span></div>
          <div><strong>2 </strong><span>Goles</span></div>
          <div><strong>3 </strong><span>Asistencias</span></div>
        </div>

        <div class="estadisticas-caja"">
          <div><strong>0 </strong><span>Amarillas</span></div>
          <div><strong>0 </strong><span>Rojas</span></div>
        </div>
      </div>
      `
  
  } else if (jugadorId === "Masuel") {
    contenido.innerHTML = `

     <div>
        <div>
          <span class="numero">4</span>
          <span class="name">Masuel</span>
          <div>
            <p>Mediocentro</p>
          </div>
        </div>

        <div class="estadisticas-caja">
          <div><strong>20 </strong><span>Partidos jugados</span></div>
          <div><strong>2 </strong><span>Goles</span></div>
          <div><strong>2 </strong><span>Asistencias</span></div>
        </div>

        <div class="estadisticas-caja"">
          <div><strong>0 </strong><span>Amarillas</span></div>
          <div><strong>0 </strong><span>Rojas</span></div>
        </div>
      </div>
      `
  } else if (jugadorId === "Suizo") {
    contenido.innerHTML = `
      
     <div>
        <div>
          <span class="numero">6</span>
          <span class="name">Suizo</span>
          <div>
            <p>Mediocentro</p>
          </div>
        </div>

        <div class="estadisticas-caja">
          <div><strong>21 </strong><span>Partidos jugados</span></div>
          <div><strong>22 </strong><span>Goles</span></div>
          <div><strong>5 </strong><span>Asistencias</span></div>
        </div>

        <div class="estadisticas-caja"">
          <div><strong>3 </strong><span>Amarillas</span></div>
          <div><strong>0 </strong><span>Rojas</span></div>
        </div>
      </div>
      `
  } else if (jugadorId === "Andres") {
    contenido.innerHTML = `
  
     <div>
        <div>
          <span class="numero">8</span>
          <span class="name">Andres</span>
          <div>
            <p>Mediocentro</p>
          </div>
        </div>

        <div class="estadisticas-caja">
          <div><strong>20 </strong><span>Partidos jugados</span></div>
          <div><strong>1 </strong><span>Goles</span></div>
          <div><strong>2 </strong><span>Asistencias</span></div>
        </div>

        <div class="estadisticas-caja"">
          <div><strong>0 </strong><span>Amarillas</span></div>
          <div><strong>0 </strong><span>Rojas</span></div>
        </div>
      </div>
      `
  } else if (jugadorId === "Pacios") {
    contenido.innerHTML = `

     <div>
        <div>
          <span class="numero">10</span>
          <span class="name">Pacios</span>
          <div>
            <p>Mediocentro</p>
          </div>
        </div>

        <div class="estadisticas-caja">
          <div><strong>19 </strong><span>Partidos jugados</span></div>
          <div><strong>2 </strong><span>Goles</span></div>
          <div><strong>1 </strong><span>Asistencias</span></div>
        </div>

        <div class="estadisticas-caja"">
          <div><strong>0 </strong><span>Amarillas</span></div>
          <div><strong>0 </strong><span>Rojas</span></div>
        </div>
      </div>
      `
  } else if (jugadorId === "Davila") {
    contenido.innerHTML = `
  
     <div>
        <div>
          <span class="numero">11</span>
          <span class="name">Davila</span>
          <div>
            <p>Mediocentro</p>
          </div>
        </div>

        <div class="estadisticas-caja">
          <div><strong>21 </strong><span>Partidos jugados</span></div>
          <div><strong>1 </strong><span>Goles</span></div>
          <div><strong>1 </strong><span>Asistencias</span></div>
        </div>

        <div class="estadisticas-caja"">
          <div><strong>0 </strong><span>Amarillas</span></div>
          <div><strong>0 </strong><span>Rojas</span></div>
        </div>
      </div>
      `
  } else if (jugadorId === "Kike") {
    contenido.innerHTML = `

     <div>
        <div>
          <span class="numero">21</span>
          <span class="name">Kike</span>
          <div>
            <p>Mediocentro</p>
          </div>
        </div>

        <div class="estadisticas-caja">
          <div><strong>23 </strong><span>Partidos jugados</span></div>
          <div><strong>7 </strong><span>Goles</span></div>
          <div><strong>10 </strong><span>Asistencias</span></div>
        </div>

        <div class="estadisticas-caja"">
          <div><strong>0 </strong><span>Amarillas</span></div>
          <div><strong>0 </strong><span>Rojas</span></div>
        </div>
      </div>
      `
  } else if (jugadorId === "Ivan") {
    contenido.innerHTML = `

     <div>
        <div>
          <span class="numero">2</span>
          <span class="name">Ivan</span>
          <div>
            <p>Delantero</p>
          </div>
        </div>

        <div class="estadisticas-caja">
          <div><strong>20 </strong><span>Partidos jugados</span></div>
          <div><strong>0 </strong><span>Goles</span></div>
          <div><strong>1 </strong><span>Asistencias</span></div>
        </div>

        <div class="estadisticas-caja"">
          <div><strong>0 </strong><span>Amarillas</span></div>
          <div><strong>0 </strong><span>Rojas</span></div>
        </div>
      </div>
      `
  } else if (jugadorId === "Leci") {
    contenido.innerHTML = `

     <div>
        <div>
          <span class="numero">7</span>
          <span class="name">Leci</span>
          <div>
            <p>Delantero</p>
          </div>
        </div>

        <div class="estadisticas-caja">
          <div><strong>1 </strong><span>Partidos jugados</span></div>
          <div><strong>0 </strong><span>Goles</span></div>
          <div><strong>0 </strong><span>Asistencias</span></div>
        </div>

        <div class="estadisticas-caja"">
          <div><strong>0 </strong><span>Amarillas</span></div>
          <div><strong>0 </strong><span>Rojas</span></div>
        </div>
      </div>
      `
  } else if (jugadorId === "Tommy") {
    contenido.innerHTML = `
  
     <div>
        <div>
          <span class="numero">19</span>
          <span class="name">Tommy</span>
          <div>
            <p>Delantero</p>
          </div>
        </div>

        <div class="estadisticas-caja">
          <div><strong>14 </strong><span>Partidos jugados</span></div>
          <div><strong>14 </strong><span>Goles</span></div>
          <div><strong>3 </strong><span>Asistencias</span></div>
        </div>

        <div class="estadisticas-caja"">
          <div><strong>0 </strong><span>Amarillas</span></div>
          <div><strong>0 </strong><span>Rojas</span></div>
        </div>
      </div>
      `
  }

  panel.classList.add("abierto");
}

function cerrarEstadisticas() {
  document.getElementById("panelEstadisticas").classList.remove("abierto");
}