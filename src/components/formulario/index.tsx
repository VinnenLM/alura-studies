import React from "react";
import Botao from "../botao";
import form from './style.module.scss';

class Formulario extends React.Component{
    render(): React.ReactNode {
        return(
            <form className={form.novaTarefa}>
                <div className={form.inputContainer}>
                    <label htmlFor="tarefa">Adicione um novo estudo</label>
                    <input 
                        type="text" 
                        name="tarefa" 
                        id="tarefa" 
                        placeholder="O que você quer estudar?"
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
                        required
                    />
                </div>
                <Botao texto="Opa" />
            </form>
        )
    }
}

export default Formulario;