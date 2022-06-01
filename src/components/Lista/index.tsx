import React, { useState } from "react";
import Item from "./Item";
import lista from './style.module.scss';

function Lista() {

    const [tarefas, setTarefas] = useState([
        {
            tarefa: 'React',
            tempo: '02:00:00'
        },
        {
            tarefa: 'Javascript',
            tempo: '01:00:00'
        },
        {
            tarefa: 'Typescript',
            tempo: '03:00:00'
        }
    ]);

    return (
        <aside className="listaTarefas">
            <h2 onClick={() => {
                setTarefas([...tarefas, { tarefa: 'PHP', tempo: '00:00:00' }]);
            }
            }>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                        key={index}
                        tarefa={item.tarefa}
                        tempo={item.tempo}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;