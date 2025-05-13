document.querySelector('.caspint').addEventListener('click', function() {
    document.querySelector('.main-container').style.backgroundImage = generarDegradadoAleatorio();

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
  