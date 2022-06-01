import React from "react";
import lista from '../style.module.scss';

function Item({tarefa, tempo}: {tarefa: string, tempo: string}) {
    return (
        <li className={lista.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    );
}

export default Item;