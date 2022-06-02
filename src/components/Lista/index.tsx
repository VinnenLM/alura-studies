import { ITarefa } from "../../types/tarefas";
import Item from "./Item";
import lista from './style.module.scss';

function Lista({ tarefas }: { tarefas: ITarefa[] }) {

    return (
        <aside className={lista.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                        key={index}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;