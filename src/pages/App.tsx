import React from 'react';
import Botao from '../components/botao';
import Formulario from '../components/formulario';
import Lista from '../components/Lista';
import style from  './style.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario />
      <Lista />
    </div>
  );
}

export default App;
