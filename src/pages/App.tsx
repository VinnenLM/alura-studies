import React, { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Form';
import Lista from '../components/Lista';
import { ITarefa } from '../types/tarefas';
import style from './style.module.scss';

function App() {

  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);

  const [selecionado, setSelelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({ ...tarefa, selecionado: tarefa.id === tarefaSelecionada.id ? true : false })))
  }

  function finalizarTarefa() {
    if (selecionado) {
      setSelelecionado(undefined);
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if (tarefa.id === selecionado.id) {
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa;
      }));
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro
        selecionado={selecionado}
        finalizarTarefa={finalizarTarefa} />
    </div>
  );
}

export default App;
