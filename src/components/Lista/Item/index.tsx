import React from "react";
import { ITarefa } from "../../../types/tarefas";
import item from './style.module.scss';

interface Props extends ITarefa {
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function Item({ tarefa, tempo, selecionado, completado, id, selecionaTarefa }: Props) {
    return (
        <li className={`${item.item} ${selecionado ? item.itemSelecionado : ''}`}
        onClick={() => selecionaTarefa({tarefa, tempo, selecionado, completado, id})}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    );
}

export default Item;