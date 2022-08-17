import { useEffect, useState } from "react";
import tempoParaSegundos from "../../common/utils/date";
import { ITarefa } from "../../types/tarefas";
import Botao from "../Button";
import Relogio from "./Relogio";
import estilo from './style.module.scss';

interface Props {
    selecionado: ITarefa | undefined,
    finalizarTarefa: () => void
}

function Cronometro({ selecionado, finalizarTarefa }: Props) {

    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if (selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo));
        }
    }, [selecionado]);

    function regressiva(contador: number = 0) {
        setTimeout(() => {
            if (contador > 0) {
                setTempo(contador - 1);
                return regressiva(contador - 1);
            }
            finalizarTarefa();
        }, 1000);
    }

    return (
        <div className={estilo.cronometro}>
            <p className={estilo.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={estilo.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <Botao
                onClick={() => regressiva(tempo)}
                texto="Começar!"
                type="button"
            />
        </div>
    );
}

export default Cronometro;