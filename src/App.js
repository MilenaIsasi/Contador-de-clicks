import './App.css';
import Boton from './componentes/Boton' 
import Contador from './componentes/Contador' 
import { useState } from 'react';

function App() {
// creamos un constante que tiene una array(arreglo)
// tiene dos Elementos importantes. 
// El 1ro es numClics es el VALOR que queremos usar como ESTADO, q es un estado que vamos a guardar y vamos usar y actualizar
// El 2do elemento nos permite actualizar Set... nombre del estado
//luego se le asigna el valor retornado por useState()
  const [numClics, setNumClics] = useState (0);
//CODIGO PARA AUMENTAR EL NUMERO AL DAR CLIC, AL DAR CLIC EN EL BOTON AUMENTA 1
  const manejarClic = () =>{
    setNumClics (numClics + 1);
  };
  //CODIGO PARA REINICIAR EL CONTADOR 
  const reiniciarContador = () =>{
    setNumClics(0); //LE PASO EL VALOR 0 (CERO) 
  };

  return (
    <div className="App">
        <div className='freecodecamp-logo-contenedor'>
          <h1 className='title'>Contador de Clicks</h1>
        </div>
        <div className='contenedor-principal'> 
            <Contador
              numClics={numClics}
            />
          <div className='contendorBotones'>
          <Boton 
              texto='Clic'
              esBotonDeClic = {true}
              manejarClic = {manejarClic}
            />
            <Boton 
              texto='Reiniciar'
              esBotonDeClic = {false}
              manejarClic = {reiniciarContador}
            />
          </div>

        </div>
    </div>
  );
}

export default App;
