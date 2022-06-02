import React from "react";
import { ITarefa } from "../../../types/tarefas";
import lista from '../style.module.scss';

function Item({tarefa, tempo, selecionado, completado, id}: ITarefa) {
    console.log({tarefa, tempo, selecionado, completado, id});    
    return (
        <li className={lista.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    );
}

export default Item;