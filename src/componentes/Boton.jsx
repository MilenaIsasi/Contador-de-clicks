import React from 'react';
import '../hojas-de-estilo/Boton.css';
function Boton ({texto, esBotonDeClic, manejarClic}){
  return (
    // si esta expresion es verdadera voy a retornar boton-clic si es falsa voy a retornar boton-reiniciar
    <button className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
    onClick={manejarClic}>
      {texto}
    </button>
  );
}

export default Boton;