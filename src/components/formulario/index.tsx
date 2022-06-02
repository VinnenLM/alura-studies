import React from "react";
import { ITarefa } from "../../types/tarefas";
import Botao from "../Botao";
import form from './style.module.scss';

class Formulario extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}> {

    state = {
        tarefa: "",
        tempo: "00:00"
    };

    adicionarTarefa(evento: React.FormEvent) {
        evento.preventDefault();
        this.props.setTarefas(tarefasAntigas => [...tarefasAntigas, { ...this.state }]);
        this.setState({
            tarefa: "",
            tempo: "00:00"
        });
    }

    render(): React.ReactNode {
        return (
            <form className={form.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={form.inputContainer}>
                    <label htmlFor="tarefa">Adicione um novo estudo</label>
                    <input
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        placeholder="O que você quer estudar?"
                        value={this.state.tarefa}
                        onChange={evento => this.setState({ ...this.state, tarefa: evento.target.value })}
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
                        value={this.state.tempo}
                        onChange={evento => this.setState({ ...this.state, tempo: evento.target.value })}
                        required
                    />
                </div>
                <Botao
                    texto="Adicionar"
                    type="submit" />
            </form>
        )
    }
}

export default Formulario;