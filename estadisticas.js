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
            <p class ="p">Portero</p>
          </div>
        </div>

        <div class="estadisticas-caja">
          <div>8 <span>Partidos jugados</span></div>
        </div>
         <div class="estadisticas-caja">
          <div>1 <span>Asistencias</span></div>
        </div>
         <div class="estadisticas-caja">
          <div>3 <span>Porterías a cero</span></div>
        </div>

        <div class="estadisticas-caja" style="margin-top: 1rem;">
          <div>0 <span>Amarillas</span></div>
        </div>
        <div class="estadisticas-caja" style="margin-top: 1rem;">
          <div>0 <span>Rojas</span></div>
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
            <p class ="p">Defensa</p>
          </div>
        </div>

        <div class="estadisticas-caja">
          <div>18 <span>Partidos jugados</span></div>
        </div>
        <div class="estadisticas-caja">
          <div>1 <span>Goles</span></div>
        </div>
        <div class="estadisticas-caja">
          <div>1 <span>Asistencias</span></div>
        </div>
        <div class="estadisticas-caja">
          <div>0 <span>Amarillas</span></div>
        </div>
        <div class="estadisticas-caja">
          <div>0 <span>Rojas</span></div>
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
            <p class ="p">Defensa</p>
          </div>
        </div>

        <div class="estadisticas-caja">
          <div>12 <span>Partidos jugados</span></div>
        </div>
        <div class="estadisticas-caja">
          <div>1 <span>Goles</span></div>
        </div>
        <div class="estadisticas-caja">
          <div>0 <span>Asistencias</span></div>
        </div>

        <div class="estadisticas-caja">
          <div>0 <span>Amarillas</span></div>
        </div>
        <div class="estadisticas-caja">
          <div>0 <span>Rojas</span></div>
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
            <p class ="p">Defensa</p>
          </div>
        </div>

        <div class="estadisticas-caja">
          <div>20 <span>Partidos jugados</span></div>
        </div>
        <div class="estadisticas-caja">
          <div>2 <span>Goles</span></div>
        </div>
        <div class="estadisticas-caja">
          <div>3 <span>Asistencias</span></div>
        </div>

        <div class="estadisticas-caja"">
          <div>0 <span>Amarillas</span></div>
        </div>
        <div class="estadisticas-caja"">
          <div>0 <span>Rojas</span></div>
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
            <p class ="p">Centrocampista</p>
          </div>
        </div>

        <div class="estadisticas-caja">
          <div>20 <span>Partidos jugados</span></div>
        </div>
         <div class="estadisticas-caja">
          <div>2 <span>Goles</span></div>
        </div>
         <div class="estadisticas-caja">
          <div>2 <span>Asistencias</span></div>
        </div>

        <div class="estadisticas-caja"">
          <div>0 <span>Amarillas</span></div>
        </div>
        <div class="estadisticas-caja"">
          <div>0 <span>Rojas</span></div>
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
            <p class ="p">Centrocampista</p>
          </div>
        </div>

        <div class="estadisticas-caja">
          <div>21 <span>Partidos jugados</span></div>
        </div>
         <div class="estadisticas-caja">
          <div>22 <span>Goles</span></div>
        </div>
         <div class="estadisticas-caja">
          <div>5 <span>Asistencias</span></div>
        </div>

        <div class="estadisticas-caja"">
          <div>3 <span>Amarillas</span></div>
        </div>
        <div class="estadisticas-caja"">
          <div>0 <span>Rojas</span></div>
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
            <p class ="p">Centrocampista</p>
          </div>
        </div>

        <div class="estadisticas-caja">
          <div>20 <span>Partidos jugados</span></div>
        </div>
        <div class="estadisticas-caja">
          <div>1 <span>Goles</span></div>
        </div>
        <div class="estadisticas-caja">
          <div>2 <span>Asistencias</span></div>
        </div>

        <div class="estadisticas-caja"">
          <div>0 <span>Amarillas</span></div>
        </div>
        <div class="estadisticas-caja"">
          <div>0 <span>Rojas</span></div>
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
            <p class ="p">Centrocampista</p>
          </div>
        </div>

        <div class="estadisticas-caja">
          <div>19 <span>Partidos jugados</span></div>
        </div>
        <div class="estadisticas-caja">
          <div>2 <span>Goles</span></div>
        </div>
        <div class="estadisticas-caja">
          <div>1 <span>Asistencias</span></div>
        </div>

        <div class="estadisticas-caja"">
          <div>0 <span>Amarillas</span></div>
        </div>
        <div class="estadisticas-caja"">
          <div>0 <span>Rojas</span></div>
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
            <p class ="p">Centrocampista</p>
          </div>
        </div>

        <div class="estadisticas-caja">
          <div>21 <span>Partidos jugados</span></div>
        </div>
        <div class="estadisticas-caja">
          <div>1 <span>Goles</span></div>
        </div>
        <div class="estadisticas-caja">
          <div>1 <span>Asistencias</span></div>
        </div>

        <div class="estadisticas-caja"">
          <div>0 <span>Amarillas</span></div>
        </div>
        <div class="estadisticas-caja"">
          <div>0 <span>Rojas</span></div>
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
            <p class ="p">Centrocampista</p>
          </div>
        </div>

        <div class="estadisticas-caja">
          <div>23 <span>Partidos jugados</span></div>
        </div>
        <div class="estadisticas-caja">
          <div>7 <span>Goles</span></div>
        </div>
          <div class="estadisticas-caja">
          <div>10 <span>Asistencias</span></div>
        </div>
        <div class="estadisticas-caja"">
          <div>0 <span>Amarillas</span></div>
        </div>
        <div class="estadisticas-caja"">
          <div>0 <span>Rojas</span></div>
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
            <p class ="p">Delantero</p>
          </div>
        </div>

        <div class="estadisticas-caja">
          <div>20 <span>Partidos jugados</span></div>
        </div>
        <div class="estadisticas-caja">
          <div>0 <span>Goles</span></div>
        </div>
        <div class="estadisticas-caja">
          <div>1 <span>Asistencias</span></div>
        </div>

        <div class="estadisticas-caja"">
          <div>0 <span>Amarillas</span></div>
        </div>
        <div class="estadisticas-caja"">
          <div>0 <span>Rojas</span></div>
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
            <p class ="p">Delantero</p>
          </div>
        </div>

        <div class="estadisticas-caja">
          <div>1 <span>Partidos jugados</span></div>
        </div>
        <div class="estadisticas-caja">
          <div>0 <span>Goles</span></div>
        </div>
        <div class="estadisticas-caja">
          <div>0 <span>Asistencias</span></div>
        </div>

        <div class="estadisticas-caja"">
          <div>0 <span>Amarillas</span></div>
        </div>
        <div class="estadisticas-caja"">
          <div>0 <span>Rojas</span></div>
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
            <p class ="p">Delantero</p>
          </div>
        </div>

        <div class="estadisticas-caja">
          <div>14 <span>Partidos jugados</span></div>
        </div>
        <div class="estadisticas-caja">
          <div>14 <span>Goles</span></div>
        </div>
        <div class="estadisticas-caja">
          <div>3 <span>Asistencias</span></div>
        </div>

        <div class="estadisticas-caja"">
          <div>0 <span>Amarillas</span></div>
        </div>
        <div class="estadisticas-caja"">
          <div>0 <span>Rojas</span></div>
        </div>
      </div>
      `
  }

  panel.classList.add("abierto");
}

function cerrarEstadisticas() {
  document.getElementById("panelEstadisticas").classList.remove("abierto");
}