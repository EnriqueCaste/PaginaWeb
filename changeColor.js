document.querySelector('.club').addEventListener('click', function() {
    const fondo = generarDegradadoAleatorio();
    document.querySelector('.main-container').style.backgroundImage = fondo;
    document.querySelectorAll('.footer-container ul li a').forEach(icon => {
    icon.style.backgroundImage = fondo;
    });

  });

  function generarColorAleatorio() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function generarAnguloAleatorio() {
    return Math.floor(Math.random() * 360);
}
  
  function generarDegradadoAleatorio() {
    const colorPrimario = generarColorAleatorio();
    const colorSecundario = generarColorAleatorio();
    const angulo = generarAnguloAleatorio();
    
    return `linear-gradient(${angulo}deg, ${colorPrimario}, ${colorSecundario})`;
}
  