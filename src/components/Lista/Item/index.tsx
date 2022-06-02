import React from "react";
import { ITarefa } from "../../../types/tarefas";
import item from './style.module.scss';

interface Props extends ITarefa {
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function Item({ tarefa, tempo, selecionado, completado, id, selecionaTarefa }: Props) {
    return (
        <li className={`${item.item} ${selecionado ? item.itemSelecionado : ''} ${completado ? item.itemCompletado : ''}`}
        onClick={() => !completado && selecionaTarefa({tarefa, tempo, selecionado, completado, id})}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            {completado && <span className={item.concluido} aria-label="tarefa completada"></span>}
        </li>
    );
}

export default Item;