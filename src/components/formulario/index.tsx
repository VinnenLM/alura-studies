import React, { useState } from "react";
import { ITarefa } from "../../types/tarefas";
import Botao from "../Botao";
import form from './style.module.scss';
import { v4 as uuidv4 } from 'uuid';

interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

function Formulario({ setTarefas }: Props) {

    const [tarefa, setTarefa] = useState("");
    const [tempo, setTempo] = useState("00:00");

    function adicionarTarefa(evento: React.FormEvent) {
        evento.preventDefault();
        setTarefas(tarefasAntigas =>
            [...tarefasAntigas,
            {
                tarefa,
                tempo,
                selecionado: false,
                completado: false,
                id: uuidv4()
            }
            ]);
        setTarefa("");
        setTempo("00:00")
    }

    return (
        <form className={form.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={form.inputContainer}>
                <label htmlFor="tarefa">Adicione um novo estudo</label>
                <input
                    type="text"
                    name="tarefa"
                    id="tarefa"
                    placeholder="O que você quer estudar?"
                    value={tarefa}
                    onChange={evento => setTarefa(evento.target.value)}
                    required
                />
            </div>
            <div className={form.inputContainer}>
                <label htmlFor="tempo">Tempo</label>
                <input
                    type="time"
                    step="1"
                    name="tempo"
                    id="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    value={tempo}
                    onChange={evento => setTempo(evento.target.value)}
                    required
                />
            </div>
            <Botao
                texto="Adicionar"
                type="submit" />
        </form>
    )
}

export default Formulario;