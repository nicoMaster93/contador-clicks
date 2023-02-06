import { useState } from 'react';
import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';

function App() {

  const [number, setNumber]  = useState(0);
  const clickEvent = () =>{
    console.log("click")
    setNumber(number+1)
  }
  const clickReload = () =>{
    console.log("click")
    setNumber(0)
  }
  return (
    <div className="App">
      <div className='container-principal'>
        <Contador 
          numero={number}
        />
        <Boton 
          texto="Click" 
          isClick={true}
          onClickEvent={clickEvent}
        />
        <Boton 
          texto="Reiniciar" 
          isClick={false}
          onClickEvent={clickReload}
        />
      </div>
    </div>
  );
}

export default App;
